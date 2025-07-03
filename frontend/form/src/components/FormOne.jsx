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
  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted successfully", formData);
  };
  return (
    <div>
      <form className="flex flex-col gap-6 p-6 bg-white">
        <h3 className="text-center text-4xl font-semibold underline">Form</h3>
        {/* user  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">username</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="username"
              className="w-full p-1 md:p-2 border-2 rounded-2xl  focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="username"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">password</label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="password"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="password"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="password"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="password"
            />
          </div>
        </div>
        {/* name */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">firstname</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="firstname"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="name.firstname"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Middlename</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="middlename"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="name.middlename"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Lastname</label>
            <input
              onChange={handleChange}
              type="lastname"
              placeholder="lastname"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="name.lastname"
            />
          </div>
        </div>
        {/* profession */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">profession</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="profession"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="profession"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">bloodGroup</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="bloodGroup"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="bloodGroup"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
          <div className="">
            <label className="font-medium text-xl ">Primary Email</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="primary"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="email.primary"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Primary Phone</label>
            <input
              onChange={handleChange}
              type="middlename"
              placeholder="middlename"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="phone.primary"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Secondary Email</label>
            <input
              onChange={handleChange}
              type="alternate"
              placeholder="Alternate Email"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="email.alternate"
            />
          </div>
          <div className="">
            <label className="font-medium text-xl ">Secondary Phone</label>
            <input
              onChange={handleChange}
              type="alternate"
              placeholder="Alternate Phone"
              className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              name="phone.alternate"
            />
          </div>
        </div>
        <div className="  ">
          <div className="">
            <label className="font-medium text-xl text-center">
              Marital Status
            </label>
            <div className="flex flex-row flex-nowrap gap-2">
              <label>Married</label>
              <input
                onChange={handleChange}
                type="radio"
                value="married"
                className=""
                name="maritalInfo.status"
                checked={formData.maritalInfo.status === "married"}
              />
              <label>UNMarried</label>
              <input
                onChange={handleChange}
                value="unmarried"
                type="radio"
                className=""
                name="maritalInfo.status"
                checked={formData.maritalInfo.status === "unmarried"}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <button
            type="submit"
            className="p-3 rounded-md bg-green-500 cursor-pointer text-white hover:bg-none focus:ring-2 focus:ring-green-500  hover:scale-105 w-1/2  "
            onClick={handleSubmit}
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
