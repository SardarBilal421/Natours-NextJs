import useSWR from "swr";
import Card from "../components/cards";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  // console.log(localStorage.getItem("login"));

  const { data, error } = useSWR("/api/staticdata", fetcher);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 bg-red-100 ">
      <main className="font-sans w-4/5 ml-[10%] mt-24 mb-24  grid xl:grid-cols-3 md:grid-cols-3 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
        {data.map((item, index) => {
          return <Card cardData={item} key={index}></Card>;
        })}
      </main>
    </div>
  );
}
