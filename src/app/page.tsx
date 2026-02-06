import type { Metadata } from 'next';

import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { TechnicalSkills } from '@/components/technical-skills';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Vijaypal Singh – Full Stack Developer & React Native App Developer',
  description:
    'Official portfolio of Vijaypal Singh, a Full Stack Developer and React Native App Developer. Projects, skills, experience, and contact details.',
};

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
