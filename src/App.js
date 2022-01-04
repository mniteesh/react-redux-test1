import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListnings from "./components/ProductListnings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListnings />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
