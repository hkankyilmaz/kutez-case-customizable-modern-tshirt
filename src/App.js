import Header from "./components/Header";
import Shop from "./components/Shop";
import Products from "./components/Products";
import Footer from "./components/footer";
import NewLetter from "./components/NewLetter";
import Tab from "./components/Tab";
import { data } from "./data/data";

function App() {
  const firstTabProduct = data.slice(0, 3); // Man products
  const SecondTabProduct = data.slice(3); // women products

  return (
    <div className="App">
      <Header />
      <Shop />
      <Tab text="Kadın" />
      <Products data={SecondTabProduct} />
      <Tab text="Erkek" />
      <Products data={firstTabProduct} />
      <NewLetter />
      <Footer />
    </div>
  );
}

export default App;
