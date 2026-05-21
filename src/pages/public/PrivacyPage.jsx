import MainLayout from "../../layouts/MainLayout";

function PrivacyPage() {
  return (
    <MainLayout>

      <div
        className="
          max-w-[1000px]
          mx-auto

          py-12
          sm:py-14

          px-4
          sm:px-6
        "
      >

        {/* HERO */}
        <div className="mb-12 sm:mb-14">

          <div
            className="
              inline-flex items-center gap-2

              px-4 py-2

              rounded-full

              bg-green-50
              text-green-600

              text-xs
              sm:text-sm

              font-semibold

              mb-5
            "
          >
            <i className="ri-shield-check-line"></i>

            Privacy & Security
          </div>

          <h1
            className="
              text-3xl
              sm:text-5xl
              xl:text-[48px]

              font-bold

              text-gray-900
            "
          >
            Privacy Policy
          </h1>

          <p
            className="
              text-gray-500

              mt-4

              text-sm
              sm:text-lg

              leading-[1.9]

              max-w-3xl
            "
          >
            Your privacy matters to us.
            This policy explains how
            Trackademic collects, stores,
            and protects your personal
            information and learning data.
          </p>

        </div>

        {/* CONTENT */}
        <div
          className="
            bg-white

            border border-gray-100

            rounded-[24px]
            sm:rounded-[32px]

            p-6
            sm:p-10

            shadow-sm

            space-y-8
            sm:space-y-10
          "
        >

          {[
            {
              title: "1. Information We Collect",
              text: "We may collect your account details, learning progress, assessment scores, and interaction history to personalize your educational experience.",
            },
            {
              title: "2. How We Use Data",
              text: "Collected information is used to improve platform recommendations, generate adaptive learning paths, monitor progress, and enhance overall user experience.",
            },
            {
              title: "3. Data Security",
              text: "We implement secure technologies and encryption practices to safeguard user data against unauthorized access or misuse.",
            },
            {
              title: "4. Third-Party Services",
              text: "Certain integrations and analytics services may process limited data to support authentication, notifications, and platform functionality.",
            },
            {
              title: "5. User Rights",
              text: "Users may request updates, corrections, or deletion of personal data in accordance with applicable privacy regulations and platform policies.",
            },
          ].map((section, index) => (
            <div key={index}>

              <h2
                className="
                  text-xl
                  sm:text-2xl

                  font-bold

                  text-gray-900
                "
              >
                {section.title}
              </h2>

              <p
                className="
                  text-gray-600

                  leading-[2]

                  mt-4

                  text-sm
                  sm:text-base
                "
              >
                {section.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </MainLayout>
  );
}

export default PrivacyPage;