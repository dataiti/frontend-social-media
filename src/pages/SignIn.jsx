import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import { Button, Field, Loading } from "../components";
import { icons } from "../utils/icons";
import { routesPath } from "../utils/constants";
import { authSelect, loginAction } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { clearMessage, messageSelect } from "../redux/features/messageSlice";

const registerSchema = yup.object({
  email: yup
    .string()
    .required("Email address field is required !")
    .email("Wrong email format !"),
  password: yup
    .string()
    .required("Password field is required !")
    .min(8, "Password must be more than 8 characters!")
    .max(20, "Password must be less than 20 characters!"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(authSelect);
  const { message } = useSelector(messageSelect);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleSubmitSignUp = (values) => {
    if (!isValid) {
      return;
    }
    setLoading(true);
    dispatch(loginAction(values))
      .unwrap()
      .then(() => {
        setLoading(false);
        // toast.success(`${message}`);
        toast.success("SignIn successfully");
        if (isLoggedIn) {
          navigate(routesPath.newsFeed);
          reset();
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to={routesPath.newsFeed} />;
  }

  return (
    <AuthLayout title="Sign In">
      {(isSubmitting || loading) && <Loading />}
      <form onSubmit={handleSubmit(handleSubmitSignUp)}>
        <div className="flex flex-col gap-5">
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
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            isInputPassword
            errors={errors.password}
          />
          <Button
            primary
            size="medium"
            className="w-full rounded-full text-base py-3 mt-2"
          >
            Sign In
          </Button>
        </div>
        <div className="mt-3 text-gray-500 flex items-center justify-between text-xs mx-5 font-extrabold">
          <Link to="">Forgot password ?</Link>
          <Link to={routesPath.signUp}>SignUp now</Link>
        </div>
        <span className="block text-gray-500 text-center text-xs my-2">Or</span>
        <div className="w-full flex items-center justify-center gap-1">
          <Button
            size="medium"
            className="w-full bg-white shadow-md text-gray-600 text-sm"
            leftIcon={<icons.FcGoogle size={18} />}
          >
            Google
          </Button>
          <Button
            size="medium"
            className="w-full bg-blue-700 shadow-md text-white text-sm"
            leftIcon={<icons.FaFacebookSquare size={18} />}
          >
            Facebook
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
