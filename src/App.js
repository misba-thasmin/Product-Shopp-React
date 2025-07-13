import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes >
        <Route path="/Home" element={<Home />} />
        <Route path="/Add" element={<AddProduct />} />
        <Route path="/Search" element={<SearchProduct />} />
        <Route path="/Delete" element={<DeleteProduct />} />
        <Route path="/View" element={<ViewAll />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
