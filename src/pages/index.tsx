import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { HomeContainer, HomeContent } from "../styles/home";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Banner />
      <HomeContent>
        <Cards />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
