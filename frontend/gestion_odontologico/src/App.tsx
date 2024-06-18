import React from "react";
import { Navigation } from "./components/nav/navBar";
import { Layout } from "./components/page/pageLayout";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
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
