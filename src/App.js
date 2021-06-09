import Footer from "./components/Footer";
import Header from "./components/Header";
import IconSide from "./components/IconSide";
import ProductProvider from "./context/produtoContext";
import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>     
      <ProductProvider>
        <header>
          <Header />
        </header>

        <aside>
          <IconSide />
        </aside>
        
        <main>
          <Routes />
        </main>
        
        <footer>
          <Footer />
        </footer>

      </ProductProvider> 
      <GlobalStyle />
    </>
  );
}

export default App;
