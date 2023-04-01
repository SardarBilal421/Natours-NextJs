import NavLayout from "../../components/navLayout";
import Footer from "../../components/footer";
import Home from "../home";
import Signup from "../../components/signup";

export default function Index() {
  return (
    <>
      <div className="p-6">
        <NavLayout isLogin />
        <Signup />
        <Footer />
      </div>
    </>
  );
}
