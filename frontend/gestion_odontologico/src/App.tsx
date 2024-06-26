import { Navigation } from "./components/nav/navBar";
import { Layout } from "./components/page/pageLayout";
import { Backservices } from "./services/backServices";

const App: React.FC = () => {
  return (
    <>
      <Backservices />
      <nav>
        <Navigation
          home={"Home"}
          pricing={"Pricing"}
          appoinment={"Appoinment"}
          about={"About"}
          signIn={"Sign in"}
          signUp={"Sign up"}
        />
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
