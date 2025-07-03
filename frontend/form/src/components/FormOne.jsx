"use client";
import React, { useState } from "react";

const FormOne = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: {
      firstname: "",
      middlename: "",
      lastname: "",
    },
    profession: "",
    email: {
      primary: "",
      alternate: "",
    },
    phone: {
      primary: "",
      alternate: "",
    },
    bloodGroup: "",
    maritalInfo: {
      status: "",
      spouseName: "",
      date: "",
    },
    gender: "",
    DOB: "",
    address: {
      residential: {
        addressLine: "",
        pincode: "",
        city: "",
        state: "",
        phone: "",
      },
      office: {
        addressLine: "",
        pincode: "",
        city: "",
        state: "",
        phone: "",
      },
    },
  });
  const handleChange = (e) => {};
  return (
    <div>
      <form className="flex flex-col gap-6 p-6 bg-white">
        {/* user  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-4">
          <div className="grid grid-cols-1 ">
            <label className="font-semibold text-2xl ">username</label>
            <input
              type="text"
              className="w-full p-1 md:p-3 border-2 rounded-2xl border-blue-500 shadow-md"
              name="username"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label className="font-semibold text-2xl ">username</label>
            <input
              type="text"
              className="w-full p-1 md:p-3 border-2 rounded-2xl border-blue-500 shadow-md"
              name="username"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label className="font-semibold text-2xl ">username</label>
            <input
              type="text"
              className="w-full p-1 md:p-3 border-2 rounded-2xl border-blue-500 shadow-md"
              name="username"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
