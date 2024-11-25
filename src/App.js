import './App.css';
import Element from './Components/Elements/Element';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Test from './Components/Test/Test';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Element />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
