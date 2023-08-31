import Header from "../layout/Header.jsx";
import Sidebar from "../layout/Sidebar.jsx"
import Main from "../layout/Principal.jsx";
// Cria o Corpo da Página About

const About = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Sobre Nós</h1>
      </div>
      <Sidebar />
      <Main />
    </>
  );
};

export default About;
