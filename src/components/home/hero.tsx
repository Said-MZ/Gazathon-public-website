"use client";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroImage from "./hero-image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full py-10 lg:pt-0">
      <div className="container mx-auto p-2">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-4 flex-col lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2 }}
            ></motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl max-w-2xl tracking-tighter text-center lg:text-left font-regular"
            >
              Welcome to Gaza<span className="text-primary">Don</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center lg:text-left"
            >
              This is a platform managed by the Health Ministry in Gaza to help
              Hospitals and patients in need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-3 mt-6 w-full sm:w-auto mx-auto lg:mx-0"
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 w-full sm:w-auto"
                asChild
              >
                <Link href="/about">
                  <ArrowRight className="w-4 h-4" />
                  About us
                </Link>
              </Button>
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link href="/donate">
                  <Heart className="w-4 h-4" />
                  Donate
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6 }}
            className="w-full lg:w-1/2 max-w-[50rem] mt-4 lg:mt-0 relative h-[300px] md:h-[400px] overflow-hidden"
          >
            <motion.div
              className="w-full h-full bg-transparent border-transparent"
              animate={{
                rotate: [0, 1, 0, -1, 0],
                y: [0, 2, 0, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <HeroImage />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
