import { mockStreams } from '../api/mockStreams'
import StreamCard from '../components/StreamCard'

export default function Home() {
  return (
    <>
      <h1>Live Streams</h1>

      {mockStreams.map(stream => (
        <StreamCard key={stream.id} stream={stream} />
      ))}
    </>
  )
}
