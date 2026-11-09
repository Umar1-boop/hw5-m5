import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RecipesPage from "./pages/recipes/RecipesPage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import ByCreate from "./pages/byCreate/ByCreate";
import Header from "./feutures/Header/Header";
import Footer from "./feutures/footer/Footer";
import Detal from "./pages/detal/Detal";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes-page" element={<RecipesPage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/aboutus-page" element={<AboutUsPage />} />
        <Route path="/by-create" element={<ByCreate />} />
        <Route path="/recipes-page/:id" element={<Detal />} />
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}
