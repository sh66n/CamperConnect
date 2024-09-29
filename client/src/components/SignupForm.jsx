import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

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
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-60">
        <h1 className="text-3xl text-center my-4">Welcome aboard</h1>
        <Input
          placeholder={"Username"}
          type={"text"}
          register={register}
          name={"username"}
          required
        />
        {errors.username && <span>This field is required</span>}
        <Input
          placeholder={"Password"}
          type={"password"}
          register={register}
          name={"password"}
          required
        />
        {errors.password && <span>This field is required</span>}
        <span className="text-sm text-gray-500">
          By continuing, you are agreeing to our Terms and Conditions.
        </span>
        <button
          type="submit"
          className="bg-red-500 p-2 my-2 rounded-md hover:opacity-50"
        >
          Signup
        </button>
      </form>
      <div className="h-80 aspect-square ml-8 rounded-xl bg-[url('https://res.cloudinary.com/dkhlgn6zs/image/upload/v1727636349/1266e1f3-d1b8-42aa-8dc8-603ffd64f44f_rw_1920-removebg-preview_brubbf.png')] bg-cover"></div>
    </div>
  );
}
