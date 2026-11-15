import styles from './home-base.module.scss';
import { TextAndImages, Title } from '../../components';

export default function HomeBase() {
  return (
    <main>
      <Title className={styles.title} text="This is Joseph Zeru." />
      <br />
      <div className={`container ${styles.container}`}>
        <TextAndImages
          image='../../assets/photos/boop.webp'
          alt="Joseph being a goofy goober"
          className={styles.intro}
          imageClassName={styles.myself}
          info={
            <>
              <p>
                Hello! I'm an elusive figure on the internet who's a really passionate AI-focused
                computer scientist, musician, and content-creator who loves to develop projects to
                improve the ease of use for non-technical individuals navigating the internet in a
                day and age where just one wrong button can give someone all of your information.
              </p>
              <br />
              <p>
                This website will give you a gateway into the "World of Joseup" as I like to call it.
                On the Project Work tab, you can see my academic and professional accomplishments in
                Computer Science. On the social media tab, you can see my most recent releases across
                Instagram, YouTube, Substack, and more!
              </p>
              <br />
              <ul>
                <li>I cofounded BinaryHeart@RHIT!</li>
                <li>I've being a cellist for 10 years!</li>
                <li>I might be able to voice act if you ask nicely :)</li>
              </ul>
            </>
          }
        />
        <iframe
          className={styles.spotify}
          src="https://open.spotify.com/embed/playlist/70nSHMn7DWgL6XxFuXYFxO?utm_source=generator&si=e5b751b88fdb4cdd"
          allowFullScreen
          allow="autoplay; clipboard-write;"
        />
        <iframe
          className={styles.linkedin}
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7492569680600215552?collapsed=1"
          allowFullScreen
          title="LinkedIn Post"
        />
      </div>
      <iframe className={styles.notion}
        src="https://worldofjoseup.notion.site/ebd//394411b52edd80539dfbc7eff65f4165"
        allowFullScreen
      />
    </main>
  );
}
