


import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header/>
          <ScrollToTop>
            <Routes>

            <Route path="/" element={<LandingPage/>}/>

            <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </ScrollToTop>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
