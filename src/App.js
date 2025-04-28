import { Routes, Route } from 'react-router-dom';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Highlight from "./components/Highlight/Highlight";
import Testimonial from "./components/Testimonial/Testimonial";
import BookingPage from "./components/BookingPage/BookingPage";
import BookingConfirmation from "./components/BookingConfirmation/BookingConfirmation";

function App() {
  return (
    <>
      <Header />
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
