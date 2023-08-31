import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import Main from "../layout/Principal.jsx";
import Content from "../layout/Content.jsx";

// Cria o Corpo da Página Home

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
