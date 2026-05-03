"use client";

import { useState, useEffect } from "react";

const messages = [
  "4 stores being fixed right now",
  "Last fix completed 18 min ago",
  "2 experts available now — fast response",
  "Store down? Get help in minutes →",
  "98% of issues resolved same day",
];

export default function ActivityTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f2d5e] border-b border-white/10 h-8 flex items-center justify-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
      <span
        className="text-xs font-medium text-white/80 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {messages[index]}
      </span>
    </div>
  );
}
