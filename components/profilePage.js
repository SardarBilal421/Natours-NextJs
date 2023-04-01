export default function ProfilePage() {
  return (
    <>
      <div className="bg-red-100 grid grid-cols-3 p-32">
        {/* <div className="border-black border-2"> */}
        <div
          className="flex flex-col bg-[linear-gradient(to_right_bottom,rgba(125,213,111,0.8),rgba(40,180,135,0.8))]
        p-7 
        shadow-2xl
        
        "
        >
          {" "}
          <a
            href="#"
            className="p-4 text-lg text-white uppercase active:border-white
            active:border-l-2 hover:border-l-2 hover:border-white"
          >
            <span className="material-symbols-outlined pr-3 ">settings</span>{" "}
            <span className="absolute">Settings</span>
          </a>
          <a
            href="#"
            className="p-4 text-lg text-white uppercase active:border-white
            active:border-l-2 hover:border-l-2 hover:border-white"
          >
            <span className="material-symbols-outlined pr-3 ">
              business_center
            </span>{" "}
            <span className="absolute">My Bookings</span>
          </a>
          <a
            href="#"
            className="p-4 text-lg text-white uppercase active:border-white
            active:border-l-2 hover:border-l-2 hover:border-white"
          >
            <span className="material-symbols-outlined pr-3 ">star</span>
            <span className="absolute">My Reviews</span>
          </a>
          <a
            href="#"
            className="p-4 text-lg text-white uppercase active:border-white
            active:border-l-2 hover:border-l-2 hover:border-white"
          >
            <span className="material-symbols-outlined pr-3 ">credit_card</span>{" "}
            <span className="absolute">Biling</span>
          </a>
        </div>
        <div className=" col-span-2 text-[#777] bg-white shadow-2xl">
          <div className="board-rigth-side">
            {" "}
            <div className="container-fluid main-card p-24 font-bold mb-10">
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(99,204,85)] to-[rgb(17,71,53)] font-bold text-2xl m-[0px_0px_50px_0px]">
                YOUR ACCOUNT SETTINGS
              </h3>
              <form>
                <div className="form-group ">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control p-2 w-full m-[1rem_0rem]
                    block bg-red-100 
                    font-thin"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control p-2 w-full m-[1rem_0rem]
                    block bg-red-100 
                    font-thin"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="">
                  <span className="material-symbols-outlined">person</span>
                  <label htmlFor="profilePic">Choose New Photo</label>
                  <input
                    type="file"
                    className="form-control p-2 w-full m-[1rem_0rem]
                    block bg-red-100 
                    
                    font-thin"
                    id="profilePic"
                  />
                </div>

                <button
                  type="submit"
                  className="m-3 mb-9 ml-4 bg-[#55c57a] text-[#f2f7f4] px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-md  hover:shadow-zinc-400 float-right"
                >
                  SAVE SETTINGS
                </button>
              </form>
            </div>
            <hr />
            <div className="container-fluid main-card p-24 font-bold mb-10">
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(99,204,85)] to-[rgb(17,71,53)] font-bold text-2xl m-[0px_0px_50px_0px]">
                CHANGE YOUR PASSWORD
              </h3>
              <form>
                <div className=" ">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    className="form-control p-2 w-full m-[1rem_0rem]
                    block bg-red-100 
                    font-thin"
                    id="currentPassword"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    className="form-control p-2 w-full m-[1rem_0rem]
                    block bg-red-100 
                    font-thin"
                    id="newPassword"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="cPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control p-2 w-full m-[1rem_0rem]
                    block bg-red-100 
                    font-thin"
                    id="cPassword"
                    placeholder="********"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="m-3 mb-9 ml-4 bg-[#55c57a] text-[#f2f7f4] px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-md  hover:shadow-zinc-400 float-right"
                >
                  SAVE PASSWORD
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
