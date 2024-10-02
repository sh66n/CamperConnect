import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Input.jsx";

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
          theme: "dark",
        });
        navigate("/campgrounds");
      } else {
        toast.error("Invalid credentials.", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    } catch (e) {
      console.log(e);
      toast.error("Invalid credentials.", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="h-80 aspect-square mr-8 bg-[url('https://res.cloudinary.com/dkhlgn6zs/image/upload/v1727636439/8e2699c4-8fc9-4dbc-8a71-9dc807500d22_rw_1920-removebg-preview_npnr3r.png')] bg-cover rounded-xl"></div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <h1 className="text-3xl text-center my-4">Login</h1>

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

        <button
          type="submit"
          className="bg-red-500 p-2 my-2 rounded-md hover:opacity-50"
        >
          Login
        </button>
        <span className="text-center">
          New here?{" "}
          <span className="text-red-500">
            <Link to={"/signup"}>Signup!</Link>
          </span>
        </span>
      </form>
    </div>
  );
}
