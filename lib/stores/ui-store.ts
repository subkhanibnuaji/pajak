"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebarCollapsed: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: false,
      sidebarCollapsed: false,
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebarCollapsed: () =>
        set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
    }),
    {
      name: "pajakku-ui",
      partialize: (state) => ({ sidebarCollapsed: state.sidebarCollapsed }),
    }
  )
);
