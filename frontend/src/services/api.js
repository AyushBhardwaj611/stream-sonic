export async function fetchStreams() {
  try {
    const response = await fetch("http://localhost:8083/api/streams");

    if (!response.ok) {
      throw new Error("Failed to fetch streams");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching streams:", error);
    return [];
  }
}
