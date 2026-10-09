import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Calendar from "@/components/Calendar";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Notice from "@/components/Notice";
import Account from "@/components/Account";
import Share from "@/components/Share";

export default function Home() {
  return (
    <main>
      <Hero />
      <Invitation />
      <Calendar />
      <Gallery />
      <Location />
      <Notice />
      <Account />
      <Share />
    </main>
  );
}
