import {
  useState,
} from "react";

function CreateUserModal({
  open,
  onClose,
  onSubmit,
  loading = false,
}) {

  const initialForm = {

    firstName: "",

    lastName: "",

    email: "",

    role: "user",

  };

  const [form, setForm] =
    useState(initialForm);

  if (!open) return null;

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit =
    async () => {

      if (!form.firstName.trim()) {
        return alert(
          "First name is required"
        );
      }

      if (!form.lastName.trim()) {
        return alert(
          "Last name is required"
        );
      }

      if (!form.email.trim()) {
        return alert(
          "Email is required"
        );
      }

      try {

        await onSubmit(form);

        setForm(initialForm);

        onClose();

      } catch (err) {

        console.log(err);

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
          max-w-[650px]

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

          <div>

            <p
              className="
                text-sm

                text-cyan-600

                font-semibold
              "
            >
              ADMIN PANEL
            </p>

            <h2
              className="
                text-3xl

                font-bold

                mt-2
              "
            >
              Create User
            </h2>

          </div>

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

          {/* FIRST NAME */}
          <input
            type="text"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName:
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

          {/* LAST NAME */}
          <input
            type="text"
            placeholder="Last name"
            value={form.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                lastName:
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

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
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

          {/* ROLE */}
          <select
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role:
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

            <option value="user">
              User
            </option>

            <option value="admin">
              Admin
            </option>

          </select>

          {/* INFO */}
          <div
            className="
              bg-cyan-50

              border border-cyan-100

              rounded-2xl

              p-4

              text-sm

              text-cyan-700
            "
          >
            A random password will be
            generated automatically
            and sent to the user's
            email.
          </div>

        </div>

        {/* BUTTON */}
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

            disabled:opacity-60
          "
        >

          {loading
            ? "Creating..."
            : "Create User"}

        </button>

      </div>

    </div>
  );
}

export default CreateUserModal;