
## 🧱 Tech Stack

- RTMP for live ingest
- HLS for video delivery
- NGINX for ingest and static serving
- FFmpeg for transcoding
- hls.js for browser playback
- Spring Boot (metadata & APIs)
- Docker for local orchestration

## 🚀 MVP Scope

### Included
- Live video streaming
- Multiple concurrent viewers
- Low-latency (~2–3s)
- Simple backend for stream metadata

### Excluded (by design)
- Chat
- DRM
- Authentication
- Monetization

## 📦 How to Run
Instructions will be added as part of the implementation.
# Live Streaming MVP

This project is a **minimal viable product (MVP)** for a scalable live video streaming system.

## 🎯 Goal
- Support multiple live streams
- Allow multiple concurrent viewers per stream
- Maintain ~2–3 seconds latency
- Demonstrate scalable, CDN-friendly architecture

## 🏗️ Architecture Overview

¸
OBS (Publisher)
|
RTMP
|
NGINX + RTMP
|
FFmpeg (HLS, 1s segments)
|
NGINX (Static HLS)
|
Browser (hls.js)# stream-sonic
