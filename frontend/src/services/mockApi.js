// frontend/src/services/mockApi.js

export async function fetchStreams() {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      name: "Nature Live Stream",
      description: "Relaxing live stream from the forest",
      url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    },
    {
      id: 2,
      name: "City Traffic Live",
      description: "Watch live traffic in New York",
      url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    },
    {
      id: 3,
      name: "Ocean Waves",
      description: "Calming ocean waves live feed",
      url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    },
  ];
}
