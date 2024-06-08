import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../components/Auth/AuthUser";
import authImage from "../../assets/img/auth.png";

export default function Register() {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    http
      .post("/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
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
              <form
                onSubmit={handleSubmit}
                className="px-8 py-5 bg-white rounded"
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name}</div>
                  )}
                </div>

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
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Confirmpassword"
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#0E2333] rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>

                <div className="text-center">
                  <a
                    className="inline-block text-sm text-[#0E2333] align-baseline hover:text-blue-800"
                    href="/login"
                  >
                    Already have an account? Login!
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