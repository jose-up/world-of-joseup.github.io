import { Link } from 'react-router-dom';
import styles from './home-base.module.scss';

export default function HomeBase() {
  return (
    <main>
      <h1 className={styles.title}>This is Joseph Zeru.</h1>
      <br/>
      <div className={`container ${styles.container}`} >
        <p className={styles.intro}>
          <img className={styles.myself} src="./src/assets/boop.webp"/>
          Hello! I'm a current undergraduate student at Rose-Hulman studying
          Computer Science and Mathematics, focusing in Machine Learning,
          Artificial Intelligence, and Quantum Computing. Using my Data Science
          and General Software Engineering experience from interning at UPS, I
          develop projects built on the idea of providing users with benefits to
          their personal safety, work-life balance, and efficiency.
          <br/>
          But that's not all. I've been a fan of consumer tech since middle school,
          and it's led me to express myself in content creation on Instagram, YouTube,
          Substack, and more! Whether it's short-form content, creatively filmed reviews,
          or opinion pieces, I choose to flex my artistic muscle while studying a field where
          others want to weaken it.
        </p>
        <iframe className={styles.spotify}
          src="https://open.spotify.com/embed/playlist/6OzRIfmaiGhbjMQDS2joFv?utm_source=generator&si=39aeab996c5f4fdb"
          allowFullScreen
          allow="autoplay; clipboard-write;
                encrypted-media; fullscreen;
                picture-in-picture"
          loading="lazy"/>
        <iframe className={styles.linkedin}
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7492569680600215552?collapsed=1"
            title="LinkedIn Post"
          loading="lazy"/>
      </div>
      <br/>
      <iframe className={styles.notion}
        src="https://worldofjoseup.notion.site/ebd//394411b52edd80539dfbc7eff65f4165"
        allowFullScreen
        />
    </main>
  );
}
