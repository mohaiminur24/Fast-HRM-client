"use client";
import CheckboxInputField from "@/components/forms/checkbox-input-field";
import InputField from "@/components/forms/email-input";
import OTPInputField from "@/components/forms/otp-input-field";
import LoginLottieAnimation from "@/components/modules/login-registration/login-lottie-animation";
import RegistrationLottieAnimation from "@/components/modules/login-registration/registration-lottie-animation";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useAppSelector } from "@/redux/store";
import { useWindowSize } from "@/utils/screen-size";
import { Field, FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Registration() {
  const theme = useAppSelector((state) => state.theme);
  const { width } = useWindowSize();
  const [IsOpenModal, SetOpenModal] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      organization: "",
      password: "",
      IsCheck: false,
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  const otp = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (value) => {
      console.log(value);
      SetOpenModal(false);
    },
  });

  return (
    <>
      <div
        style={{ backgroundColor: theme.background, color: theme.text }}
        className="flex flex-1 flex-row-reverse md:flex-row-reverse justify-center items-center h-screen"
      >
        <div
          style={{ width: width }}
          className="flex flex-1 justify-center items-center"
        >
          <div
            className="mx-5 md:mx-20 flex flex-1 flex-col"
            style={{ maxWidth: 600 }}
          >
            <h2 className="font-serif text-5xl mt-5 md:mt-20">Register Now and Get Started!</h2>
            <h3 className="mt-2 font-mono ml-2">First HRM</h3>
            <div className="py-10 w-auto">
              <FormikProvider value={formik}>
                <Field
                  name="Email"
                  title="Email address"
                  type="email"
                  component={InputField}
                  placeholder="Email or Phone"
                />
                <Field
                  name="organization"
                  title="Organization Name"
                  type="text"
                  component={InputField}
                  placeholder="organization name here"
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
                  title="accepted terms & condition!"
                  className="my-5"
                  opacity={0.5}
                  color="#7838"
                />
                <Button
                  title="Registration"
                  className="mt-5"
                  OnClick={() => SetOpenModal(true)}
                />
                <div className="flex flex-row items-center sm:gap-2 mt-3">
                  <h1 className="text-sm font-sans">
                    Already i have an account?
                  </h1>
                  <Link className="font-medium text-blue-900" href="/auth">
                    Login
                  </Link>
                </div>
              </FormikProvider>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1 justify-center h-auto items-center">
          <RegistrationLottieAnimation
            width={width / 2.2}
            height={width / 2.2}
          />
        </div>
      </div>
      {/* modal is from here */}
      <Modal IsOpen={IsOpenModal}>
        <div className="flex flex-1 h-full justify-center items-center cursor-pointer">
          <div
            className="absolute right-5 top-0 hover:scale-105"
            onClick={() => SetOpenModal(false)}
          >
            <RiCloseCircleLine size={35} />
          </div>
          <div
            style={{ width: width / 2 }}
            className="flex flex-col justify-center items-center gap-5"
          >
            <h1 className="text-3xl font-semibold text-center">Verify Your Account</h1>
            <h2 className="text-gray-400 text-center text-xs">
              We've just sent a 6-digit one-time password (OTP) to your
              registered email address. Please check your inbox, and if you
              don't see it, check your spam or junk folder. Enter the code below
              to verify your account and complete the registration process. If
              you didn't receive the email, you can request a new OTP after a
              few moments.
            </h2>
            <div className="my-5">
              <FormikProvider value={otp}>
                <Field name="otp" component={OTPInputField} length={6} />
              </FormikProvider>
            </div>
            <Button title="Verify Otp" OnClick={otp.handleSubmit} />
          </div>
        </div>
      </Modal>
    </>
  );
}
