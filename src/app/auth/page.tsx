export default function AuthenticationPage() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 gap-8">
        {/* Login Form */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Your Email"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Password */}
            <div>
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                placeholder="Your Password"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
  
        {/* Register Form */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label htmlFor="registerName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="registerName"
                placeholder="Your Name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Email */}
            <div>
              <label htmlFor="registerEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="registerEmail"
                placeholder="Your Email"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Password */}
            <div>
              <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="registerPassword"
                placeholder="Your Password"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Confirm Password */}
            <div>
              <label
                htmlFor="registerConfirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="registerConfirmPassword"
                placeholder="Confirm Password"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
  