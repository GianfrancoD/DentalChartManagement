import React from "react";
import { Menu } from "./components/navPage";
import { Hdashboard } from "./components/homedashboard";

const App: React.FC = () => {
  return (
    <>
      <Menu
        src="https://cdn.pixabay.com/photo/2024/02/16/06/26/dentist-8576790_1280.png"
        alt="Imagen de dentista"
        className="w-full h-full"
      />
      <Hdashboard />
    </>
  );
};

export default App;
