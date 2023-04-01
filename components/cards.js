import Image from "next/image";

export default function Card({ children, cardData }) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl w-auto h-auto">
      <div
        className="w-full h-64 bg-[linear-gradient(to_right_bottom,rgba(125,213,111,0.8),rgba(40,180,135,0.8))] 
        [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]
      "
      >
        <Image
          className="w-full opacity-40 h-64 "
          src={`/img/${cardData.image}`}
          width="500"
          height="500"
          alt="Travel destination"
        ></Image>
      </div>
      <div className="p-5 relative">
        <p className="mb-2 absolute -top-24 w-36 right-4 text-center text-3xl bg-[linear-gradient(to_right_bottom,rgba(125,213,111,0.8),rgba(40,180,135,0.8))] text-yellow-50  font-light tracking-tight  dark:text-white">
          {cardData.name}
        </p>
        <p className="uppercase text-emerald-900 font-medium text-xs my-2">{`${cardData.difficulty} ${cardData.duration}-day Tour`}</p>
        <p className="italic text-sm opacity-80 my-4 mb-8">
          {cardData.summary}
        </p>

        <div className="grid grid-cols-2 pb-2 text-[#777] text-sm">
          <div>
            <span className="material-symbols-outlined text-[#55c57a]">
              location_on
            </span>
            <span className="mx-1 absolute ">
              {cardData.startLocation.description}
            </span>
          </div>
          <div>
            <span className="material-symbols-outlined text-[#55c57a]">
              calendar_today
            </span>
            <span className="mx-1 absolute">March, 2023</span>
          </div>
          <div>
            <span className="material-symbols-outlined text-[#55c57a]">
              flag
            </span>
            <span className="mx-2 absolute">
              {cardData.locations.length} stops
            </span>
          </div>
          <div>
            <span className="material-symbols-outlined text-[#55c57a]">
              person
            </span>
            <span className="mx-2 absolute">
              {cardData.maxGroupSize} people
            </span>
          </div>
        </div>
      </div>

      <div className="cardFooter font-sans text-[#999] bg-[#f7f7f7] grid grid-cols-2 place-items-center p-7">
        <div>
          <div>
            <span className="font-bold ">${cardData.price}</span>
            <span className="text-sm"> per person</span>
          </div>
          <div>
            <span className="font-bold ">${cardData.ratingsAverage}</span>
            <span className=" text-sm">
              {" "}
              rating ( {cardData.ratingsQuantity} )
            </span>
          </div>
        </div>
        <div>
          <button className="bg-[#55c57a] text-[#f2f7f4] px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-md  hover:shadow-zinc-400">
            DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}
