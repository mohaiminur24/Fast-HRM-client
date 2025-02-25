"use client";
import CheckboxInputField from "@/components/forms/checkbox-input-field";
import InputField from "@/components/forms/email-input";
import LoginLottieAnimation from "@/components/modules/login-registration/login-lottie-animation";
import Button from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";
import { useWindowSize } from "@/utils/screen-size";
import { Field, FormikProvider, useFormik } from "formik";
import Link from "next/link";

export default function LoginScreen() {
  const { width } = useWindowSize();
  const theme = useAppSelector((state) => state.theme);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      IsCheck: false,
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div
      style={{ backgroundColor: theme.background, color: theme.text }}
      className="flex flex-1 flex-col-reverse md:flex-row justify-center items-center h-screen"
    >
      <div
        style={{ width: width }}
        className="flex flex-1 justify-center items-center"
      >
        <div
          className="mx-5 md:mx-20 flex flex-1 flex-col"
          style={{ maxWidth: 600 }}
        >
          <h2 className="font-serif text-5xl mt-5 md:mt-20">Welcome back,</h2>
          <h3 className="mt-2 font-mono ml-2">First HRM</h3>
          <div className="py-20 w-auto">
            <FormikProvider value={formik}>
              <Field
                name="Email"
                title="Email address"
                type="email"
                component={InputField}
                placeholder="Email or Phone"
              />
              <Field
                name="password"
                title="Password"
                type="password"
                component={InputField}
                placeholder="password here"
              />
              <Field
                name="IsCheck"
                component={CheckboxInputField}
                title="Remember Password"
                className="my-5"
              />
              <Button title="Login" className="mt-5" />
              <div className="flex flex-row items-center sm:gap-2 mt-3">
                <h1 className="text-sm font-sans">Don't have account?</h1>
                <Link className="font-medium text-blue-900" href="/auth/registration">
                  Sign up
                </Link>
              </div>
            </FormikProvider>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 justify-center h-auto items-center">
        <LoginLottieAnimation width={width / 2.2} height={width / 2.2} />
      </div>
    </div>
  );
}
