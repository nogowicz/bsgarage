import styles from './page.module.css';
import Banner from '@/components/banner/Banner';
import CallToActionText from '@/components/call-to-action-text/CallToActionText';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <CallToActionText />
    </main>
  );
}
