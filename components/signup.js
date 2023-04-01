import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  //calling API endpoint

  const hanldeSubmit = async () => {
    event.preventDefault();
    const res = await axios.post("/api/login", formData);
    console.log(res);
    // const res = await axios.post("/api/login", formData, {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    if (res.status === 200) {
      // localStorage.setItem("login", true);
      router.push("/dashboard/user");
      // console.log("saved");
    } else {
      alert("Invlaid Email or Password");
    }
  };

  //save values from form to formData
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="bg-red-100 grid grid-cols-3 font-sans">
        <div></div>
        <div className="shadow-2xl m-[110px_0px] bg-[#fff] p-10 ">
          <div className="heading text-[1.5rem] font-bold p-4">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(99,204,85)] to-[rgb(17,71,53)]">
              CREATE YOUR ACCOUNT!
            </h3>
          </div>
          <div className="form ">
            <form onSubmit={hanldeSubmit}>
              <div className="form-group m-3">
                <label htmlFor="name" className="text-[#777]   font-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control p-2 w-full m-[1rem_0rem]
                     block bg-red-100 
                     font-thin 
                     "
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="email" className="text-[#777]   font-bold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control p-2 w-full m-[1rem_0rem]
                     block bg-red-100 
                     font-thin 
                     "
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="password" className="text-[#777]   font-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control p-2 w-full m-[1rem_0rem] block bg-red-100 "
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="********"
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="cPassword" className="text-[#777]   font-bold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control p-2 w-full m-[1rem_0rem] block bg-red-100 "
                  id="cPassword"
                  name="cPassword"
                  onChange={handleChange}
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="m-3 mb-9 ml-4 bg-[#55c57a] text-[#f2f7f4] px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-md  hover:shadow-zinc-400 "
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
