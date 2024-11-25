import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss"
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import Navbar from "./components/Navbar";
import CategoryProductsPage from "./pages/CategoryProductsPage";

const App = () => (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/:category" element={<CategoryProductsPage/>} />
      </Routes>
    </Router>
);

export default App;
