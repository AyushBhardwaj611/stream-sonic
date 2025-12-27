const BASE_URL = 'http://localhost:8083/api/streams'

export async function fetchStreams() {
  const res = await fetch(BASE_URL)
  if (!res.ok) {
    throw new Error('Failed to fetch streams')
  }
  return res.json()
}
