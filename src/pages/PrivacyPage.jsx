import MainLayout from "../layouts/MainLayout";

function PrivacyPage() {
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
            bg-green-50 text-green-600
            text-sm font-semibold
            mb-5
          ">
            <i className="ri-shield-check-line"></i>

            Privacy & Security
          </div>

          <h1 className="
            text-[48px]
            font-bold
            text-gray-900
          ">
            Privacy Policy
          </h1>

          <p className="
            text-gray-500
            mt-4
            text-lg
            leading-[1.9]
            max-w-3xl
          ">
            Your privacy matters to us.
            This policy explains how Trackademic
            collects, stores, and protects your
            personal information and learning data.
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
              1. Information We Collect
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              We may collect your account details,
              learning progress, assessment scores,
              and interaction history to personalize
              your educational experience.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              2. How We Use Data
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              Collected information is used to
              improve platform recommendations,
              generate adaptive learning paths,
              monitor progress, and enhance overall
              user experience.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              3. Data Security
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              We implement secure technologies and
              encryption practices to safeguard
              user data against unauthorized access
              or misuse.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              4. Third-Party Services
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              Certain integrations and analytics
              services may process limited data to
              support authentication, notifications,
              and platform functionality.
            </p>

          </div>

          {/* SECTION */}
          <div>

            <h2 className="
              text-2xl font-bold text-gray-900
            ">
              5. User Rights
            </h2>

            <p className="
              text-gray-600
              leading-[2]
              mt-4
            ">
              Users may request updates, corrections,
              or deletion of personal data in
              accordance with applicable privacy
              regulations and platform policies.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default PrivacyPage;