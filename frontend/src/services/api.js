const BASE_URL = "http://localhost:8083/api";

export async function fetchStreams() {
  try {
    const response = await fetch(`${BASE_URL}/streams`);
    if (!response.ok) throw new Error("Failed to fetch streams");
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
