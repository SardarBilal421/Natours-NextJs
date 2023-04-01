import NavLayout from "../../components/navLayout";
import Footer from "../../components/footer";
import Home from "../home";
import Login from "../../components/login";

export default function Index() {
  return (
    <>
      <div className="p-6">
        <NavLayout isLogin />
        <Login />
        <Footer />
      </div>
    </>
  );
}
