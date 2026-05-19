function ResolveContactModal({
  open,
  onClose,
  onConfirm,
  adminReply,
  setAdminReply,
  loading = false,
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
          max-w-xl

          rounded-[32px]

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
          Resolve Contact
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-500

            mb-6
          "
        >
          Write an admin reply that
          will be sent to the user
          via email.
        </p>

        {/* TEXTAREA */}
        <textarea
          rows={7}
          placeholder="Write admin reply..."
          value={adminReply}
          onChange={(e) =>
            setAdminReply(
              e.target.value
            )
          }
          className="
            w-full

            px-5 py-4

            rounded-2xl

            bg-gray-100

            outline-none

            resize-none
          "
        />

        {/* ACTIONS */}
        <div
          className="
            flex items-center
            gap-3

            mt-6
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
            "
          >
            Cancel
          </button>

          {/* RESOLVE */}
          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              flex-1

              py-3

              rounded-2xl

              bg-cyan-500

              text-white

              font-medium
            "
          >

            {loading
              ? "Resolving..."
              : "Resolve"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default ResolveContactModal;