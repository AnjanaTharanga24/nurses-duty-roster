import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Home/>
      <ToastContainer/>
    </div>
  );
}

export default App;
