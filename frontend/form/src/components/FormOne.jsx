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
        <h3 className="text-center text-4xl font-semibold underline">Form</h3>
        {/* user  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">username</label>
            <input
              type="text"
              placeholder="username"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="username"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="password"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Confirm Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="password"
            />
          </div>
        </div>
        {/* name */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">firstname</label>
            <input
              type="text"
              placeholder="firstname"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="firstname"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Middlename</label>
            <input
              type="middlename"
              placeholder="middlename"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="middlename"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Lastname</label>
            <input
              type="lastname"
              placeholder="lastname"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="lastname"
            />
          </div>
        </div>
        {/* profession */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">profession</label>
            <input
              type="text"
              placeholder="profession"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="profession"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">bloodGroup</label>
            <input
              type="bloodGroup"
              placeholder="bloodGroup"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="bloodGroup"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">Primary Email</label>
            <input
              type="text"
              placeholder="primary"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="primary"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Primary Phone</label>
            <input
              type="middlename"
              placeholder="middlename"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="primary"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Secondary Email</label>
            <input
              type="alternate"
              placeholder="Alternate Email"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="alternate"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Secondary Phone</label>
            <input
              type="alternate"
              placeholder="Alternate Phone"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-green-800 border-green-500 shadow-md"
              name="alternate"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
