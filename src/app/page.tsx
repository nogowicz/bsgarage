import styles from './page.module.css';
import Banner from '@/components/banner/Banner';
import CallToActionText from '@/components/call-to-action-text/CallToActionText';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import Locations from '@/components/locations/Locations';
import Navbar from '@/components/navbar/Navbar';
import OfferSection from '@/components/offer-section/OfferSection';
import OpinionCarousel from '@/components/opinion-carousel/OpinionCarousel';
import ProjectsGrid from '@/components/projects-grid/ProjectsGrid';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Banner />
      <CallToActionText />
      <Locations />
      <ProjectsGrid />
      <OpinionCarousel />
      <OfferSection />
      <Contact />
      <Footer />
    </main>
  );
}
