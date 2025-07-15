import React, { useState } from "react";
import PhoneIcon from "../../../public/icons/phone.svg";
import EmailIcon from "../../../public/icons/email.svg";
import LocationIcon from "../../../public/icons/location.svg";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { firstName: "", lastName: "", email: "", message: "" };
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }
    if (!message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // You can replace this with an API call
      console.log({ firstName, lastName, email, message });
      alert("Form submitted successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setErrors({ firstName: "", lastName: "", email: "", message: "" });
    }
  };

  return (
    <div
      className="w-full max-w-[335px] md:max-w-[586px] min-h-[322px] p-[25px]"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
        borderImageSlice: 1,
        background: "#FFFFFF1A",
      }}
    >
      <form
        className="w-full flex flex-col gap-[25px]"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="hidden md:flex flex-col md:flex-row md:items-center gap-5">
          {/* First name */}
          <div className="w-full max-w-[258px]">
            <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white mb-5">
              First Name <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none placeholder:text-[14px]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">{errors.firstName}</span>
            )}
          </div>
          {/* last name */}
          <div className="w-full max-w-[258px]">
            <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white mb-5">
              Last Name <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none placeholder:text-[14px]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">{errors.lastName}</span>
            )}
          </div>
        </div>
        {/* Full Name */}
        {/* First name */}
        <div className="block md:hidden w-full">
          <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white mb-5">
            Full Name <span className="text-red-600">*</span>
          </h1>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none placeholder:text-[14px]"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">{errors.firstName}</span>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col w-full gap-5">
          <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white">
            Email Address <span className="text-red-600">*</span>
          </h1>
          <input
            type="email"
            placeholder="Enter Email here..."
            className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none placeholder:text-[14px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>
        {/* Textbox */}
        <div className="flex flex-col w-full gap-5">
          <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white">
            Message <span className="text-red-600">*</span>
          </h1>
          <textarea
            placeholder="Enter Message..."
            className="w-full px-2 py-[20px] min-h-[80px] md:min-h-[99px] bg-[#FFFFFF1A] text-white focus:outline-none align-top resize-none placeholder:align-top placeholder:text-[14px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full flex items-center justify-center font-inter font-[700] text-[14px] md:text-[16px] leading-[24px] text-black bg-white p-[20px] h-[52px]"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

const ReachOut = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-[60px] lg:my-[100px] px-[20px] lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-[20px] lg:gap-[67px]">
      <div className="w-full max-w-[342px] md:max-w-[547px]">
        <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-[#FFFFFF] uppercase mb-[25px]">
          REACH OUT <span className="font-[700] font-aeonik">TO US</span>
        </h1>
        <p className="font-inter font-[400] text-[14px] lg:text-[16px]  leading-[20px] lg:leading-[24px] text-white mb-[25px] lg:mb-[45px]">
          We’d love to hear from you. Whether it’s a question, idea, or
          collaboration — drop us a message anytime.
        </p>
        {/* two cards */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-10 gap-[20px] mb-[20px]">
          {/* card */}
          <div className="w-full max-w-[213px] flex items-center gap-[15px]">
            <img src={PhoneIcon} alt="icon" className="w-[50px] h-[50px]" />
            <div className="w-full flex flex-col gap-[13px]  py-[6.5px]">
              <p className="font-inter font-[400] text-[14px]  leading-[100%] text-white uppercase">
                Phone number
              </p>
              <h1 className="font-inter font-[600] text-[14px] md:text-[16px]  leading-[100%] text-white">
                +1 (555) 123‑9876
              </h1>
            </div>
          </div>
          {/* card */}
          <div className="w-full max-w-[235px] flex items-center gap-[15px]">
            <img src={EmailIcon} alt="icon" className="w-[50px] h-[50px]" />
            <div className="w-full flex flex-col gap-[13px]  py-[6.5px]">
              <p className="font-inter font-[400] text-[14px]  leading-[100%] text-white uppercase">
                Email us
              </p>
              <h1 className="font-inter font-[600] text-[14px] md:text-[16px] leading-[100%] text-white">
                hello@whatzzon.com
              </h1>
            </div>
          </div>
        </div>
        {/* 1 card */}
        <div className="w-full max-w-[387px] flex items-center gap-[15px] mb-[20px] md:mb-[45px]">
          <img src={LocationIcon} alt="icon" className="w-[50px] h-[50px]" />
          <div className="w-full flex flex-col gap-[13px]  py-[6.5px]">
            <p className="font-inter font-[400] text-[14px]  leading-[100%] text-white uppercase">
              Location
            </p>
            <h1 className="font-inter font-[600] text-[14px] md:text-[16px]  leading-[100%] text-white">
              21 Culture Row, Downtown LA, CA 90015
            </h1>
          </div>
        </div>
        {/* Border  */}
        <div className="border w-[335px] md:w-[500px] h-[89px] bg-[#FFFFFF1A] border-[#FFFFFF33] flex items-center justify-between  px-[18px] py-[18px] md:px-[26px] md:py-[20px]">
          <h1 className="font-inter font-[700] text-[16px] md:text-[20px] leading-[22px] md:leading-[25px] text-white w-full max-w-[158px] uppercase">
            Follow us On Social Media
          </h1>
          {/* socials */}
          <div className="w-full flex items-center justify-end md:gap-[15px] gap-[10px]">
            <img
              src="/icons/facebook.svg"
              alt="icon"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/icons/instagram.svg"
              alt="icon"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/icons/youtube.svg"
              alt="icon"
              className="w-[48px] h-[48px]"
            />
          </div>
        </div>
        <div className="border w-[335px] md:w-[500px] h-[46px] md:h-[67px] bg-[#FFFFFF1A] border-[#FFFFFF33] flex items-center justify-center  px-[18px] py-[18px] md:px-[26px] md:py-[28px]">
          <div className="flex items-center gap-[10px]">
            <img
              src="/logo/arrow-right.svg"
              alt="icon"
              className="w-[25px] h-[12px] invert"
            />
            <h1 className="font-inter font-[600] md:font-[800] text-[14px] md:text-[16px] leading-[26px] text-white uppercase">
              View organiser's website
            </h1>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full max-w-[342px] md:max-w-[586px]">
        <Form />
      </div>
    </div>
  );
};

export default ReachOut;
