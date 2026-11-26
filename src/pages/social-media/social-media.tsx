import { useEffect } from 'react';
import styles from './social-media.module.scss';
import {
  ContentGroup,
  ContentItem,
  Reveal,
  TextAndImages,
  Title,
} from '../../components';
import socialsImg from '../../assets/photos/socials.webp';

export default function SocialMedia() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://substack.com/embedjs/embed.js"]'
    );
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = 'https://substack.com/embedjs/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className={styles.page}>
      <Title
        className={styles.title}
        text="Create. Perform. Publish."
        font="'Poiret One', sans-serif"
      />

      <div className={`container ${styles.pageStack}`}>
        <Reveal>
          <TextAndImages
            image={socialsImg}
            alt="Joseph Zeru Creative Profile"
            className={styles.blurb}
            font="'Red Hat Display', sans-serif"
            info={
              <p>
                In a world where AI wants to stunt the creative fields that express our humanity,
                I choose to embrace it to reshape the boundaries and use cases for such innovative
                tools. Before I knew I wanted to do Computer Science, I always had a love for the
                arts. And as a Computer Science and Mathematics student that studies AI, I believe
                it's in my best interest to continue my artistic passions to demonstrate the capability
                AI has when used in the right spaces for the right reasons. When it's time to
                record, my agentic tools stay behind to allow me to fully flex the creative muscle.
              </p>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <ContentGroup
            platform="YouTube"
            tagline="Long-form videos, tech breakdowns, and musical performances."
            className={styles.youtubeGroup}
          >
            <ContentItem
              title="Where is the snow?"
              className={styles.itemCard}
              embed={
                <iframe
                  className={styles.youtubeEmbed}
                  src="https://www.youtube.com/embed/3saPRVgVGSg?si=Z0Pn86yfR2czKG-E"
                  title="YouTube Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              }
              description={
                <p>
                  This is a classic from high school, where I was tasked to make a sub 1-minute video
                  where I can't speak to the camera, but must convey an emotion or idea. I used a poem
                  I wrote about the current state of climate change during 2023.
                </p>
              }
            />
            <ContentItem
              title="Intro Editing Test"
              className={styles.itemCard}
              embed={
                <iframe
                  className={styles.youtubeEmbed}
                  src="https://www.youtube.com/embed/ywgccL-B6ps?si=3EBCbZcQnQgUTxeG"
                  title="YouTube Secondary Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              }
              description={
                <p>
                  This editing test followed the same sort of idea, but was done for a Japanese Popular Culture course.
                  I needed to use elements from recent Japanese culture, so we see a lot of anime-style cuts and
                  modern Japanese iconography.
                </p>
              }
            />
          </ContentGroup>
        </Reveal>

        <Reveal delay={120}>
          <ContentGroup
            platform="Instagram"
            tagline="Visual snapshots, reels, and behind-the-scenes moments."
            className={styles.instagramGroup}
          >
            <ContentItem
              title="JOSEUP x LIFE@ROSE"
              className={styles.itemCard}
              embed={
                <iframe
                  className={styles.instagramEmbed}
                  src="https://www.instagram.com/p/DX6ksTluy6V/embed"
                  title="Instagram Featured Post"
                />
              }
              description={
                <p>
                  With my content creation endeavors capturing the eyes of the
                  Rose-Hulman Social Media team, I was asked to show a week in
                  my life at Rose. Throughout this week of posting, I gave followers
                  a lot of reels, stories, and posts that gave a unique and well-edited
                  view on the world.
                </p>}
            />
            <ContentItem
              title="Interview w/ Ruben Stephen"
              className={styles.itemCard}
              embed={
                <iframe
                  className={styles.instagramEmbed}
                  src="https://www.instagram.com/p/DWP1PY9DW-n/embed"
                  title="Instagram Showcase Post"
                />
              }
              description={
                <p>
                  At NSBE Nationals in 2026, I got in contact with popular Instagram content creator
                  Ruben Stephen, an MiT Mechanical Engineering and Computer Science major who gives
                  intelligent black students in STEM exposure for their endeavors in their career.
                </p>
              }
            />
            <ContentItem
              title="Spotify Transitions"
              className={styles.itemCard}
              embed={
                <iframe
                  className={styles.instagramEmbed}
                  src="https://www.instagram.com/p/DaIv02TxusV/embed"
                  title="Instagram Showcase Post"
                />
              }
              description={
                <p>
                  When Spotify released their new DJ feature, I knew it was my opportunity to learn mixing. Despite it's simple interface,
                  I used it to learn advanced methods of mixing, allowing for smooth transitions to tracks depending on their beat and key.
                </p>
              }
            />
          </ContentGroup>
        </Reveal>

        <Reveal delay={160}>
          <ContentGroup
            platform="Substack"
            tagline="Essays on technology, internet literacy, and creative process."
            className={styles.substackGroup}
          >
            <ContentItem
              title="Featured Essay"
              className={styles.itemCard}
              embed={
                <div className="substack-post-embed">
                  <p lang="en">So Now Keyboard Phones Are Back... by Joseph Zeru</p>
                  <a
                    data-post-link
                    href="https://joseuphadsomethoughts.substack.com/p/so-now-keyboard-phones-are-back-and"
                  >
                    Read on Substack
                  </a>
                </div>
              }
              description={
                <p>
                  During the first half of 2026, I started noticing a lot of phone
                  releases that seemed to reinvent the wheel. Needless to say, I had
                  some thoughts.
                </p>
              }
            />
          </ContentGroup>
        </Reveal>
      </div>
    </main>
  );
}
