import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signup`,
        formData
      );
      if (
        signIn({
          auth: {
            token: data.accessToken,
            type: "Bearer",
          },
          userState: data,
        })
      ) {
        toast.success("You've successfully logged in!");
        navigate("/campgrounds");
      }
    } catch (e) {
      console.log(e);
      toast.error("User authentication failed.");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {errors.username && <span>This field is required</span>}
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
