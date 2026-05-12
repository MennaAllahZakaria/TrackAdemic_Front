import {
  useState,
} from "react";

function NotificationModal({
  open,
  onClose,
  onSubmit,
}) {
  const [form, setForm] =
    useState({
      title: "",
      message: "",
      type: "general",
    });

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
          max-w-[700px]

          p-6
          sm:p-8
        "
      >

        <div
          className="
            flex items-center
            justify-between

            mb-8
          "
        >

          <h2
            className="
              text-3xl

              font-bold
            "
          >
            Create Notification
          </h2>

          <button
            onClick={onClose}
            className="
              text-2xl
            "
          >
            ✕
          </button>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Notification title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title:
                  e.target.value,
              })
            }
            className="
              w-full

              px-5 py-4

              rounded-2xl

              bg-gray-100

              outline-none
            "
          />

          <textarea
            rows={6}
            placeholder="Notification message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message:
                  e.target.value,
              })
            }
            className="
              w-full

              px-5 py-4

              rounded-2xl

              bg-gray-100

              outline-none
            "
          />

          <select
            value={form.type}
            onChange={(e) =>
              setForm({
                ...form,
                type:
                  e.target.value,
              })
            }
            className="
              w-full

              px-5 py-4

              rounded-2xl

              bg-gray-100

              outline-none
            "
          >

            <option value="general">
              General
            </option>

            <option value="announcement">
              Announcement
            </option>

            <option value="system">
              System Alert
            </option>

          </select>

        </div>

        <button
          onClick={() =>
            onSubmit(form)
          }
          className="
            w-full

            mt-8

            py-4

            rounded-2xl

            bg-cyan-500

            text-white

            font-semibold
          "
        >
          Send Notification
        </button>

      </div>

    </div>
  );
}

export default NotificationModal;