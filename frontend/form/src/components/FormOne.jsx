"use client";
import React, { useState } from "react";

const FormOne = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");

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
    if (formData.password != confirmPassword) {
      return;
    }
    console.log("FormData", formData);
  };

  function checkPassword(e) {
    setConfirmPassword(e.target.value);
    if (e.target.value === formData.password) {
      setPasswordStatus("password Matched");
    } else {
      setPasswordStatus("Password do not match");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-3xl  broder-2 shadow-green-300 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white">
          <h3 className="text-center text-4xl font-semibold underline">Form</h3>
          {/* user  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
            <div className="">
              <label className="font-medium text-xl ">username</label>
              <input
                required
                onChange={handleChange}
                value={formData.username}
                type="text"
                placeholder="username"
                className="w-full p-1 md:p-2 border-2 rounded-2xl  focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="username"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">password</label>
              <input
                required
                onChange={handleChange}
                value={formData.password}
                type="password"
                placeholder="password"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="password"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">Confirm Password</label>
              <input
                required
                onChange={(e) => checkPassword(e)}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirm password"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
              />
              {passwordStatus && (
                <div className=" font-medium text-center">{passwordStatus}</div>
              )}
            </div>
          </div>
          {/* name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
            <div className="">
              <label className="font-medium text-xl ">firstname</label>
              <input
                required
                onChange={handleChange}
                value={formData.name.firstname}
                type="text"
                placeholder="firstname"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="name.firstname"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">Middlename</label>
              <input
                required
                onChange={handleChange}
                type="text"
                value={formData.name.middlename}
                placeholder="middlename"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="name.middlename"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">Lastname</label>
              <input
                required
                onChange={handleChange}
                type="text"
                value={formData.name.lastname}
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
                required
                onChange={handleChange}
                type="text"
                value={formData.profession}
                placeholder="profession"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="profession"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">bloodGroup</label>
              <input
                required
                onChange={handleChange}
                type="text"
                value={formData.bloodGroup}
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
                required
                onChange={handleChange}
                value={formData.email.primary}
                type="email"
                placeholder="primary Email"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="email.primary"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">Primary Phone</label>
              <input
                required
                value={formData.phone.primary}
                onChange={handleChange}
                type="Number"
                placeholder="middlename"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="phone.primary"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">Secondary Email</label>
              <input
                required
                onChange={handleChange}
                value={formData.email.alternate}
                type="email"
                placeholder="Alternate Email"
              
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="email.alternate"
              />
            </div>
            <div className="">
              <label className="font-medium text-xl ">Secondary Phone</label>
              <input
                required
                onChange={handleChange}
                value={formData.phone.alternate}
                type="number"
                placeholder="Alternate Phone"
                className="w-full p-1 md:p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500  border-green-500 shadow-md"
                name="phone.alternate"
              />
            </div>
          </div>
          {/* marriage passwordStatus */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 p-3 rounded-md">
            <div className="">
              <label className="flex flex-row gap-4 mt-2">Martial Status</label>
              <label className="flex items-center gap-1">
                <input
                  required
                  type="radio"
                  name="gender"
                  onChange={handleChange}
                  checked={formData.gender === "male"}
                  value="male"
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  value="female"
                  name="gender"
                  checked={formData.gender === "female"}
                />
                female
              </label>
            </div>
            <div className="">
              <label className="flex flex-row gap-4 mt-2">Martial Status</label>
              <label className="flex items-center gap-1">
                <input
                  required
                  type="radio"
                  name="maritalInfo.status"
                  onChange={handleChange}
                  checked={formData.maritalInfo.status === "married"}
                  value="married"
                />
                Married
              </label>
              <label className="flex items-center gap-1">
                <input
                  required
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
                required
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
                  required
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
                  required
                  onChange={handleChange}
                  type="date"
                  name="maritalInfo.date"
                  className="w-full p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
                />
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label className="font-bold text-2xl ">Residential address</label>

              <label className=" ">address</label>
              <input
                required
                type="text"
                name="address.residential.addressLine"
                onChange={handleChange}
                value={formData.address.residential.addressLine}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">state</label>
              <input
                required
                type="text"
                name="address.residential.state"
                onChange={handleChange}
                value={formData.address.residential.state}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">city</label>
              <input
                required
                type="text"
                name="address.residential.city"
                onChange={handleChange}
                value={formData.address.residential.city}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">pincode</label>
              <input
                required
                type="Number"
                name="address.residential.pincode"
                onChange={handleChange}
                value={formData.address.residential.pincode}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">phone</label>
              <input
                required
                type="Number"
                name="address.residential.phone"
                onChange={handleChange}
                value={formData.address.residential.phone}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-2xl ">Office address</label>

              <label className=" ">address</label>
              <input
                required
                type="text"
                name="address.office.addressLine"
                onChange={handleChange}
                value={formData.address.office.addressLine}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">state</label>
              <input
                required
                type="text"
                name="address.office.state"
                onChange={handleChange}
                value={formData.address.office.state}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">city</label>
              <input
                required
                type="text"
                name="address.office.city"
                onChange={handleChange}
                value={formData.address.office.city}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">pincode</label>
              <input
                required
                type="Number"
                name="address.office.pincode"
                onChange={handleChange}
                value={formData.address.office.pincode}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
              <label className=" ">phone</label>
              <input
                required
                type="Number"
                name="address.office.phone"
                onChange={handleChange}
                value={formData.address.office.phone}
                className=" border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500 shadow-md"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <button
              type="submit"
              className="p-3 rounded-md bg-green-500 cursor-pointer text-white hover:bg-none focus:ring-2 focus:ring-green-500  hover:scale-105 w-1/2  "
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
