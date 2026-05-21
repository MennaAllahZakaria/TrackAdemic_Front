import MainLayout from "../../layouts/MainLayout";

function TermsPage() {
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

              bg-blue-50
              text-blue-600

              text-xs
              sm:text-sm

              font-semibold

              mb-5
            "
          >
            <i className="ri-file-list-3-line"></i>

            Legal
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
            Terms of Service
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
            By accessing and using
            Trackademic, you agree
            to comply with the following
            terms and conditions governing
            the use of our learning platform.
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
              title: "1. Platform Usage",
              text: "Users may access Trackademic for educational and personal learning purposes only. Any misuse of the platform, including unauthorized access or harmful activities, is strictly prohibited.",
            },
            {
              title: "2. User Accounts",
              text: "You are responsible for maintaining the confidentiality of your account credentials and ensuring that all information provided remains accurate and up to date.",
            },
            {
              title: "3. Intellectual Property",
              text: "All educational materials, quizzes, AI-generated recommendations, and platform content are protected by intellectual property laws and may not be copied or redistributed without permission.",
            },
            {
              title: "4. AI Recommendations",
              text: "AI-generated recommendations and assessments are provided to support learning outcomes and should not be interpreted as professional or guaranteed academic advice.",
            },
            {
              title: "5. Limitation of Liability",
              text: "Trackademic shall not be held liable for interruptions, inaccuracies, or data loss resulting from platform usage or technical issues beyond our control.",
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

export default TermsPage;