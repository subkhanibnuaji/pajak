"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkState {
  bookmarks: string[];
  addBookmark: (slug: string) => void;
  removeBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  toggleBookmark: (slug: string) => void;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (slug) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(slug)
            ? s.bookmarks
            : [...s.bookmarks, slug],
        })),
      removeBookmark: (slug) =>
        set((s) => ({
          bookmarks: s.bookmarks.filter((b) => b !== slug),
        })),
      isBookmarked: (slug) => get().bookmarks.includes(slug),
      toggleBookmark: (slug) => {
        const { bookmarks } = get();
        if (bookmarks.includes(slug)) {
          set({ bookmarks: bookmarks.filter((b) => b !== slug) });
        } else {
          set({ bookmarks: [...bookmarks, slug] });
        }
      },
    }),
    { name: "pajakku-bookmarks" }
  )
);
