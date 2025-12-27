import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchStreams } from "../services/api";
import "./Home.css";

export default function Home() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    async function getStreams() {
      const data = await fetchStreams();
      setStreams(data);
    }
    getStreams();
  }, []);

  return (
    <div className="home-container">
      <h1>Live Streams</h1>
      <div className="streams-grid">
        {streams.map((stream) => (
          <div key={stream.id} className="stream-card">
            <ReactPlayer
              url={stream.url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"} // placeholder
              playing
              controls
              width="100%"
              height="150px"
            />
            <h2>{stream.name}</h2>
            <p>{stream.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
