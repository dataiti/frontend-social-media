import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import { Button, Field, Loading } from "../components";
import { routesPath } from "../utils/constants";
import { phoneRegExp } from "../utils/regex";
import { registerAction } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const registerSchema = yup.object({
  username: yup.string().required("Username field is required !"),
  email: yup
    .string()
    .required("Email address field is required !")
    .email("Wrong email format !"),
  phone: yup
    .string()
    .required("Phone number field is required !")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: yup
    .string()
    .required("Password field is required !")
    .min(8, "Password must be more than 8 characters!")
    .max(20, "Password must be less than 20 characters!"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleSubmitSignUp = async (values) => {
    if (!isValid) {
      return;
    }
    setLoading(true);
    dispatch(registerAction(values))
      .unwrap()
      .then(() => {
        reset();
        // toast.success(`${message}`);
        toast.success("SignUp successfully");
        navigate(routesPath.signIn);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <AuthLayout title="Sign Up">
      {loading && <Loading />}
      <form onSubmit={handleSubmit(handleSubmitSignUp)}>
        <div className="flex flex-col gap-4">
          <Field
            control={control}
            name="username"
            label="Username"
            placeholder="Enter your username"
            errors={errors.username}
          />
          <Field
            control={control}
            name="email"
            type="email"
            label="Email address"
            placeholder="Enter your email address"
            errors={errors.email}
          />
          <Field
            control={control}
            name="phone"
            label="Phone number"
            type="text"
            placeholder="Enter your phone number"
            errors={errors.phone}
          />
          <Field
            control={control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            isInputPassword
            errors={errors.password}
          />

          <Button
            type="submit"
            primary
            size="medium"
            className="w-full rounded-full text-base py-3 mt-2"
          >
            Create account
          </Button>
          <p className="text-gray-500 text-xs text-center">
            Do you already have an account?{" "}
            <Link
              to={routesPath.signIn}
              className="text-cyan-900 font-extrabold underline"
            >
              Login now
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
