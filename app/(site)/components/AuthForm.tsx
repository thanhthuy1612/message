"use client";

import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import InputForm from "@/app/components/inputs/InputForm";
import Button from "@/app/components/buttons/Button";
import AuthSocialButton from "./AuthSocialButton";

type VariantType = "LOGIN" | "REGISTER";
const AuthForm: React.FC = () => {
  const [variant, setVariant] = React.useState<VariantType>("LOGIN");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const toggleVariant = React.useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const onSubmit: SubmitHandler<FieldValues> = (date) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Register
    }

    if (variant === "LOGIN") {
      //Login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //Social sign in
  };

  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <InputForm
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <InputForm
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <InputForm
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <Button disabled={isLoading} fullWidth type="submit">
            {variant === "LOGIN" ? "Sign in" : "Register"}
          </Button>
        </form>
        <div className=" mt-6">
          <div className=" relative">
            <div className=" absolute inset-0 flex items-center">
              <div className=" w-full border-t border-gray-300" />
            </div>
            <div className=" relative flex justify-center text-sm">
              <span className=" bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className=" mt-6 flex gap-2">
            <AuthSocialButton
              Icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              Icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
          <div className=" flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
            <div onClick={toggleVariant} className=" underline cursor-pointer">
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
