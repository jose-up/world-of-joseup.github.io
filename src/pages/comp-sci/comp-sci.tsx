import styles from './comp-sci.module.scss';
import { TextAndImages, Title } from '../../components';
import professionalImg from '../../assets/photos/professional.webp';

export default function CompSci() {
  return (
    <main>
      <Title className={styles.title} text="An Expansive Undergrad Experience." />
      <br />
      <div className={`container ${styles.container}`}>
        <img
          className={styles.resume}
          src="/resume.webp"
          alt="Joseph Zeru Resume"
        />
        <TextAndImages
          image={professionalImg}
          alt="Professional Headshot"
          className={styles.blurb}
          font="'Buda', sans-serif"
          info={
            <p>
              I'm currently an undergraduate at the Rose-Hulman Institute of Technology
              studying Computer Science and Mathematics. I also was previously an
              intern at UPS for the Network Planning and Optimization Platform and Data
              Science and Machine Learning teams. When building this website, I've done
              my best to implement the Web design skills I've learned there, with reusable
              code, a ReactJS and TypeScript interface, as well as unique typography!
            </p>
          }
        />
      </div>
    </main>
  );
}
