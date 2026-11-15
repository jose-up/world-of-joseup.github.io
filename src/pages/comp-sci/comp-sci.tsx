import { Link } from 'react-router-dom';
import styles from './comp-sci.module.scss';
import { TextAndImages, Title } from '../../components';

export default function CompSci() {
  return (
    <main className="container">
      <Title className={styles.title} text="An Expansive Undergrad Experience." />
      <br/>
      <div className={`container ${styles.container}`}>
        <img className={styles.resume}
          src="/resume.webp" />
        <div>
          <TextAndImages
            image='../../assets/photos/boop.webp'
            alt="Professional Headshot"
            className={styles.blurb}
            imageClassName={styles.headshot}
            info={
              <>
                <p>

                </p>
              </>
            }
          />
        </div>
      </div>
    </main>
  );
}
