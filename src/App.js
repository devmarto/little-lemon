import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Highlight from "./components/Highlight/Highlight";
import Testimonial from "./components/Testimonial/Testimonial";
import BookingPage from "./components/BookingPage/BookingPage";
import BookingConfirmation from "./components/BookingConfirmation/BookingConfirmation";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Highlight />
            <Testimonial />
            <About />
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
