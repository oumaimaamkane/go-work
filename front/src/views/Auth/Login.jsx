import { useState } from "react";
import AuthUser from "../../components/Auth/AuthUser";
import authImage from "../../assets/img/auth.png";

export default function Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    http
      .post("/login", { email, password })
      .then((res) => {
        setToken(res.data.user, res.data.access_token);
      })
      .catch((error) => {
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        }else if (error.response && error.response.status === 401) {
          setErrors({ password: error.response.data.error });
        } else {
          setErrors({});
        }
      });
  };

  return (
    <div className="font-mono h-screen flex items-center justify-center bg-orange-500">
      <div className="container mx-auto">
        <div className="flex items-center h-screen justify-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
              <img
                src={authImage}
                className="w-full h-full rounded-l-lg"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form
                onSubmit={handleSubmit}
                className="px-8 py-5 bg-white rounded"
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#0E2333] rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>

                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <a
                    className="inline-block text-sm text-[#0E2333] align-baseline hover:text-blue-800"
                    href="/register"
                  >
                    Create an Account!
                  </a>
                </div>

                <div className="text-center">
                  <a
                    className="inline-block text-sm text-[#0E2333] align-baseline hover:text-blue-800"
                    href="/register"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
