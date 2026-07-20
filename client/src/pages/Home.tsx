import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Review from "../components/Home/Review";
import WhyChooseUs from "../components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Review />
    </div>
  );
}
