import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { toast } from "react-hot-toast";

function ContactUsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post(
        "/contactUs",
        form
      );

      toast.success(
        "Message sent successfully ✨"
      );

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

    } catch (err) {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      <div
        className="
          max-w-[1200px]
          mx-auto

          py-12
          sm:py-16

          px-4
          sm:px-6
        "
      >

        {/* HERO */}
        <div
          className="
            text-center

            mb-12
            sm:mb-14
          "
        >

          <p
            className="
              text-blue-600

              text-xs
              sm:text-sm

              font-semibold

              tracking-wide
              uppercase
            "
          >
            Contact Us
          </p>

          <h1
            className="
              text-3xl
              sm:text-5xl
              xl:text-[46px]

              font-bold

              text-gray-900

              mt-3

              leading-tight
            "
          >
            We'd love to hear
            <br />
            from you.
          </h1>

          <p
            className="
              text-gray-500

              mt-5

              max-w-2xl

              mx-auto

              leading-relaxed

              text-sm
              sm:text-base
            "
          >
            Whether you have questions,
            feedback, or partnership ideas,
            our team is here to help you
            on your learning journey.
          </p>

        </div>

        {/* CONTENT */}
        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-2

            gap-6
            xl:gap-10
          "
        >

          {/* LEFT CARD */}
          <div
            className="
              bg-gradient-to-br
              from-[#EFF6FF]
              to-[#F8FAFC]

              rounded-[24px]
              sm:rounded-[32px]

              p-6
              sm:p-10

              relative

              overflow-hidden
            "
          >

            <div className="relative z-10">

              <div
                className="
                  w-12 h-12
                  sm:w-14 sm:h-14

                  rounded-2xl

                  bg-blue-600
                  text-white

                  flex items-center justify-center

                  mb-6

                  shadow-lg
                "
              >

                <i
                  className="
                    ri-customer-service-2-line

                    text-xl
                    sm:text-2xl
                  "
                ></i>

              </div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl

                  font-bold

                  text-gray-900

                  leading-snug
                "
              >
                Let's build something
                amazing together.
              </h2>

              <p
                className="
                  text-gray-600

                  mt-5

                  leading-relaxed

                  text-sm
                  sm:text-base
                "
              >
                Our support team usually
                responds within 24 hours.
                We’re committed to helping
                you succeed.
              </p>

              {/* INFO */}
              <div
                className="
                  mt-8
                  sm:mt-10

                  space-y-5
                "
              >

                {/* EMAIL */}
                <div
                  className="
                    flex items-start

                    gap-4
                  "
                >

                  <div
                    className="
                      min-w-[44px]
                      h-[44px]

                      rounded-xl

                      bg-white

                      flex items-center justify-center

                      shadow-sm
                    "
                  >

                    <i className="ri-mail-line text-blue-600"></i>

                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-sm
                        text-gray-400
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        font-medium
                        text-gray-800

                        break-words
                      "
                    >
                      support@trackademic.com
                    </p>

                  </div>

                </div>

                {/* RESPONSE */}
                <div
                  className="
                    flex items-start

                    gap-4
                  "
                >

                  <div
                    className="
                      min-w-[44px]
                      h-[44px]

                      rounded-xl

                      bg-white

                      flex items-center justify-center

                      shadow-sm
                    "
                  >

                    <i className="ri-time-line text-blue-600"></i>

                  </div>

                  <div>

                    <p
                      className="
                        text-sm
                        text-gray-400
                      "
                    >
                      Response Time
                    </p>

                    <p
                      className="
                        font-medium
                        text-gray-800
                      "
                    >
                      Within 24 Hours
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* DECOR */}
            <div
              className="
                absolute
                -bottom-12
                -right-12

                w-40 h-40
                sm:w-56 sm:h-56

                bg-blue-200

                rounded-full

                opacity-30
              "
            ></div>

          </div>

          {/* FORM */}
          <div
            className="
              bg-white

              rounded-[24px]
              sm:rounded-[32px]

              shadow-[0_10px_40px_rgba(0,0,0,0.06)]

              border border-gray-100

              p-6
              sm:p-10
            "
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* ROW */}
              <div
                className="
                  grid

                  grid-cols-1
                  sm:grid-cols-2

                  gap-4
                "
              >

                <div>

                  <label
                    className="
                      text-sm
                      text-gray-600

                      mb-2

                      block
                    "
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className="
                      w-full

                      h-12

                      px-4

                      rounded-xl

                      border border-gray-200

                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                    "
                  />

                </div>

                <div>

                  <label
                    className="
                      text-sm
                      text-gray-600

                      mb-2

                      block
                    "
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="
                      w-full

                      h-12

                      px-4

                      rounded-xl

                      border border-gray-200

                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                    "
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div>

                <label
                  className="
                    text-sm
                    text-gray-600

                    mb-2

                    block
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full

                    h-12

                    px-4

                    rounded-xl

                    border border-gray-200

                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label
                  className="
                    text-sm
                    text-gray-600

                    mb-2

                    block
                  "
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="
                    w-full

                    px-4 py-4

                    rounded-xl

                    border border-gray-200

                    resize-none

                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full

                  h-12

                  rounded-xl

                  bg-blue-600
                  text-white

                  font-medium

                  hover:bg-blue-700

                  transition-all duration-300

                  disabled:opacity-60
                "
              >
                {loading
                  ? "Sending..."
                  : "Send Message →"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default ContactUsPage;