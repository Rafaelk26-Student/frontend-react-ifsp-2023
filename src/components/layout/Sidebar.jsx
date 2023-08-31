import "./Sidebar.css";
import Content from "./Content";
const Sidebar = ({ children }) => {
  return (
    <>
      <aside>
        <p>Lorem ipsum dolor sit amet.</p>
        <Content>
          <button>Acesse Aqui</button>
        </Content>
      </aside>
    </>
  );
};

export default Sidebar;
