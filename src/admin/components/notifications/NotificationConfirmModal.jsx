function ConfirmModal({
  open,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onClose,
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

          w-full
          max-w-md

          rounded-[28px]

          p-6
        "
      >

        {/* TITLE */}
        <h2
          className="
            text-2xl
            font-bold

            mb-3
          "
        >
          {title}
        </h2>

        {/* MESSAGE */}
        <p
          className="
            text-gray-600

            leading-relaxed

            mb-8
          "
        >
          {message}
        </p>

        {/* ACTIONS */}
        <div
          className="
            flex items-center
            gap-3
          "
        >

          {/* CANCEL */}
          <button
            onClick={onClose}
            disabled={loading}
            className="
              flex-1

              py-3

              rounded-2xl

              bg-gray-100

              font-medium

              disabled:opacity-50
            "
          >
            {cancelText}
          </button>

          {/* CONFIRM */}
          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              flex-1

              py-3

              rounded-2xl

              bg-red-500

              text-white

              font-medium

              disabled:opacity-50
            "
          >

            {loading
              ? "Deleting..."
              : confirmText}

          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;