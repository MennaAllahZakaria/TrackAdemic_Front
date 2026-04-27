import LoginForm from "../components/Auth/LoginForm";

function Login() {
  return (
    <div className="flex h-screen">

      {/* LEFT نفس signup */}
      <div className="w-1/2 bg-gray-100 p-16 flex flex-col justify-between">
        <div>
          <h2 className="text-blue-600 font-semibold mb-6">
            Trackademic
          </h2>

          <h1 className="text-5xl font-semibold leading-tight">
            Welcome Back to <br />
            <span className="text-blue-600">Trackademic</span>
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Continue your journey and stay on track with your goals.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>

    </div>
  );
}

export default Login;