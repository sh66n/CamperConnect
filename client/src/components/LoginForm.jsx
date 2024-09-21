import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        `${import.meta.env.VITE_BACKEND_URL}/login`,
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
        toast.success("You've successfully logged in!", {
          position: "bottom-right",
        });
        navigate("/campgrounds");
      } else {
        toast.error("Invalid credentials.");
      }
    } catch (e) {
      console.log(e);
      toast.error("Invalid credentials.");
    }
  };
  return (
    <div>
      <h1>Login</h1>
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
