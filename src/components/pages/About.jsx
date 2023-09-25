import Header from "../layout/Header.jsx";
import Sidebar from "../layout/Sidebar.jsx"
import Main from "../layout/Principal.jsx";
import CardUser from "../ui/CardUser.jsx";
import { useEffect, useState } from "react";
// Cria o Corpo da Página About

const About = () => {

  const [users, setUsers] = useState([])
     

  useEffect(()=>{
    
    const getUsers = async () => {
      const response = await fetch('http://localhost:3300/user/list')
      const data = await response.json()
      console.log(data.success)
      console.log(data.users)
      setUsers(data.users)
    }

    getUsers()
    
  }, [])

  return (
    <>
      <Header />
        <h1>Sobre Nós</h1>
        <Main>
        <Sidebar />
            {
              users.length > 0 ? users.map((user) => {
              return <CardUser key={user.id} user={user} />
            }): <p>Carregando...</p>
          }
      </Main>
    </>
  );
};

export default About;
