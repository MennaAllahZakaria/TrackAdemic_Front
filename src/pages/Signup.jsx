import SignupForm from "../components/Auth/SignupForm";

function Signup() {
  return (
    <div className="flex h-screen">

      {/* LEFT */}
      <div className="w-1/2 bg-gray-100 p-16 flex flex-col justify-between">
        
        <div>
          <h2 className="text-blue-600 font-semibold mb-6">
            Trackademic
          </h2>

          <h1 className="text-5xl font-semibold leading-tight">
            The Curated <br />
            <span className="text-blue-600">Academic</span> <br />
            Experience.
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Join a community of focused learners utilizing high-end
            organizational tools designed for deep study and rhythmic progress.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md w-fit">
          <div className="flex items-center gap-3">
            
            <div className="bg-green-100 p-2 rounded-full">
              <i className="ri-leaf-line text-green-600"></i>
            </div>

            <div>
              <p className="font-semibold text-sm">Curated Path</p>
              <p className="text-gray-500 text-xs">
                Your journey is mapped by AI and refined by experts.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex items-center justify-center">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;