function YoutubeModal({
  videoId,
  onClose,
}) {
  if (!videoId) return null;

  return (
    <div
      className="
        fixed inset-0 z-50

        bg-black/70

        backdrop-blur-sm

        flex items-center justify-center

        p-4
      "
    >

      <div
        className="
          relative

          w-full
          max-w-5xl
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute

            -top-12
            right-0

            w-10 h-10

            rounded-full

            bg-white/10

            text-white

            flex items-center justify-center

            hover:bg-white/20

            transition-all duration-300
          "
        >
          ✕
        </button>

        {/* VIDEO */}
        <div
          className="
            relative

            w-full

            overflow-hidden

            rounded-2xl

            bg-black

            aspect-video
          "
        >

          <iframe
            className="
              absolute inset-0

              w-full h-full
            "
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

        </div>

      </div>

    </div>
  );
}

export default YoutubeModal;