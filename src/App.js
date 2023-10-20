  import "./App.css";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Firstpage from "./Pages/NavPage/Firstpage";
  import Blog from "./Pages/BlogPage/Blog";
  import Page from "./Pages/Pages/Page";
  import Contact from "./Pages/ContactPage/Contact";
  import Home from "./Pages/Home/Home";

  function App() {
    return (
      <Router>
        <div>
          <Firstpage />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Pages" element={<Page />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
