import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';
import Order from './components/Order';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs />
      <Order />
    </div>
  );
}

export default App;
