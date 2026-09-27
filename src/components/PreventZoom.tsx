"use client";

import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    // 1. Prevent Safari multi-touch gestures (pinch zoom in / out)
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    // 2. Prevent multi-finger touch pinch zoom
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // 3. Prevent pinch-zoom via trackpad or mouse wheel with Ctrl key
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // 4. Prevent keyboard zoom shortcuts (Ctrl/Cmd + '+', '-', '0')
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "_")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("gesturechange", preventGesture, { passive: false });
    document.addEventListener("gestureend", preventGesture, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
