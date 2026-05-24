function DeleteUserModal({

  open,

  onClose,

  onConfirm,

  user,

  loading,

}) {

  if (!open) {
    return null;
  }

  return (

    <div
      className="
        fixed inset-0

        bg-black/40

        backdrop-blur-[2px]

        flex items-center
        justify-center

        p-4

        z-[999]
      "
    >

      <div
        className="
          w-full
          max-w-md

          bg-white

          rounded-[32px]

          p-8

          shadow-2xl
        "
      >

        {/* ICON */}
        <div
          className="
            w-20 h-20

            rounded-3xl

            bg-red-100

            flex items-center
            justify-center

            mx-auto
          "
        >

          <i
            className="
              ri-delete-bin-6-line

              text-4xl

              text-red-600
            "
          ></i>

        </div>

        {/* TITLE */}
        <h2
          className="
            text-2xl

            font-bold

            text-center

            text-gray-900

            mt-6
          "
        >
          Delete User
        </h2>

        {/* TEXT */}
        <p
          className="
            text-center

            text-gray-500

            mt-3

            leading-relaxed
          "
        >
          Are you sure you want to delete{" "}

          <span className="font-semibold text-gray-800">
            {user?.firstName} {user?.lastName}
          </span>

          ? This action cannot be undone.
        </p>

        {/* ACTIONS */}
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

              h-12

              rounded-2xl

              bg-gray-100

              text-gray-700

              font-medium

              hover:bg-gray-200

              transition-all
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}

            disabled={loading}

            className="
              flex-1

              h-12

              rounded-2xl

              bg-red-500

              text-white

              font-medium

              hover:bg-red-600

              transition-all

              disabled:opacity-50
            "
          >
            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </div>

      </div>

    </div>

  );
}

export default DeleteUserModal;
