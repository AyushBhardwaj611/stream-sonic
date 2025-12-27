export default function StreamCard({ stream }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '12px'
      }}
    >
      <h3>{stream.name}</h3>
      <p>{stream.description}</p>

      <span style={{ color: 'red', fontWeight: 'bold' }}>
        ● LIVE
      </span>
    </div>
  )
}
