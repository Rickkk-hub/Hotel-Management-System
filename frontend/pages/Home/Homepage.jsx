import HeaderGuestAdmin from "../../Components/Layout/HeaderGuestAdmin";
import HomeBody from "../../Components/Layout/HomeBody";
import HomeMain from "../../Components/Layout/HomeMain";
import HomeFooter from "../../Components/Layout/HomeFooter";
import HomeRate from "../../Components/Layout/HomeRate";
import HomeContact from "../../Components/Layout/HomeContact";

export default function Homepage() {
  return (
    <div>
      <HeaderGuestAdmin />
      <HomeBody />
      <HomeMain/>
      <HomeRate/>
      <HomeContact/>
      <HomeFooter/>
    </div>
  );
}

