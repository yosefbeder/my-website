import React, { useEffect, useRef, useState } from "react";
import Pause from "./Pause";
import Play from "./Play";

export default function AudioPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const setAudioData = () => {
      if (
        audio.duration &&
        !isNaN(audio.duration) &&
        audio.duration !== Infinity
      ) {
        setDuration(audio.duration);
      }
    };
    if (audio.readyState >= 1) {
      setAudioData();
    }
    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("durationchange", setAudioData);
    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("durationchange", setAudioData);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const current = audio.currentTime;
    const total = audio.duration;

    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = e.currentTarget;

    if (!audio || !duration) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const percentage = Math.min(Math.max(0, clickX / width), 1);
    const newTime = percentage * duration;

    audio.currentTime = newTime;

    setCurrentTime(newTime);
    setProgress(percentage * 100);
  };

  const onEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const onLoadedMetadata = () => {
    console.log("loaded");
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="group flex items-center gap-2 p-2 pr-4 rounded-full bg-white border border-blue-100 w-full">
      <audio
        ref={audioRef}
        src={src}
        onEnded={onEnded}
        className="hidden"
        preload="metadata"
      />
      <button
        onClick={togglePlay}
        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause />
        ) : (
          <span className="pl-[1px]">
            <Play />
          </span>
        )}
      </button>
      <div className="flex flex-col flex-1 gap-1.5 justify-center">
        <div
          className="relative w-full h-1.5 bg-blue-200/60 rounded-full cursor-pointer group/bar"
          onClick={handleSeek}
        >
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-100 ease-linear pointer-events-none"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white border-2 border-blue-600 rounded-full shadow-sm opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200"></div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[11px] font-medium text-blue-500/80 tabular-nums leading-none">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
