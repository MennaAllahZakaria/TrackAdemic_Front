import { useState } from "react";
import toast from "react-hot-toast";

function NotificationModal({
  open,
  onClose,
  onSubmit,
  loading = false,
}) {

  const initialForm = {
    title: "",
    message: "",
    type: "GENERAL",
    userEmail: "",
    sendToAll: false,
  };

  const [form, setForm] =
    useState(initialForm);

  if (!open) return null;

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async () => {

    // validation
    if (!form.title.trim()) {
      return toast.error("Title is required");
    }

    if (!form.message.trim()) {
      return toast.error("Message is required");
    }

    if (
      !form.sendToAll &&
      !form.userEmail.trim()
    ) {
      return toast.error("User email is required");
    }

    try {

      await onSubmit(form);

      // reset form after success
      setForm(initialForm);

      onClose();
      toast.success("Notification sent successfully!");

    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to send notification");
    }
  };

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

          p-6 sm:p-8
        "
      >

        {/* HEADER */}
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
            disabled={loading}
            onClick={onClose}
            className="
              text-2xl

              disabled:opacity-50
            "
          >
            ✕
          </button>

        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* TITLE */}
          <input
            type="text"
            placeholder="Notification title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
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

          {/* MESSAGE */}
          <textarea
            rows={6}
            placeholder="Notification message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
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

          {/* TYPE */}
          <select
            value={form.type}
            onChange={(e) =>
              setForm({
                ...form,
                type: e.target.value,
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

            <option value="GENERAL">
              General
            </option>

            <option value="ANNOUNCEMENT">
              Announcement
            </option>

            <option value="SYSTEM_ALERT">
              System Alert
            </option>

          </select>

          {/* SEND TO ALL */}
          <label
            className="
              flex items-center
              gap-3

              text-sm
              font-medium
            "
          >

            <input
              type="checkbox"
              checked={form.sendToAll}
              onChange={(e) =>
                setForm({
                  ...form,
                  sendToAll:
                    e.target.checked,

                  // clear email
                  userEmail: "",
                })
              }
            />

            Send to all users
          </label>

          {/* WARNING */}
          {form.sendToAll && (

            <div
              className="
                bg-yellow-50

                border border-yellow-200

                text-yellow-700

                rounded-2xl

                px-4 py-3

                text-sm
              "
            >
              This notification will
              be sent to all users.
            </div>

          )}

          {/* USER EMAIL */}
          {!form.sendToAll && (

            <input
              type="email"
              placeholder="User email"
              value={form.userEmail}
              onChange={(e) =>
                setForm({
                  ...form,
                  userEmail:
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

          )}

        </div>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            w-full

            mt-8

            py-4

            rounded-2xl

            bg-cyan-500

            text-white

            font-semibold

            transition-all

            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >

          {loading
            ? "Sending..."
            : "Send Notification"}

        </button>

      </div>

    </div>
  );
}

export default NotificationModal;
