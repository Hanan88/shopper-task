import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';
import MainOrders from './components/MainOrders';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs />
      <MainOrders />
    </div>
  );
}

export default App;
