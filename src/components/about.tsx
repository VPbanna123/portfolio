'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Vijaypal Singh Rathore, a third-year B.Tech student in Data Science
          and Artificial Intelligence at IIIT Dharwad. I&apos;m passionate about
          building software — from full-stack web applications to cross-platform
          mobile apps. My favorite part of programming is solving complex problems
          and seeing ideas come to life.
        </p>
        <p className="mb-4">
          My core stack includes C, C++, JavaScript, TypeScript, React, Next.js,
          Node.js, and React Native. I&apos;ve worked on projects like KrishiSakhi
          (a cross-platform agricultural platform) and an AI-powered lecture generator.
          I actively practice problem-solving on LeetCode and hold a 5-star C rating on HackerRank.
        </p>
        <p>
          I&apos;m looking for software development opportunities where I can contribute,
          learn, and grow. If you have a project or opportunity that matches my
          skills, don&apos;t hesitate to reach out!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
