import api from "../../../services/api";

import {
  useEffect,
  useState,
  useRef,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import Cropper
from "react-easy-crop";

import ToggleItem
from "../../ToggleItem";

import useUserContext
from "../../../hooks/useUserContext";

function SettingsContent({
  user,
  isAdmin = false,
}) {

  const [image,
    setImage] =
    useState("");

  const [originalImage,
    setOriginalImage] =
    useState("");

  const { context } =
    useUserContext();

  // ================= CROP STATES =================

  const [showCrop,
    setShowCrop] =
    useState(false);

  const [crop,
    setCrop] =
    useState({
      x: 0,
      y: 0,
    });

  const [zoom,
    setZoom] =
    useState(1);

  const [
    croppedAreaPixels,
    setCroppedAreaPixels,
  ] = useState(null);

  // ================= DRAG =================

  const [dragActive,
    setDragActive] =
    useState(false);

  const fileInputRef =
    useRef(null);

  const navigate =
    useNavigate();

  // ================= SAFE DATA =================

  const completion =
    context?.overallProgressPercent
      ? context
          .overallProgressPercent
          .toFixed(1)
      : 0;

  const hours =
    context?.totalHoursStudied || 0;

  const weekly =
    context
      ?.hoursStudiedThisWeek || 0;

  // ================= IMAGE =================

  useEffect(() => {

    if (user) {

      setImage(
        user?.imageProfile ||
        ""
      );

      setOriginalImage(
        user?.imageProfile ||
        ""
      );

    }

  }, [user]);

  // cleanup blob URLs
  useEffect(() => {

    return () => {

      if (
        image?.startsWith(
          "blob:"
        )
      ) {

        URL.revokeObjectURL(
          image
        );

      }

    };

  }, [image]);

  // ================= FILE =================

  const handleFile =
    (file) => {

      if (!file) return;

      const preview =
        URL.createObjectURL(
          file
        );

      setImage(preview);

      setShowCrop(true);

    };

  const handleCancel =
    () => {

      setShowCrop(false);

      setImage(
        originalImage
      );

    };

  // ================= CROP =================

  const getCroppedImage =
    async () => {

      const imageObj =
        new Image();

      imageObj.src =
        image;

      await new Promise(
        (resolve) => {

          imageObj.onload =
            resolve;

        }
      );

      const canvas =
        document.createElement(
          "canvas"
        );

      const ctx =
        canvas.getContext("2d");

      canvas.width =
        croppedAreaPixels.width;

      canvas.height =
        croppedAreaPixels.height;

      ctx.drawImage(
        imageObj,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      return new Promise(
        (resolve) => {

          canvas.toBlob(
            (blob) => {

              resolve(blob);

            },
            "image/jpeg"
          );

        }
      );

    };

  // ================= UPLOAD =================

  const handleConfirmUpload =
    async () => {

      try {

        const croppedBlob =
          await getCroppedImage();

        const formData =
          new FormData();

        formData.append(
          "imageProfile",
          croppedBlob,
          "profile.jpg"
        );

        const res =
          await api.patch(
            "/auth/updateImageProfile",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        const newImage =
          res.data.data
            .imageProfile;

        setImage(
          newImage
        );

        setOriginalImage(
          newImage
        );

        setShowCrop(false);

      } catch (err) {

        console.error(err);

      }

    };

  return (
    <>

      {/* MAIN GRID */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3

          gap-6
        "
      >

        {/* LEFT */}
        <div
          className="
            lg:col-span-2
            space-y-6
          "
        >

          {/* PROFILE */}
          <div
            className="
              bg-white
              rounded-[32px]

              p-6
              sm:p-8

              shadow-sm
            "
          >

            <div
              className="
                flex flex-col
                sm:flex-row

                sm:items-center

                gap-5
                mb-8
              "
            >

              {/* IMAGE */}
              <div
                className={`
                  relative

                  w-24 h-24

                  rounded-full

                  ${
                    dragActive
                      ? `
                        ring-4
                        ring-cyan-400
                      `
                      : ""
                  }
                `}
                onDragOver={(e) => {

                  e.preventDefault();

                  setDragActive(true);

                }}
                onDragLeave={() =>
                  setDragActive(false)
                }
                onDrop={(e) => {

                  e.preventDefault();

                  setDragActive(false);

                  handleFile(
                    e.dataTransfer
                      .files[0]
                  );

                }}
              >

                <img
                  src={
                    image ||
                    "https://res.cloudinary.com/dhlgpqcrb/image/upload/v1777564315/images_txkken.png"
                  }
                  alt="Profile"
                  className="
                    w-24 h-24

                    rounded-full
                    object-cover

                    border-4
                    border-white

                    shadow-lg
                  "
                />

                {/* CAMERA */}
                <div
                  onClick={() =>
                    fileInputRef
                      .current
                      .click()
                  }
                  className="
                    absolute
                    bottom-0 right-0

                    w-10 h-10

                    rounded-full

                    bg-cyan-500

                    flex items-center
                    justify-center

                    text-white

                    cursor-pointer

                    shadow-lg

                    hover:scale-110

                    transition-all duration-300
                  "
                >
                  <i className="ri-camera-line"></i>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) =>
                    handleFile(
                      e.target
                        .files[0]
                    )
                  }
                />

              </div>

              {/* TEXT */}
              <div>

                <p
                  className="
                    text-sm
                    text-cyan-600

                    font-semibold
                  "
                >
                  PROFILE SETTINGS
                </p>

                <h2
                  className="
                    text-2xl
                    font-bold

                    text-gray-900

                    mt-2
                  "
                >
                  Personal Information
                </h2>

                <p
                  className="
                    text-gray-500
                    mt-2
                  "
                >
                  Update your photo
                  and account details.
                </p>

              </div>

            </div>

            {/* DATA */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2

                gap-5
              "
            >

              {/* NAME */}
              <div>

                <p
                  className="
                    text-xs
                    font-semibold

                    text-gray-400

                    mb-2
                  "
                >
                  FULL NAME
                </p>

                <div
                  className="
                    bg-gray-100

                    rounded-2xl

                    p-4

                    text-gray-800
                    font-medium
                  "
                >
                  {user?.firstName}
                  {" "}
                  {user?.lastName}
                </div>

              </div>

              {/* EMAIL */}
              <div>

                <p
                  className="
                    text-xs
                    font-semibold

                    text-gray-400

                    mb-2
                  "
                >
                  EMAIL ADDRESS
                </p>

                <div
                  className="
                    bg-gray-100

                    rounded-2xl

                    p-4

                    text-gray-800
                    font-medium

                    break-all
                  "
                >
                  {user?.email}
                </div>

              </div>

            </div>
              <button
                onClick={() =>
                  navigate(
                    "/change-password"
                  )
                }
                className="
                  mt-6

                  w-full
                  sm:w-auto

                  bg-blue-600
                  text-white

                  px-6 py-3

                  rounded-full
                "
              >
                Change Password
              </button>
          </div>
          

          {/* LEARNING */}
          <div
            className="
              bg-white
              rounded-[32px]

              p-6
              sm:p-8

              shadow-sm
            "
          >

            {/* HEADER */}
            <div
              className="
                flex flex-col
                sm:flex-row

                sm:items-center
                justify-between

                gap-4
                mb-8
              "
            >

              <div>

                <h3
                  className="
                    text-2xl
                    font-bold

                    text-gray-900
                  "
                >
                  Preferences
                </h3>

                <p
                  className="
                    text-gray-500
                    mt-2
                  "
                >
                  Personalize your
                  platform experience.
                </p>

              </div>

              <span
                className="
                  text-xs

                  bg-green-100
                  text-green-600

                  px-4 py-2

                  rounded-full

                  font-semibold
                "
              >
                ACTIVE
              </span>

            </div>

            {/* TOGGLES */}
            <div className="space-y-5">

              <ToggleItem
                title="Study Reminders"
                desc="Receive reminders for your focused study sessions."
                defaultOn={true}
              />

              <ToggleItem
                title="Streak Notifications"
                desc="Get notified before your streak expires."
                defaultOn={true}
              />

              {!isAdmin && (
                <ToggleItem
                  title="Course Updates"
                  desc="Receive updates about newly added lessons and modules."
                  defaultOn={false}
                />
              )}

            </div>

            {/* RESET */}
            {!isAdmin && (

              <>
                <div
                  className="
                    h-[1px]
                    bg-gray-200

                    my-8
                  "
                />

                <div
                  className="
                    bg-gradient-to-br
                    from-purple-100
                    to-purple-200

                    rounded-[28px]

                    p-6

                    flex flex-col
                    lg:flex-row

                    lg:items-center
                    justify-between

                    gap-6
                  "
                >

                  <div>

                    <h4
                      className="
                        text-purple-700
                        font-semibold
                      "
                    >
                      Reset Learning Curve?
                    </h4>

                    <p
                      className="
                        text-sm
                        text-purple-600

                        mt-2
                        leading-relaxed
                      "
                    >
                      Rebuild your learning
                      plan from scratch
                      based on updated
                      goals and interests.
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      navigate(
                        "/onboarding"
                      )
                    }
                    className="
                      bg-gradient-to-r
                      from-purple-600
                      to-purple-500

                      text-white

                      px-6 py-3

                      rounded-full

                      font-medium

                      shadow-md

                      hover:scale-105

                      transition-all duration-300
                    "
                  >
                    ✨ Regenerate Plan
                  </button>

                </div>
              </>

            )}

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">


          {/* PREMIUM / ADMIN CARD */}
        <div
          className={`
            rounded-[32px]

            p-6

            text-white

            shadow-lg

            ${
              isAdmin
                ? `
                  bg-gradient-to-br
                  from-[#0F172A]
                  via-[#111827]
                  to-[#1E293B]
                `
                : `
                  bg-gradient-to-br
                  from-[#1E4ED8]
                  to-[#2563EB]
                `
            }
          `}
        >

          {/* TOP */}
          <div
            className="
              flex items-center
              gap-2

              mb-3
            "
          >

            <span
              className="
                text-xs
                tracking-wide

                opacity-90
              "
            >
              {
                isAdmin
                  ? "🛡 ADMIN ACCESS"
                  : "⭐ PREMIUM MEMBERSHIP"
              }
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              text-2xl
              font-bold

              mb-2
            "
          >
            {
              isAdmin
                ? "Administrator"
                : "Your Plan: Pro"
            }
          </h2>

          {/* FIELD */}
          <h3
            className="
              text-xl
              font-semibold

              mb-2

              text-white/90
            "
          >
            {
              isAdmin
                ? "Platform Management"
                : (
                  context?.field ||
                  "Learning Journey"
                )
            }
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm

              opacity-90

              leading-relaxed

              mb-5
            "
          >
            {
              isAdmin
                ? "Full access to analytics, users, tracks, and administrative tools."
                : `Goal: ${
                    context?.goal ||
                    "Personal Growth"
                  }`
            }
          </p>

          {/* INFO */}
          <div
            className="
              flex flex-col
              sm:flex-row

              sm:items-center
              justify-between

              gap-3

              mb-5

              text-sm
              opacity-90
            "
          >

            <span
              className="
                bg-white/20

                px-3 py-1

                rounded-full
              "
            >
              {
                isAdmin
                  ? "System Access"
                  : "Next Billing"
              }
            </span>

            <span className="font-medium">
              {
                isAdmin
                  ? "Full Permissions"
                  : "Oct 12, 2024"
              }
            </span>

          </div>

          {/* BUTTON */}
          <button
            className="
              w-full

              bg-white

              py-3

              rounded-full

              font-semibold

              shadow-sm

              hover:scale-[1.02]

              transition-all duration-300

              ${
                isAdmin
                  ? `
                    text-gray-900
                  `
                  : `
                    text-blue-600
                  `
              }
            "
            onClick={() =>
              navigate(
                isAdmin ? "/admin" : "/subscription"
              )
            }
          >
            {
              isAdmin
                ? "Open Admin Panel"
                : "Manage Subscription"
            }
          </button>

        </div>        

          {/* QUICK STATS */}
          {!isAdmin && (

            <div
              className="
                bg-white

                rounded-[32px]

                p-6

                shadow-sm
              "
            >

              <h3
                className="
                  text-xl
                  font-bold

                  text-gray-900

                  mb-6
                "
              >
                Quick Stats
              </h3>

              <div className="space-y-6">

                {[
                  {
                    label:
                      "COMPLETION RATE",
                    value:
                      `${completion}%`,
                    color:
                      "bg-cyan-500",
                  },
                  {
                    label:
                      "TOTAL HOURS",
                    value:
                      `${hours} hrs`,
                    color:
                      "bg-purple-500",
                  },
                  {
                    label:
                      "THIS WEEK",
                    value:
                      `${weekly} hrs`,
                    color:
                      "bg-emerald-500",
                  },
                ].map(
                  (
                    stat,
                    i
                  ) => (

                    <div
                      key={i}
                      className="
                        flex items-center
                        gap-4
                      "
                    >

                      <div
                        className={`
                          w-2 h-12

                          rounded-full

                          ${stat.color}
                        `}
                      />

                      <div>

                        <p
                          className="
                            text-xs
                            font-semibold

                            text-gray-400
                          "
                        >
                          {
                            stat.label
                          }
                        </p>

                        <p
                          className="
                            text-2xl
                            font-bold

                            text-gray-900

                            mt-1
                          "
                        >
                          {
                            stat.value
                          }
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

          {/* SYSTEM */}
          <div
            className="
              bg-white

              rounded-[32px]

              p-6

              shadow-sm
            "
          >

            <h3
              className="
                text-xl
                font-bold

                text-gray-900

                mb-6
              "
            >
              System
            </h3>

            <div className="space-y-5">

              <div
                className="
                  flex items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-gray-500
                  "
                >
                  Language
                </span>

                <span
                  className="
                    text-cyan-600
                    font-semibold
                  "
                >
                  English
                </span>

              </div>

              <div
                className="
                  flex items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-gray-500
                  "
                >
                  Version
                </span>

                <span
                  className="
                    text-gray-400
                  "
                >
                  v2.4.1
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CROP MODAL */}
      {showCrop && (

        <div
          className="
            fixed inset-0

            z-50

            bg-black/60
            backdrop-blur-sm

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
              max-w-[420px]

              p-6
            "
          >

            <h2
              className="
                text-2xl
                font-bold

                text-gray-900

                mb-6
              "
            >
              Crop Image
            </h2>

            <div
              className="
                relative

                w-full
                h-[320px]

                rounded-2xl

                overflow-hidden
              "
            >

              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(
                  _,
                  croppedPixels
                ) =>
                  setCroppedAreaPixels(
                    croppedPixels
                  )
                }
              />

            </div>

            {/* ACTIONS */}
            <div
              className="
                flex items-center
                gap-4

                mt-8
              "
            >

              <button
                onClick={
                  handleCancel
                }
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
                  handleConfirmUpload
                }
                className="
                  flex-1

                  py-4

                  rounded-2xl

                  bg-cyan-500

                  text-white
                  font-semibold

                  hover:bg-cyan-400

                  transition-all duration-300
                "
              >
                Confirm
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default SettingsContent;