import "./App.css";
import ProductList from "./components/productList";
import { CartProvider } from "./Providers/cart";
import { CatalogueProvider } from "./Providers/catalogue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <div className="container">
              <ProductList className="catalogue" type="catalogue" />
              <ProductList className="cart" type="cart" />
            </div>
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
