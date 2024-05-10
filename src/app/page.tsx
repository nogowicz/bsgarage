import styles from './page.module.css';
import Banner from '@/components/banner/Banner';
import CallToActionText from '@/components/call-to-action-text/CallToActionText';
import Navbar from '@/components/navbar/Navbar';
import OpinionCarousel from '@/components/opinion-carousel/OpinionCarousel';
import ProjectsGrid from '@/components/projects-grid/ProjectsGrid';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Banner />
      <CallToActionText />
      <ProjectsGrid />
      <OpinionCarousel />
    </main>
  );
}
