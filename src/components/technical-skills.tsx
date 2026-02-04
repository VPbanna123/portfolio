'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { technicalSkillsData } from '@/lib/data';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export const TechnicalSkills = () => {
    const { ref } = useSectionInView('Skills');

    return (
        <section
            ref={ref}
            id="skills"
            className="my-10 w-full scroll-mt-28 md:mb-20"
        >
            <SectionHeading
                heading="Technical Skills"
                content="Technologies and tools I work with."
            />
            <div className="mx-auto max-w-4xl space-y-8">
                {technicalSkillsData.map(({ category, skills }, categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * categoryIndex }}
                        viewport={{ once: true }}
                        className="rounded-lg border bg-card p-4"
                    >
                        <h3 className="mb-4 text-lg font-semibold text-primary">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                    className="rounded-full border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-muted"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
