import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CoinDetail from "./pages/CoinDetail";
import './App.css'

function App() {
 
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </>
  )
}

export default App
