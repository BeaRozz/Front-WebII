import AboutSection from "../components/AboutSection";
import DonateAndRecieveSection from "../components/DonateAndRecieveSection";
import JoinTheCauseSection from "../components/JoinTheCause";
import FoundationSection from "../components/FoundationCard";

export default function Home() {
  return (
    <div>
      <FoundationSection />
      <AboutSection />
      <DonateAndRecieveSection />
      <JoinTheCauseSection />
    </div>
  );
}
