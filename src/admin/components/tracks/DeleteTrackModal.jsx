function DeleteTrackModal({
  open,
  onClose,
  onConfirm,
  track,
}) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0

        z-50

        bg-black/40

        flex items-center
        justify-center

        p-4
      "
    >

      <div
        className="
          bg-white

          rounded-[32px]

          w-full
          max-w-[500px]

          p-8
        "
      >

        <h2
          className="
            text-3xl

            font-bold

            text-gray-900
          "
        >
          Delete Track
        </h2>

        <p
          className="
            text-gray-500

            leading-[1.9]

            mt-5
          "
        >
          Are you sure you want
          to delete
          {" "}
          <span className="font-semibold">
            {track?.title}
          </span>
          ?
        </p>

        <div
          className="
            flex gap-4

            mt-8
          "
        >

          <button
            onClick={onClose}
            className="
              flex-1

              py-4

              rounded-2xl

              bg-gray-100

              font-semibold
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              flex-1

              py-4

              rounded-2xl

              bg-red-500

              text-white

              font-semibold
            "
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteTrackModal;