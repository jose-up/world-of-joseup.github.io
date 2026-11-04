import { Link } from 'react-router-dom';
import styles from './comp-sci.module.scss';

export default function CompSci() {
  return (
    <main className="container">
      <h1 className={styles.title}>An Expansive Undergrad Experience</h1>
      <img className={styles.resume}
      src="/resume.webp"/>
    </main>
  );
}
