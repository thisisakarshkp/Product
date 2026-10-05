import { Routes ,Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Products from './pages/Products';
import AddProducts from './pages/AddProducts';
import EditProducts from './pages/EditProducts';
import Pnf from './pages/Pnf';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/add-product' element={<AddProducts/>}/>
              <Route path='/edit-product/:id' element={<EditProducts/>}/>
              <Route path='/*' element={<Pnf/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
