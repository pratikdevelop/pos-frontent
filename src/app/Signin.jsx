import React from "react";
import { useFormik } from "formik";
import { loginSchema } from '../schemas'
import axios from "axios";
const Signin = () => {
    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log('valuew', values);
            axios
                .post("http://localhost:3300/signin", values)
                .then((response) => {
                    localStorage.setItem("token", JSON.stringify(response.data.data));
                    toast.success("login successfully", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    setTimeout(() => {
                        nav("/");
                    }, 1000);
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                });
        }
    })
    return (
        <>
            <form
                className="w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded shadow-2xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700  mt-16 space-y-10 "
                method="post"
            >
                <h5 className="text-center text-3xl font-bold  text-gray-900 dark:text-white">
                    Sign in to our platform
                </h5>
                <div>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur('email')}
                        className="bg-white border border-gray-500 text-gray-900 text-base rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                    />
                    {
                        (errors.email && touched.email) ?
                            <p className="text-red-600 p-2 font-medium">{errors.email}</p> : ''
                    }
                </div>
                <div>


                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange("password")}
                        onBlur={handleBlur('password')}
                        placeholder="••••••••"
                        className="bg-white border border-gray-500 text-gray-900 text-base rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                    {
                        (errors.password && touched.password) ?
                            <p className="text-red-600 p-2 font-medium">{errors.password}</p> : ''
                    }
                </div>
                <div className="flex flex-col space-y-5 items-center justify-center mt-0">
                    <div className="text-base font-bold text-gray-500 dark:text-gray-300">
                        reset your password ? <a
                            href="#"
                            className="ml-auto text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Lost Password?
                        </a>
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                    <div className="text-base font-bold text-gray-500 dark:text-gray-300">
                        Not registered?
                        <a
                            href="/signup"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Create account
                        </a>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Signin;
