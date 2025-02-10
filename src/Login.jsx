import toast from "react-hot-toast";
import { users } from "@/api";

const Login = () => {
  const handleSubmit = (formData) => {
    const { tckn, password } = Object.fromEntries(formData);
    const loggedInUser = users.find(
      (user) => user.tckn === tckn && user.password === password
    );
    if (!loggedInUser) {
      toast.error("TCKN or password wrong.");
      return;
    }
    delete loggedInUser.password;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    window.location.href = "/";
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border border-gray-200 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action={handleSubmit}>
              <div>
                <label
                  htmlFor="tckn"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  TCKN
                </label>
                <input
                  type="number"
                  name="tckn"
                  id="tckn"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-orange-400 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-orange-400 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
