"use client";
import React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HospitalIcon,
  PersonStandingIcon,
  BuildingIcon,
  HeartCrack,
} from "lucide-react";

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (inView) {
      motionValue.set(parseInt(value));
    }
  }, [inView, motionValue, value]);

  return (
    <motion.span ref={ref} className="inline-block">
      {useTransform(
        rounded,
        (latest) => `${latest}${value.includes("+") ? "+" : ""}`
      )}
    </motion.span>
  );
};

const AboutHeader: React.FC = () => (
  <div className="text-center md:text-left mb-16">
    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold">
      Why GazaDon?
    </h2>
    <p className="text-lg max-w-xl  leading-relaxed tracking-tight text-muted-foreground">
      GazaDon is a platform that helps hospitals and patients in need. we manage
      the process of delivering and exchanging medical supplies and equipment
      between hospitals.
    </p>
  </div>
);

const StatCard: React.FC<{
  icon: React.ElementType;
  value: string;
  description: string;
}> = ({ icon: Icon, value, description }) => (
  <motion.div
    className="flex gap-0 flex-col justify-between p-6 border rounded-md relative text-left"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-12 h-12 mb-4 text-primary absolute bottom-4 right-8 " />
    <h2 className="text-4xl tracking-tighter max-w-xl  font-regular flex flex-row gap-4 items-end font-bold">
      <AnimatedNumber value={value} />
    </h2>
    <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
      {description}
    </p>
  </motion.div>
);

const About: React.FC = () => {
  const About = [
    { icon: HospitalIcon, value: "30+", description: "Hospitals destroyed" },
    { icon: HeartCrack, value: "100000+", description: "Person died" },
    { icon: PersonStandingIcon, value: "130+", description: "Person injured" },
    {
      icon: BuildingIcon,
      value: "40+",
      description: "Buildings destroyed",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {About.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
