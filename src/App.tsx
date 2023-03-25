// import heroImage from "./assets/mobile/image-keyboard.jpg";

// import Header from "./components/Layout/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Keyboard from "./components/Keyboard/Keyboard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <Keyboard />
      <Features />
    </Layout>
  );
}

export default App;
