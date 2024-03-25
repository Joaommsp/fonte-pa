
import Header from "../../Components/Header";

import BannerBackground from "../../assets/images/start-bg.jpg"

import { HomeContainer, BannerContainer, Banner } from "./styles";

const Home = () => {
  return <HomeContainer>
    <Header />
    <BannerContainer>
        <Banner $bgImage={BannerBackground} >

        </Banner>
    </BannerContainer>
  </HomeContainer>;
};

export default Home;
