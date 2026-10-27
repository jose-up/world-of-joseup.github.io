import { Link } from 'react-router-dom';
import styles from './home-base.module.scss';

export default function HomeBase() {
  return (
    <main className="container">
      <h1 className={styles.title}>This is Joseph Zeru.</h1>
      <br></br>
      <nav className={styles.navigation}>
        <Link to="/comp-sci" className="btn">Computer Science & Math</Link>
        <Link to="/social-media" className="btn">Social Media & Content</Link>
      </nav>
      <br/>
      <iframe data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/6OzRIfmaiGhbjMQDS2joFv?utm_source=generator&si=39aeab996c5f4fdb"
        width="100%" height="352" frameBorder="0" allowFullScreen
        allow="autoplay; clipboard-write;
        encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
    </main>
  );
}
