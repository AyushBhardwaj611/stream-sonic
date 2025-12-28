import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HlsPlayer = () => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Native HLS (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "http://localhost:8080/hls/stream1.m3u8";
      video.play().catch(() => {});
      return;
    }

    // Hls.js (Chrome, Firefox)
    if (Hls.isSupported()) {
      const hls = new Hls({
        liveDurationInfinity: true,
        lowLatencyMode: true,
      });

      hlsRef.current = hls;

      hls.loadSource("http://localhost:8080/hls/stream1.m3u8");
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
        hlsRef.current = null;
      };
    }
  }, []); // 🔑 EMPTY dependency array — INIT ONCE

  return (
    <video
      ref={videoRef}
      controls
      muted
      autoPlay
      playsInline
      style={{ width: "100%", background: "black" }}
    />
  );
};

export default HlsPlayer;
