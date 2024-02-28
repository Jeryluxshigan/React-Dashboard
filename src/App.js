import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/content/dashboard";
import Performance from "./components/content/performance";
import Learning from "./components/content/learning";
import Profile from "./components/content/profile";
import Settings from "./components/content/settings";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <Dashboard />
        <Performance />
        <Learning />
        <Profile />
        <Settings />
      </div>
    </div>
  );
}

export default App;
