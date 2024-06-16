import React from "react";
import { Navigation } from "./components/nav/navBar";
import { Layout } from "./components/page/pageLayout";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Layout
          src={"https://preview.cruip.com/open-pro/images/hero-image-01.jpg"}
          alt={"imagen central"}
        />
      </main>
    </>
  );
};

export default App;
