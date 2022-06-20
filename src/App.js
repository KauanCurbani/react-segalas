import Home from "./pages/homepage/index";
import Header from "./component/header";
import About from "./pages/about/index";
import Products from "./pages/products/index";
import Atuacao from "./pages/atuacao";
import Map from "./pages/map";
import TrabalheC from "./pages/trabalheC";
import Footer from "./component/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Products />
      <Atuacao />
      <TrabalheC />
      <Footer />
    </div>
  );
}

export default App;
