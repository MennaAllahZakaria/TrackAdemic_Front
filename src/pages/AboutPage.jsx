import MainLayout from "../layouts/MainLayout";

function AboutPage() {
  return (
    <MainLayout>
      <div className="px-10 py-10 space-y-24">

        {/* ================= OUR STORY ================= */}
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-600 leading-7 mb-4">
              Trackademic began in a small university library corner where 8 educators noticed a recurring problem: the "one-size-fits-all" curriculum was leaving brilliant students behind while holding faster learners back.
            </p>

            <p className="text-gray-600 leading-7">
              We spent one year interviewing cognitive psychologists and data scientists to understand how to replicate the nuance of human mentorship in a digital environment.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h1 className="text-blue-600 font-bold text-xl">2025</h1>
              <p className="font-medium mt-2">The Spark</p>
              <p className="text-sm text-gray-500 mt-1">
                Foundation of our core AI pedagogical engine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h1 className="text-purple-600 font-bold text-xl">2026</h1>
              <p className="font-medium mt-2">Global Scale</p>
              <p className="text-sm text-gray-500 mt-1">
                Expansion to 15 countries and multiple languages.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-sm self-start">
              <h3 className="text-2xl font-bold">1.2M</h3>
              <p className="font-medium mt-2">Learners</p>
              <p className="text-sm mt-1 text-blue-100">
                Students empowered through our personalized tracks.
              </p>
            </div>


            <div className="rounded-xl overflow-hidden">
              <img
                src="/about-image.png"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* ================= PHILOSOPHY ================= */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            We believe AI should be a compass, not the pilot. Technology exists to enhance human intuition, not replace it.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="bg-white p-6 rounded-xl shadow-sm text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                💡
              </div>
              <h3 className="font-semibold mb-2">Cognitive Resonance</h3>
              <p className="text-sm text-gray-500">
                Our algorithms adapt to your unique memory retention cycles, presenting information exactly when you're ready to absorb it most effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-left">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                ✨
              </div>
              <h3 className="font-semibold mb-2">Transparent AI</h3>
              <p className="text-sm text-gray-500">
                We provide insight into the 'why' behind every recommendation. Our AI isn't a black box; it's a collaborative partner in your growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-left">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                🎓
              </div>
              <h3 className="font-semibold mb-2">Holistic Mastery</h3>
              <p className="text-sm text-gray-500">
                Education isn't about passing tests; it's about deep understanding. We prioritize logical connections over rote memorization.
              </p>
            </div>

          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="border-t pt-6 text-sm text-gray-400 flex justify-between">

          <div>
            <p className="font-semibold text-gray-600">Trackademic</p>
            <p>Building the infrastructure for the next generation of global knowledge.</p>
          </div>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Support</span>
            <span>Careers</span>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default AboutPage;