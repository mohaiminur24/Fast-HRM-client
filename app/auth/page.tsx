"use client";
import InputField from "@/components/forms/email-input";
import LoginLottieAnimation from "@/components/modules/login-registration/login-lottie-animation";
import { useAppSelector } from "@/redux/store";
import { useWindowSize } from "@/utils/screen-size";
import { Field, FormikProvider, useFormik } from "formik";

export default function LoginScreen() {
  const { width } = useWindowSize();
  const theme = useAppSelector((state) => state.theme);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div
      style={{ backgroundColor: theme.background, color: theme.text }}
      className="flex flex-1 flex-col-reverse md:flex-row justify-center"
    >
      <div className="flex flex-1 justify-center">
        <div style={{ width: width / 2.5 }}>
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
            </FormikProvider>
          </div>
        </div>
      </div>
      <div className="flex md:flex-1">
        <LoginLottieAnimation width={width / 2.2} height={width / 2.2} />
      </div>
    </div>
  );
}
