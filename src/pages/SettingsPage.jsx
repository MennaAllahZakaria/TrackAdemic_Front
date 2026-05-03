import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import ToggleItem from "../components/ToggleItem";
import Cropper from "react-easy-crop";


function SettingsPage() {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");
  const [originalImage, setOriginalImage] = useState("");

  const { context, loading } = useUserContext();
  //  crop states
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCrop, setShowCrop] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  //  drag state
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // ================= GET USER =================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);


  const completion = context?.overallProgressPercent?.toFixed(1) || 0;
  const hours = context?.totalHoursStudied || 0;
  const weekly = context?.hoursStudiedThisWeek || 0;



  // حل مشكلة الصورة
  useEffect(() => {
    if (user) {
      setImage(user.imageProfile);
      setOriginalImage(user.imageProfile);
    }
  }, [user]);

  // ================= FILE HANDLER =================
  const handleFile = (file) => {
    if (!file) return;

    setSelectedFile(file);
    setImage(URL.createObjectURL(file));
    setShowCrop(true);
  };

  const handleCancel = () => {
    setShowCrop(false);
    setSelectedFile(null);

    setImage(originalImage);
  };

  // ================= CROP =================
  const getCroppedImage = async () => {
    const imageObj = new Image();
    imageObj.src = image;

    await new Promise((resolve) => {
      imageObj.onload = resolve;
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

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

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    });
  };

  // ================= CONFIRM UPLOAD =================
  const handleConfirmUpload = async () => {
    try {
      const croppedBlob = await getCroppedImage();

      const formData = new FormData();
      formData.append("imageProfile", croppedBlob, "profile.jpg");

      const res = await api.patch(
        "/auth/updateImageProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const newImage = res.data.data.imageProfile;

      setImage(newImage);
      setOriginalImage(newImage);

      setShowCrop(false);
      setSelectedFile(null);

    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return null;

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-500 mt-2">
            Manage your academic profile and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          {/* ================= LEFT ================= */}
          <div className="col-span-2 space-y-6">

            {/* PROFILE */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <div className="flex items-center gap-4 mb-6">

                {/* 🔥 IMAGE WITH DRAG */}
                <div
                  className={`relative w-20 h-20 rounded-full ${
                    dragActive ? "ring-2 ring-blue-500" : ""
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                    handleFile(e.dataTransfer.files[0]);
                  }}
                >

                  <img
                    src={
                      image ||
                      "https://res.cloudinary.com/dhlgpqcrb/image/upload/v1777564315/images_txkken.png"
                    }
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  {/* CAMERA */}
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer"
                  >
                    📷
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFile(e.target.files[0])}
                  />

                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Profile Information
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Update your photo and personal details.
                  </p>
                </div>

              </div>

              {/* DATA */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-gray-400 mb-1">FULL NAME</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {user.firstName} {user.lastName}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">EMAIL</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {user.email}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">ACADEMIC FOCUS</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {context?.field || "Not set"}
                  </div>
                </div>

              </div>

              <button
                onClick={() => navigate("/change-password")}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full"
              >
                Change Password
              </button>

            </div>

            {/* LEARNING */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Learning Preferences
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Adjust how the algorithm structures your path.
                  </p>
                </div>

                <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">
                  OPTIMIZED
                </span>
              </div>

              {/* TOGGLES */}
              <div className="space-y-5">

                {/* ITEM */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <i className="ri-notification-3-line text-lg"></i>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Study Reminders
                      </p>
                      <p className="text-xs text-gray-500">
                        Get pinged when it's time for your deep-focus block.
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>

                </div>

                {/* ITEM */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                      <i className="ri-fire-line text-lg"></i>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Streak Notifications
                      </p>
                      <p className="text-xs text-gray-500">
                        Don’t lose your 14-day consistency streak.
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>

                </div>

                {/* ITEM */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <i className="ri-refresh-line text-lg"></i>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500">
                        New material added to your Library modules.
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>

                </div>

              </div>

              {/* DIVIDER */}
              <div className="h-[1px] bg-gray-200 my-6"></div>

              {/* RESET CARD */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 flex items-center justify-between">

                {/* LEFT */}
                <div className="max-w-[60%]">
                  <h4 className="text-purple-700 font-semibold text-sm">
                    Reset Learning Curve?
                  </h4>

                  <p className="text-xs text-purple-600 mt-2 leading-relaxed">
                    If your focus has shifted, we can rebuild your entire academic schedule from scratch.
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => navigate("/onboarding")}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:scale-[1.03] transition"
                >
                  ✨ Regenerate My Learning Plan
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* ================= PLAN ================= */}
            <div className="bg-gradient-to-br from-[#1E4ED8] to-[#2563EB] text-white p-6 rounded-2xl shadow-md">

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs tracking-wide opacity-90">
                  ⭐ PREMIUM MEMBERSHIP
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-2">
                Your Plan: Pro
              </h2>

              <h2 className="text-2xl font-bold mb-2">
                {context?.field}
              </h2>

              <p className="text-sm opacity-90 leading-relaxed mb-5">
                Goal: {context?.goal}
              </p>

              <div className="flex justify-between items-center mb-5 text-sm opacity-90">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Next Billing
                </span>

                <span className="font-medium">
                  Oct 12, 2024
                </span>
              </div>

              <button className="w-full bg-white text-blue-600 py-2.5 rounded-full font-medium shadow-sm hover:scale-[1.02] transition">
                Manage Subscription
              </button>

            </div>

            {/* ================= QUICK STATS ================= */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">

              <h3 className="font-semibold mb-5 text-gray-800">
                Quick Stats
              </h3>

              <div className="space-y-5">

                {/* COMPLETION */}
                <div className="flex items-center gap-4">
                  <div className="w-1 h-10 bg-blue-600 rounded-full"></div>

                  <div>
                    <p className="text-xs text-gray-400">
                      COMPLETION RATE
                    </p>

                    <p className="text-xl font-bold text-gray-800">
                      {completion}%
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-center gap-4">
                  <div className="w-1 h-10 bg-purple-500 rounded-full"></div>

                  <div>
                    <p className="text-xs text-gray-400">
                      FOCUS HOURS
                    </p>

                    <p className="text-xl font-bold text-gray-800">
                      {hours} hrs
                    </p>
                  </div>
                </div>

                {/* WEEKLY */}
                <div className="flex items-center gap-4">
                  <div className="w-1 h-10 bg-green-500 rounded-full"></div>

                  <div>
                    <p className="text-xs text-gray-400">
                      THIS WEEK
                    </p>

                    <p className="text-xl font-bold text-gray-800">
                      {weekly} hrs
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* ================= SYSTEM ================= */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">

              <h3 className="font-semibold mb-5 text-gray-800">
                SYSTEM
              </h3>

              <div className="space-y-4 text-sm">

                {/* DARK MODE */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Dark Mode</span>

                  <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>

                {/* LANGUAGE */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Language</span>

                  <span className="text-blue-600 font-medium">
                    English (US)
                  </span>
                </div>

                {/* VERSION */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Version</span>

                  <span className="text-gray-400">
                    v2.4.1-stable
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= CROP MODAL ================= */}
        {showCrop && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-white p-6 rounded-2xl w-[400px]">

              <div className="relative w-full h-64">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={(_, croppedPixels) =>
                    setCroppedAreaPixels(croppedPixels)
                  }
                />
              </div>

              <div className="flex justify-between mt-6">

                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-200 rounded-full"
                >
                  Cancel
                </button>

                <button
                  onClick={handleConfirmUpload}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full"
                >
                  Confirm
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </MainLayout>
  );
}

export default SettingsPage;