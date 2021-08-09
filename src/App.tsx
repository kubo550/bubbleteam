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
      <Molecular />
      <About />
      <Ingredients />
      <Offer />
      <Caviar />
      <Footer />
    </Layout>
  );
};

export default App;
