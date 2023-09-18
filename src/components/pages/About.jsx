import Header from "../layout/Header.jsx";
import Sidebar from "../layout/Sidebar.jsx"
import Main from "../layout/Principal.jsx";
import CardUser from "../ui/CardUser.jsx";
// Cria o Corpo da Página About

const user = [
  {
    nome: "Rafael Kikuchi",
    email: "rafaelk262002@gmail.com",
    photo: "https://avatars.githubusercontent.com/u/112998186?s=400&u=a3ac84b5c64b767b58bc942ae11950524ccfca76&v=4"
  },
  {
    nome:"Greife Silva",
    email:"greifera.curso@gmail.com",
    photo:"https://avatars.githubusercontent.com/u/99847920?v=4"
  }  
]

const About = () => {
  return (
    <>
      <Header />
        <h1>Sobre Nós</h1>
        <CardUser user={user} />
      <Sidebar />
      <Main />
    </>
  );
};

export default About;
