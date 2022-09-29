import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header';
import Pages from './components/mainpages/Pages';
import Products from './components/mainpages/products/Products';
import Login from './components/mainpages/auth/Login';
import Register from './components/mainpages/auth/Register';
import Cart from './components/mainpages/cart/Cart';
import NotFound from './components/mainpages/utils/not_found/NotFound';

function App() {
  return (
    <DataProvider>
      <div className="App">
          <Header/>
          <Pages/>         
      </div>
    </DataProvider>
  );
}

export default App;
