import NavLayout from "../components/navLayout";
import Footer from "../components/footer";
import Home from "./home";

export default function Index() {
  return (
    <>
      <div className="p-6">
        <NavLayout isLogin />
        <Home />
        <Footer />
      </div>
    </>
  );
}
