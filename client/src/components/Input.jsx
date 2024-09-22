import React from "react";

const Input = ({ type = "text", placeholder, register, name, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="my-2 rounded-lg p-1 bg-black border border-zinc-500 text-white"
      {...register(name, { required })}
    />
  );
};
export default Input;
