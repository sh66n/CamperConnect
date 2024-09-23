import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { toast } from "react-toastify";

export default function NewCampgroundForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    console.log(formData.name);
    formDataObj.append("description", formData.description);
    formDataObj.append("price", formData.price);
    formDataObj.append("location", formData.location);

    for (const file of formData.img) {
      formDataObj.append("img", file);
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/campgrounds`,
        formDataObj,
        {
          headers: {
            Authorization: authHeader,
          },
        }
      );
      navigate("/campgrounds");
      toast.success("Campground added!", {
        position: "bottom-right",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ml-12 mr-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="text-black"
      >
        <Input
          placeholder={"Campground name"}
          type={"text"}
          register={register}
          name={"name"}
          required
        />
        {errors.name && <span>This field is required</span>}
        <Input
          placeholder={"Description"}
          type={"text"}
          register={register}
          name={"description"}
          required
        />
        {errors.description && <span>This field is required</span>}
        <Input
          type={"file"}
          register={register}
          name={"img"}
          required
          multiple
        />
        {errors.img && <span>This field is required</span>}
        <Input
          placeholder={"Location"}
          type={"text"}
          register={register}
          name={"location"}
          required
        />
        {errors.location && <span>This field is required</span>}
        <Input
          placeholder={"Price"}
          type={"number"}
          register={register}
          name={"price"}
          required
        />
        {errors.price && <span>This field is required</span>}
        <button type="submit" className="text-white">
          Create
        </button>
      </form>
    </div>
  );
}
