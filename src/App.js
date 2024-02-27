import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Page1 from './components/content/page1';

function App() {
  return (
   <div className="app">
    <Sidebar />
    <Navbar />
    <div className="main-content">
      <Page1 />
    </div>
  </div>
  );
}

export default App;
