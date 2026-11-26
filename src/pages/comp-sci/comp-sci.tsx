import styles from './comp-sci.module.scss';
import {
  EmbedCard,
  LayoutContainer,
  PillBadge,
  ProjectCard,
  Reveal,
  Subtitle,
  TextAndImages,
  Title,
} from '../../components';
import type { ProjectCardProps } from '../../components/project-card/project-card';
import professionalImg from '../../assets/photos/professional.webp';

import DOMTool from '../../assets/photos/coding-projects/budgetmanagement.webp';
import upsHackathon from '../../assets/photos/coding-projects/flightreadiness.webp';
import selfRouted from '../../assets/photos/coding-projects/website.webp';
import aiProject from '../../assets/photos/coding-projects/abyssinia.webp';

const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Budget Management Tool',
    description:
      'This was one of the first projects I made after the initial development of my website. This uses localStorage for data, contains separate gift tracking, and features dyslexia-friendly typography to improve accessibility for users.',
    status: 'completed',
    mediaSrc: DOMTool,
    mediaType: 'image',
    href: '/web-apps/budget-management-tool/budgetmanagement.html',
    tags: ['JavaScript', 'DOM', 'Accessibility'],
  },
  {
    title: 'Flight-Readiness & Advisory Analysis',
    description:
      'This was a UPS Hackathon project from my internship in Summer of 2026! I implemented a bipartite graph adjacency list and matrix system mapping interrelated signal errors into clear operational business logic.',
    status: 'completed',
    mediaSrc: upsHackathon,
    mediaType: 'image',
    href: 'https://github.com/UPS-Hackathon-2026/a-line-pilots',
    tags: ['Graph Theory', 'Java', 'Algorithms'],
  },
  {
    title: 'This Website! (2.0)',
    description:
      'A lot of my professional knowledge on frameworks and UI design went into this project! Months of working on industry level apps allowed me to develop one of my best front-end heavy projects.',
    status: 'completed',
    mediaSrc: selfRouted,
    mediaType: 'image',
    href: 'https://worldofjoseup.live/',
    tags: ['ReactJS', 'Typography', 'UI Design'],
  },
  {
    title: 'Abyssinia AI - The User-Privacy Assistant',
    description:
      'In a world where privacy policies and Terms-of-Service documents are being manipulated to benefit corporations, we reach a dilemma: consumers cannot easily access this vital information. With Abyssinia, I hope to develop an LLM that will give consumers the transparency to consciously click "I Agree" to their favorite services.',
    status: 'in-progress',
    mediaSrc: aiProject,
    mediaType: 'image',
    tags: ['AI', 'NLP', 'Databases and SQL'],
  },
];

export default function CompSci() {
  return (
    <main>
      <Title
        className={styles.title}
        text="An Expansive Undergrad Experience."
        font="'Buda', serif"
      />

      <div className={`container ${styles.pageStack}`}>
        <Reveal>
          <LayoutContainer direction="horizontal" className={styles.topSplit}>
            <img
              className={styles.resume}
              src="/resume.webp"
              alt="Joseph Zeru Resume"
            />

            <LayoutContainer direction="vertical" className={styles.rightColumn}>
              <TextAndImages
                image={professionalImg}
                alt="Professional Headshot"
                className={styles.blurb}
                font="'Funnel Display', sans-serif"
                info={
                  <p>
                    I'm currently an undergraduate at the Rose-Hulman Institute of Technology
                    studying Computer Science and Mathematics. I also was previously an
                    intern at UPS for the Network Planning and Optimization Platform and Data
                    Science and Machine Learning teams. When building this website, I've done
                    my best to implement the Web design skills I've learned there, with reusable
                    code, a ReactJS and TypeScript interface, as well as unique typography!
                    Stay tuned because some big projects are releasing very soon!
                  </p>
                }
              />

              <EmbedCard
                title="GitHub Contributions"
                platform="@jose-up"
                href="https://github.com/jose-up"
                className={styles.githubCard}
              >
                <div className={styles.githubStack}>
                  <img
                    className={styles.githubChart}
                    src="https://ghchart.rshah.org/3b82f6/jose-up"
                    alt="Joseph Zeru GitHub Contribution Chart"
                    loading="lazy"
                  />
                  <img
                    className={styles.githubGraph}
                    src="https://github-readme-activity-graph.vercel.app/graph?username=jose-up&bg_color=12111a&color=F7F2EA&line=063F8A&point=C8102E&area=true&area_color=063F8A&hide_border=true"
                    alt="Joseph Zeru GitHub Activity Graph"
                    loading="lazy"
                  />
                </div>
              </EmbedCard>
            </LayoutContainer>
          </LayoutContainer>
        </Reveal>

        <Reveal delay={120}>
          <section className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
              <Subtitle
                className={styles.sectionSubtitle}
                text="Coding Projects"
                font="'Buda', serif"
              />
              <div className={styles.legend}>
                <PillBadge showDot className={styles.legendCompleted}>Completed</PillBadge>
                <PillBadge showDot className={styles.legendProgress}>In Progress</PillBadge>
                <PillBadge showDot className={styles.legendPlanned}>Planned</PillBadge>
              </div>
            </div>

            <LayoutContainer direction="grid" className={styles.projectGrid}>
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  className={styles.projectCard}
                />
              ))}
            </LayoutContainer>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
