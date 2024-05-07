import { useState } from "react";

const Email = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const validateEmail = (e: string) => {
    const re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    setInvalidEmail(!re.test(e));
  };
  return (
    <>
      <form className="relative rounded-full max-w-[44ch]">
        <input
          onInvalid={(e) => {
            e.preventDefault();
            setInvalidEmail(true);
          }}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          value={email}
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          className={
            invalidEmail
              ? `px-9 py-5 rounded-full w-full h-full focus:outline-none focus:ring-2 focus:ring-primary-200 text-neutral-100 border`
              : `px-9 py-5 rounded-full w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-neutral-100 border`
          }
        />
        <button
          className={
            invalidEmail
              ? `top-0 right-0 absolute place-items-center grid hover:bg-primary-200/40 bg-gradient-to-br from-primary-100 to-primary-200 hover:bg-none shadow-md hover:shadow-2xl rounded-full w-1/4 h-full cursor-pointer focus:ring focus:ring-primary-200`
              : `top-0 right-0 absolute place-items-center grid hover:bg-primary-200/40 bg-gradient-to-br from-primary-100 to-primary-200 hover:bg-none shadow-md hover:shadow-2xl rounded-full w-1/4 h-full cursor-pointer focus:ring focus:ring-neutral-100`
          }
        >
          <img src="./images/icon-arrow.svg" alt="arrow" />
        </button>
        {invalidEmail && (
          <img
            className="top-1/2 left-1/2 absolute -translate-y-1/2 translate-x-[4rem]"
            src="./images/icon-error.svg"
            alt=""
          />
        )}
        {invalidEmail && (
          <p className="-bottom-8 left-6 absolute text-primary-200">
            Please provide valid email
          </p>
        )}
      </form>
    </>
  );
};

export default Email;
