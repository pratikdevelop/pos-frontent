import React from "react";

const Signup = () => {
  return (
    <div className="flex items-start mt-10 flex-auto  justify-center">
      <form
        method="post"
        className="bg-transparent shadow-xl border-2 border-slate-200  h-8/10  rounded-md p-5 w-2/5"
      >
        <div
          className="text-center my-4 text-fuchsia-800 text-4xl font-bold "
          style={{ fontFamily:"serif" }}
        >
          create new account
        </div>

        <div className="grid gap-10 mb-6 md:grid-cols-2 ">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 text-gray-500 rounded border-2  text-base  block w-full p-2 shadow-xl border-slate-500"
              placeholder="your name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              className="bg-gray-50 text-gray-500 rounded border-2  text-base  block w-full p-2 shadow-xl border-slate-500"
              placeholder="your username"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 text-gray-500 rounded border-2  text-base  block w-full p-2 border-slate-500"
              placeholder="your phone number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 text-gray-500 rounded border-2  text-base  block w-full p-2 border-slate-500"
              placeholder="your email address"
              required
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 text-gray-500 rounded border-2  text-base  block w-full p-2 shadow-xl border-slate-500 "
              placeholder="your password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="bg-gray-50 text-gray-500 rounded border-2  text-base  block w-full p-2 shadow-xl border-slate-500"
              placeholder="your confirm password"
              required
            />
          </div>
        </div>
        <div className="flex  flex-col space-y-4 items-center justify-center my-6">
          <button
            type="submit"
            className="text-white flex-auto bg-indigo-600 focus:outline-none focus:ring-blue-300 font-medium text-base  w-full p-5 my-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-sm backdrop-blur-sm backdrop-hue-rotate-60 shadow-xl inset-3/4"
          >
            Submit
          </button>
          <span className="text-lg font-bold text-gray-500">
            I already have an account ?
            <a
              href="/signin"
              className="text-blue-600  hover:underline dark:text-blue-500 ml-2 py-2 px-8 unded border-indigo-600 border-2"
            >
              login
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
