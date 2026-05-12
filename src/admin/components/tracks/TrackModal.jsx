import {
  useEffect,
  useState,
} from "react";

function TrackModal({
  open,
  onClose,
  onSubmit,
  initialData,
}) {

  const emptyForm = {
    title: "",
    description: "",
    category: "",
    level: "",
    totalHours: "",
    totalModules: "",
    trackImage: null,
  };

  const [form, setForm] =
    useState(emptyForm);

  const [preview,
    setPreview] =
    useState("");

  // ================= INITIAL DATA =================
  useEffect(() => {

    if (initialData) {

      setForm({
        title:
          initialData.title || "",

        description:
          initialData.description || "",

        category:
          initialData.category || "",

        level:
          initialData.level || "",

        totalHours:
          initialData.totalHours || "",

        totalModules:
          initialData.totalModules || "",

        trackImage: null,
      });

      setPreview(
        initialData.trackImage || ""
      );

    } else {

      setForm(emptyForm);

      setPreview("");

    }

  }, [initialData, open]);

  // ================= IMAGE CHANGE =================
  const handleImageChange =
    (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      setForm({
        ...form,
        trackImage: file,
      });

      setPreview(
        URL.createObjectURL(file)
      );

    };

  // ================= SUBMIT =================
  const handleSubmit =
    () => {

      const formData =
        new FormData();

      formData.append(
        "title",
        form.title
      );

      formData.append(
        "description",
        form.description
      );

      formData.append(
        "category",
        form.category
      );

      formData.append(
        "level",
        form.level
      );

      formData.append(
        "totalHours",
        Number(form.totalHours)
      );

      formData.append(
        "totalModules",
        Number(form.totalModules)
      );

      if (form.trackImage) {

        formData.append(
          "trackImage",
          form.trackImage
        );

      }

      onSubmit(formData);

    };

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0

        z-50

        bg-black/50
        backdrop-blur-sm

        flex items-center
        justify-center

        p-4
      "
    >

      <div
        className="
          bg-white

          rounded-[36px]

          w-full
          max-w-[760px]

          max-h-[95vh]
          overflow-y-auto

          p-6
          sm:p-8
        "
      >

        {/* HEADER */}
        <div
          className="
            flex items-center
            justify-between

            mb-10
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
              TRACK MANAGEMENT
            </p>

            <h2
              className="
                text-3xl
                font-bold

                text-gray-900

                mt-2
              "
            >
              {initialData
                ? "Edit Track"
                : "Create New Track"}
            </h2>

          </div>

          <button
            onClick={onClose}
            className="
              w-12 h-12

              rounded-2xl

              bg-gray-100

              flex items-center
              justify-center

              text-xl

              hover:bg-gray-200

              transition-all duration-300
            "
          >
            <i className="ri-close-line"></i>
          </button>

        </div>

        {/* FORM */}
        <div className="space-y-7">

          {/* TITLE */}
          <div>

            <label
              className="
                block

                text-sm
                font-semibold

                text-gray-700

                mb-3
              "
            >
              Track Title
            </label>

            <input
              type="text"
              placeholder="Enter track title"
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

                border border-transparent

                outline-none

                focus:border-cyan-400
                focus:bg-white

                transition-all duration-300
              "
            />

          </div>

          {/* DESCRIPTION */}
          <div>

            <label
              className="
                block

                text-sm
                font-semibold

                text-gray-700

                mb-3
              "
            >
              Description
            </label>

            <textarea
              placeholder="Write track description..."
              rows={6}
              value={
                form.description
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  description:
                    e.target.value,
                })
              }
              className="
                w-full

                px-5 py-4

                rounded-2xl

                bg-gray-100

                border border-transparent

                outline-none

                resize-none

                focus:border-cyan-400
                focus:bg-white

                transition-all duration-300
              "
            />

          </div>

          {/* CATEGORY + HOURS */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2

              gap-5
            "
          >

            {/* CATEGORY */}
            <div>

              <label
                className="
                  block

                  text-sm
                  font-semibold

                  text-gray-700

                  mb-3
                "
              >
                Category
              </label>

              <input
                type="text"
                placeholder="UI/UX, Frontend..."
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category:
                      e.target.value,
                  })
                }
                className="
                  w-full

                  px-5 py-4

                  rounded-2xl

                  bg-gray-100

                  border border-transparent

                  outline-none

                  focus:border-cyan-400
                  focus:bg-white

                  transition-all duration-300
                "
              />

            </div>

            {/* TOTAL HOURS */}
            <div>

              <label
                className="
                  block

                  text-sm
                  font-semibold

                  text-gray-700

                  mb-3
                "
              >
                Total Hours
              </label>

              <input
                type="number"
                placeholder="Estimated hours"
                value={form.totalHours}
                onChange={(e) =>
                  setForm({
                    ...form,
                    totalHours:
                      e.target.value,
                  })
                }
                className="
                  w-full

                  px-5 py-4

                  rounded-2xl

                  bg-gray-100

                  border border-transparent

                  outline-none

                  focus:border-cyan-400
                  focus:bg-white

                  transition-all duration-300
                "
              />

            </div>

          </div>

          {/* IMAGE */}
          <div>

            <label
              className="
                block

                text-sm
                font-semibold

                text-gray-700

                mb-3
              "
            >
              Track Image
            </label>

            <label
              className="
                border-2
                border-dashed
                border-gray-200

                rounded-[28px]

                p-8

                flex flex-col
                items-center
                justify-center

                cursor-pointer

                hover:border-cyan-400
                hover:bg-cyan-50/40

                transition-all duration-300
              "
            >

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={
                  handleImageChange
                }
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="
                    w-full
                    h-[240px]

                    object-cover

                    rounded-2xl
                  "
                />
              ) : (
                <>

                  <div
                    className="
                      w-20 h-20

                      rounded-full

                      bg-cyan-100

                      flex items-center
                      justify-center

                      text-cyan-600
                      text-4xl
                    "
                  >
                    <i className="ri-image-add-line"></i>
                  </div>

                  <h3
                    className="
                      text-lg
                      font-bold

                      text-gray-900

                      mt-5
                    "
                  >
                    Upload Track Image
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500

                      mt-2
                    "
                  >
                    Click to browse image
                  </p>

                </>
              )}

            </label>

          </div>

          {/* LEVEL + MODULES */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2

              gap-5
            "
          >

            {/* LEVEL */}
            <div>

              <label
                className="
                  block

                  text-sm
                  font-semibold

                  text-gray-700

                  mb-3
                "
              >
                Track Level
              </label>

              <select
                value={form.level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    level:
                      e.target.value,
                  })
                }
                className="
                  w-full

                  px-5 py-4

                  rounded-2xl

                  bg-gray-100

                  border border-transparent

                  outline-none

                  focus:border-cyan-400
                  focus:bg-white

                  transition-all duration-300
                "
              >

                <option value="">
                  Select level
                </option>

                <option value="beginner">
                  Beginner
                </option>

                <option value="intermediate">
                  Intermediate
                </option>

                <option value="advanced">
                  Advanced
                </option>

              </select>

            </div>

            {/* MODULES */}
            <div>

              <label
                className="
                  block

                  text-sm
                  font-semibold

                  text-gray-700

                  mb-3
                "
              >
                Total Modules
              </label>

              <input
                type="number"
                placeholder="Enter modules count"
                value={
                  form.totalModules
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    totalModules:
                      e.target.value,
                  })
                }
                className="
                  w-full

                  px-5 py-4

                  rounded-2xl

                  bg-gray-100

                  border border-transparent

                  outline-none

                  focus:border-cyan-400
                  focus:bg-white

                  transition-all duration-300
                "
              />

            </div>

          </div>

        </div>

        {/* ACTIONS */}
        <div
          className="
            flex items-center
            gap-4

            mt-10
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

              hover:bg-gray-200

              transition-all duration-300
            "
          >
            Cancel
          </button>

          <button
            onClick={
              handleSubmit
            }
            className="
              flex-1

              py-4

              rounded-2xl

              bg-cyan-500
              hover:bg-cyan-400

              text-white

              font-semibold

              transition-all duration-300
            "
          >
            {initialData
              ? "Save Changes"
              : "Create Track"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default TrackModal;