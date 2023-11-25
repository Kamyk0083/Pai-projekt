import "./Home.scss";
import { Header, Footer } from "./../../components";
import Section from "../../components/section/section.component";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};
export default Home;
