import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

export const WorkHero = () => (
  <motion.div
    animate="visible"
    className="mb-12 space-y-4"
    custom={0}
    initial="hidden"
    variants={fadeUp}
  >
    <h1 className="font-display text-4xl sm:text-5xl">Work</h1>
    <p className="max-w-2xl text-lg text-muted-foreground">
      Case studies from projects I build to sharpen my skills. I focus on clean UI, reusable components, and making things that are responsive, fast, and a little delightful.
    </p> 
  </motion.div>
);
