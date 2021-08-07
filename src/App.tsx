import {
  Layout,
  Navbar,
  About,
  Hero,
  Molecular,
  Offer,
  Ingredients,
  Caviar,
  Footer,
} from "components";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Molecular />
      <Ingredients />
      <Offer />
      <Caviar />
      <Footer />
    </Layout>
  );
};

export default App;
