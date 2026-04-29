const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getYoutubeThumbnail = async (query) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}&maxResults=1&type=video`
    );

    const data = await res.json();

    const videoId = data.items?.[0]?.id?.videoId;

    if (!videoId) return null;

    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getYoutubeVideoId = async (query) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&key=${API_KEY}&maxResults=1&type=video`
  );

  const data = await res.json();

  return data.items?.[0]?.id?.videoId || null;
};