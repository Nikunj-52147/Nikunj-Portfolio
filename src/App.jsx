import About from "./pages/About";
import Hero from "./pages/Hero";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
