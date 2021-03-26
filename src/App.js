import './App.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import ProductItems from './Component/ProductItems';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/product" exact component={Product} />
        <Route path="/product/:id" component={ProductItems} />

      </div>
    </Router >
  );
}

export default App;
