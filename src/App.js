import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Nav/Navbar";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Classes from "./Pages/Classes";
import Price from "./Pages/Price";
import Blog from "./Pages/Blog";
import Schedule from "./Pages/Schedule/Schedule";
import Monday from "./Pages/Schedule/Monday";
import Tuesday from "./Pages/Schedule/Tuesday";
import Wednesday from "./Pages/Schedule/Wednesday";
import Thursday from "./Pages/Schedule/Thursday";
import Friday from "./Pages/Schedule/Friday";
import Saturday from "./Pages/Schedule/Saturday";
import Sunday from "./Pages/Schedule/Sunday";
import Gallery from "./Pages/Gallery/Gallery";
import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";
import About from "./Pages/About";
import Featured from "./components/Featured/Featured";
import ProductDetails from "./Pages/ProductDetails";
import AdminDetails from './Pages/AdminDetails'
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="1061621189707-8q3kactlg090v5hvr23jt57sepv9c5qk.apps.googleusercontent.com">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="classes" element={<Classes />} />
          {/* <Route path="pricing" element={<Price />} /> */}
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="/services" element={<Classes />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin/:id" element={<AdminDetails />}/>
          <Route path="gallery" element={<Gallery />}>
            <Route path="page-1" element={<GalleryPage1 />} />
            <Route path="page-2" element={<GalleryPage2 />} />
          </Route>
        </Routes>
      </AuthContextProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
