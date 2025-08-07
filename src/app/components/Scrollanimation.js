'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo } from 'react';
import { useAnimation } from 'framer-motion';

export default function AnimatedText({
  text,
  className = '',
  as = 'p',
  delay = 0,
  duration = 0.4,
  y = 20,
}) {
  const Tag = motion[as] || motion.p;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const variants = useMemo(() => ({
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
        delay,
      },
    },
  }), [delay, duration, y]);

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {text}
    </Tag>
  );
}
