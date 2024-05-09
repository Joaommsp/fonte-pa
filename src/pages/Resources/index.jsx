import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import { ResourcesContainer } from "./styles";

const Resources = () => {
  return (
    <ResourcesContainer>
      <Header pageIndex={2}></Header>
      <h1>Recursos</h1>
      <Footer></Footer>
    </ResourcesContainer>
  );
};

export default Resources;
