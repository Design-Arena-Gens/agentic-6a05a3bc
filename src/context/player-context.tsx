"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Playlist, Track } from "@/data/playlists";

type PlayerState = {
  currentTrack: Track | null;
  currentPlaylist: Playlist | null;
  isPlaying: boolean;
  progressMs: number;
};

type PlayerContextValue = PlayerState & {
  playTrack: (track: Track, playlist?: Playlist | null) => void;
  togglePlay: () => void;
  seek: (percentage: number) => void;
  playNext: () => void;
  playPrevious: () => void;
};

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

const initialState: PlayerState = {
  currentTrack: null,
  currentPlaylist: null,
  isPlaying: false,
  progressMs: 0,
};

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PlayerState>(initialState);

  const playTrack = useCallback((track: Track, playlist?: Playlist | null) => {
    setState({
      currentTrack: track,
      currentPlaylist: playlist ?? null,
      isPlaying: true,
      progressMs: 0,
    });
  }, []);

  const togglePlay = useCallback(() => {
    setState((prev) =>
      prev.currentTrack
        ? {
            ...prev,
            isPlaying: !prev.isPlaying,
          }
        : prev,
    );
  }, []);

  const seek = useCallback((percentage: number) => {
    setState((prev) => {
      if (!prev.currentTrack) {
        return prev;
      }

      const clamped = Math.min(Math.max(percentage, 0), 1);
      return {
        ...prev,
        progressMs: Math.round(prev.currentTrack.durationMs * clamped),
      };
    });
  }, []);

  const changeTrack = useCallback(
    (direction: 1 | -1) => {
      setState((prev) => {
        const { currentTrack, currentPlaylist } = prev;
        if (!currentTrack || !currentPlaylist) {
          return prev;
        }

        const index = currentPlaylist.tracks.findIndex((track) => track.id === currentTrack.id);
        if (index === -1) {
          return prev;
        }

        const nextIndex = index + direction;
        const wrappedIndex =
          nextIndex < 0
            ? currentPlaylist.tracks.length - 1
            : nextIndex >= currentPlaylist.tracks.length
              ? 0
              : nextIndex;
        const nextTrack = currentPlaylist.tracks[wrappedIndex];

        if (!nextTrack) {
          return prev;
        }

        return {
          currentTrack: nextTrack,
          currentPlaylist,
          isPlaying: true,
          progressMs: 0,
        };
      });
    },
    [],
  );

  const playNext = useCallback(() => changeTrack(1), [changeTrack]);
  const playPrevious = useCallback(() => changeTrack(-1), [changeTrack]);

  useEffect(() => {
    if (!state.currentTrack || !state.isPlaying) {
      return;
    }

    const id = window.setInterval(() => {
      setState((prev) => {
        if (!prev.currentTrack || !prev.isPlaying) {
          return prev;
        }

        const nextProgress = prev.progressMs + 1000;
        if (nextProgress >= prev.currentTrack.durationMs) {
          if (prev.currentPlaylist) {
            const index = prev.currentPlaylist.tracks.findIndex(
              (track) => track.id === prev.currentTrack?.id,
            );
            const nextTrack =
              index >= 0
                ? prev.currentPlaylist.tracks[(index + 1) % prev.currentPlaylist.tracks.length]
                : null;

            return nextTrack
              ? {
                  currentTrack: nextTrack,
                  currentPlaylist: prev.currentPlaylist,
                  isPlaying: true,
                  progressMs: 0,
                }
              : {
                  ...prev,
                  isPlaying: false,
                  progressMs: prev.currentTrack.durationMs,
                };
          }

          return {
            ...prev,
            isPlaying: false,
            progressMs: prev.currentTrack.durationMs,
          };
        }

        return {
          ...prev,
          progressMs: nextProgress,
        };
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [state.currentTrack, state.isPlaying]);

  const value = useMemo<PlayerContextValue>(
    () => ({
      ...state,
      playTrack,
      togglePlay,
      seek,
      playNext,
      playPrevious,
    }),
    [state, playTrack, togglePlay, seek, playNext, playPrevious],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }

  return context;
};
