import MainLayout from "../layouts/MainLayout";

function TermsPage() {
  return (
    <MainLayout>

      <div className="
        max-w-[1000px]
        mx-auto
        py-14
      ">

        {/* HERO */}
        <div className="mb-14">

          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-blue-50 text-blue-600
            text-sm font-semibold
            mb-5
          ">
            <i className="ri-file-list-3-line"></i>

            Legal
          </div>

          <h1 className="
            text-[48px]
            font-bold
            text-gray-900
          ">
            Terms of Service
          </h1>

          <p className="
            text-gray-500
            mt-4
            text-lg
            leading-[1.9]
            max-w-3xl
          ">
            By accessing and using Trackademic,
            you agree to comply with the following
            terms and conditions governing the use
            of our learning platform.
          </p>

        </div>

        {/* CONTENT */}
        <div className="
          bg-white
          border border-gray-100
          rounded-[32px]
          p-10
          shadow-sm
          space-y-10
        ">

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              1. Platform Usage
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              Users may access Trackademic for
              educational and personal learning
              purposes only. Any misuse of the
              platform, including unauthorized
              access or harmful activities, is
              strictly prohibited.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              2. User Accounts
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              You are responsible for maintaining
              the confidentiality of your account
              credentials and ensuring that all
              information provided remains accurate
              and up to date.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              3. Intellectual Property
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              All educational materials, quizzes,
              AI-generated recommendations, and
              platform content are protected by
              intellectual property laws and may
              not be copied or redistributed
              without permission.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              4. AI Recommendations
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              AI-generated recommendations and
              assessments are provided to support
              learning outcomes and should not be
              interpreted as professional or
              guaranteed academic advice.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              5. Limitation of Liability
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              Trackademic shall not be held liable
              for interruptions, inaccuracies, or
              data loss resulting from platform
              usage or technical issues beyond our
              control.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default TermsPage;