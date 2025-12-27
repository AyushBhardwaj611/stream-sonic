import { useEffect, useState } from "react";
import { fetchStreams } from "../services/api";

export default function Home() {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStreams() {
      const data = await fetchStreams();
      console.log("Fetched streams:", data);
      setStreams(data);
      setLoading(false);
    }

    loadStreams();
  }, []);

  if (loading) {
    return <h2>Loading streams...</h2>;
  }

  return (
    <div>
      <h1>Live Streams</h1>

      {streams.length === 0 ? (
        <p>No live streams available</p>
      ) : (
        streams.map((stream) => (
          <div key={stream.id} style={{ marginBottom: "20px" }}>
            <h3>{stream.name}</h3>
            <p>{stream.description}</p>

            <video width="600" controls>
              <source src={stream.url} type="video/mp4" />
            </video>
          </div>
        ))
      )}
    </div>
  );
}
