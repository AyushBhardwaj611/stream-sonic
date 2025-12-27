import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchStreams } from "../services/api"; // updated import
import "./Home.css";

export default function Home() {
  const [streams, setStreams] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);

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
          <div
            key={stream.id}
            className="stream-card"
            onClick={() => setSelectedStream(stream)}
          >
            <ReactPlayer
              url={stream.url}   // your backend should provide a URL field for streams
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

      {selectedStream && (
        <div className="modal-overlay" onClick={() => setSelectedStream(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ReactPlayer
              url={selectedStream.url}
              playing
              controls
              width="100%"
              height="100%"
            />
            <h2>{selectedStream.name}</h2>
            <p>{selectedStream.description}</p>
            <button className="close-btn" onClick={() => setSelectedStream(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
