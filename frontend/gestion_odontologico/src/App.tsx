import "./App.css";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <p className="prueba">
        <Link to={"/"}>Hola</Link>
      </p>
    </>
  );
};

export default App;
