import Footer from "../../components/footer";
import NavLayout from "../../components/navLayout";
import ProfilePage from "../../components/profilePage";

export default function Profile() {
  return (
    <>
      <div className="p-6">
        <NavLayout />
        <ProfilePage />
        <Footer />
      </div>
    </>
  );
}
