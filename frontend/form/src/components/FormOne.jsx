"use client";
import React, { useState } from "react";

const FormOne = () => {
  const initial = {
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
  };
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    let { name, value } = e.target;
    const keys = name.split(".");
    setFormData((prev) => {
      const t = { ...prev };
      let newArr = t;
      for (let i = 0; i < keys.length - 1; i++) {
        newArr[keys[i]] = { ...newArr[keys[i]] };
        newArr = newArr[keys[i]];
      }
      newArr[keys[keys.length - 1]] = value;
      return t;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted successfully", formData);
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-3xl  broder-2 shadow-lg">
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
          {/* marriage status */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 p-3 rounded-md">
            <div className="">
              <label className="flex flex-row gap-4 mt-2">Martial Status</label>
              <label className="flex items-center gap-1">
                <input
                  onChange={handleChange}
                  type="radio"
                  value="married"
                  name="maritalInfo.status"
                  checked={formData.maritalInfo.status === "married"}
                />
                Married
              </label>
              <label className="flex items-center gap-1">
                <input
                  onChange={handleChange}
                  type="radio"
                  value="unmarried"
                  name="maritalInfo.status"
                  checked={formData.maritalInfo.status === "unmarried"}
                />
                Unmarried
              </label>
            </div>
            <div>
              <label className="font-medium text-xl"> Date of birth</label>
              <input
                onChange={handleChange}
                type="date"
                name="DOB"
                className="w-full p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
            </div>
          </div>
          {formData.maritalInfo.status === "married" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-3 rounded-md">
              <div>
                <label className="font-medium text-xl">Spouse Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="maritalInfo.spouseName"
                  className="w-full p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
                  placeholder="Spouse Name"
                />
              </div>
              <div>
                <label className="font-medium text-xl">Marriage Date</label>
                <input
                  onChange={handleChange}
                  type="date"
                  name="maritalInfo.date"
                  className="w-full p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
                />
              </div>
            </div>
          )}
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
    </div>
  );
};

export default FormOne;
