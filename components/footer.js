import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-red-100 p-14 grid grid-cols-2 ">
      <div>
        <Image
          src="/img/logo-green-small-2x.png"
          height="180"
          width="180"
          className="w-auto"
          alt="natours-logo"
        ></Image>
      </div>
      <div className="text-right font-sans">
        <ul className=" cursor-pointer text-[#777] text-sm">
          <li className="inline-block m-2">About us</li>
          <li className="inline-block m-2">Download apps</li>
          <li className="inline-block m-2">Become a guide</li>
          <li className="inline-block m-2">Careers</li>
          <li className="inline-block m-2">Contract</li>
        </ul>
        <p className="text-[#999]">© 2024 Sardar Bilal Rehman</p>
      </div>
    </footer>
  );
}
