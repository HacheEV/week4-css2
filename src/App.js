import Navbar from './components/Navbar/navbar.js';
import Footer from './components/Footer/Footer.js';
import CardContainer from './components/Content/CardContainer';

function App() {
  return (
    <div className="content">
      <Navbar />
      <CardContainer/>
      <Footer />
    </div>
  );
}

export default App;
