import React from "react";
import { Navegator } from "./components/navComponents";
import { Maincomponent } from "./components/mainComponents";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Navegator />
        </nav>
      </header>
      <main>
        <Maincomponent />
      </main>
    </>
  );
};

export default App;
