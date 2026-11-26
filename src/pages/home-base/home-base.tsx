import styles from './home-base.module.scss';
import {
  EmbedCard,
  LayoutContainer,
  Reveal,
  TextAndImages,
  Title,
} from '../../components';

export default function HomeBase() {
  return (
    <main>
      <Title
        className={styles.title}
        text="This is Joseph Zeru."
        font="'Momo Trust Display', sans-serif"
      />
      <div className={`container ${styles.pageStack}`}>
        <Reveal>
          <LayoutContainer direction="horizontal" className={styles.heroGrid}>
            <TextAndImages
              image='src/assets/photos/boop.webp'
              alt="Joseph being a goofy goober"
              className={styles.intro}
              font="'Funnel Display', sans-serif"
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
                    Check out my projects, social media posts, and more!
                  </p>
                  <br />
                  <ul>
                    <li>I cofounded BinaryHeart@RHIT!</li>
                    <li>I've been a cellist for 10 years!</li>
                    <li>I might be able to voice act if you ask nicely :)</li>
                  </ul>
                </>
              }
            />

            <EmbedCard
              title="On Repeat"
              platform="Spotify"
              className={styles.spotifyCard}
            >
              <iframe
                className={styles.spotify}
                src="https://open.spotify.com/embed/playlist/70nSHMn7DWgL6XxFuXYFxO?utm_source=generator&si=e5b751b88fdb4cdd"
                allowFullScreen
                allow="autoplay; clipboard-write;"
                title="Spotify Playlist"
              />
            </EmbedCard>

            <EmbedCard
              title="Today from Joseph..."
              platform="LinkedIn"
              className={styles.linkedinCard}
            >
              <iframe
                className={styles.linkedin}
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7492569680600215552?collapsed=1"
                allowFullScreen
                title="LinkedIn Post"
              />
            </EmbedCard>
          </LayoutContainer>
        </Reveal>

        <Reveal delay={100}>
          <EmbedCard
            title="World of Joseup Notion Hub"
            platform="Notion"
            className={styles.notionCard}
          >
            <div className={styles.notionFrame}>
              <iframe
                className={styles.notion}
                src="https://worldofjoseup.notion.site/ebd//394411b52edd80539dfbc7eff65f4165"
                scrolling="no"
                title="World of Joseup Notion"
              />
            </div>
          </EmbedCard>
        </Reveal>
      </div>
    </main>
  );
}
