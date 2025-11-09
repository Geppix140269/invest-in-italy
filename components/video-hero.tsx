"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { motion } from "framer-motion";

interface VideoHeroProps {
  videoSrc: string | string[];
  poster?: string;
  title?: string;
  subtitle?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  showOverlay?: boolean;
}

export function VideoHero({
  videoSrc,
  poster,
  title = "Invest in Italy",
  subtitle = "Your Gateway to Italian Investment Opportunities",
  showControls = true,
  autoPlay = true,
  loop = true,
  showOverlay = true,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);

  // Handle multiple videos
  const videos = Array.isArray(videoSrc) ? videoSrc : [videoSrc];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = videos[currentVideoIndex];

  // Auto-advance to next video when current one ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videos.length <= 1) return;

    const handleVideoEnd = () => {
      // Move to next video
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);

      // Auto-play next video if we were playing
      if (isPlaying && video) {
        setTimeout(() => {
          video.play().catch(err => console.log('Autoplay prevented:', err));
        }, 100);
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [videos.length, isPlaying]);

  // Update video source when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    if (isPlaying) {
      video.play().catch(err => console.log('Autoplay prevented:', err));
    }
  }, [currentVideoIndex, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          key={currentVideo}
          ref={videoRef}
          className="w-full h-full object-cover"
          src={currentVideo}
          autoPlay={autoPlay}
          loop={videos.length === 1 ? loop : false}
          muted={isMuted}
          playsInline
          poster={poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        )}
      </div>

      {/* Content Overlay */}
      {showOverlay && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-elegant text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm shimmer">
                {subtitle}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/50 hover:bg-white/10 text-lg px-8"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      )}

      {/* Video Controls */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 right-8 z-20 flex gap-2"
        >
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/20"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white" />
            )}
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/20"
            onClick={toggleMute}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-white" />
            ) : (
              <Volume2 className="h-4 w-4 text-white" />
            )}
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/20"
            onClick={toggleFullscreen}
          >
            <Maximize className="h-4 w-4 text-white" />
          </Button>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 text-center"
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full absolute left-1/2 -translate-x-1/2 top-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
