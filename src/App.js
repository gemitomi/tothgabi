


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

import About from "./components/about"
import Csaladterapia from "./components/csaladterapia"
import Parterapia from "./components/parterapia"
import Blog from "./components/blog"
import Helyszinek from "./components/helyszinek"
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header/>
          <ScrollToTop>
            <Routes>

              <Route path="/about" element={<About/>}/>
              <Route path="/csaladterapia" element={<Csaladterapia/>}/>
              <Route path="/parterapia" element={<Parterapia/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/helyszinek" element={<Helyszinek/>}/>
              <Route path="/contact" element={<Contact/>}/>
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
