import ContactForm from "./Components/ContactForm";
import DHome from "./Components/DHome";
import DivWrapper from "./Components/DivWrapper";
import FAQSection from "./Components/FAQSection";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import HeroSec from "./Components/HeroSec";
import LayoutWrapper from "./Components/LayoutWrapper";
import Navigation from "./Components/Navigation";
import SampleNumber from "./Components/SampleNumber";
import ServicesToggle from "./Components/ServicesToggle";
import ServiceTab from "./Components/ServiceTab";
import WarehouseSolutions from "./Components/WarehouseSolutions";
import TestimonialsSection from "./Components/WrittenTestimonial";



export default function App() {
  return (
    <>
    <Navigation/>
    <HeroSec/>
    <WarehouseSolutions/>
    <DHome/>
    <LayoutWrapper/>
    <ServiceTab/>
    <SampleNumber/>
    <DivWrapper/>
    <TestimonialsSection/>
    <ServicesToggle/>
    <FeaturesSection/>
    <FAQSection/>
    <ContactForm/>
    <Footer/>
    </>
  )
}