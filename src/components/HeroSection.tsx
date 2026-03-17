import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <ThreeScene />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* FOTO PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full blur-3xl bg-amber-400 opacity-30"></div>

              <img
                src="/mahkota.jpg"
                alt="profile"
                className="relative w-64 h-64 object-cover rounded-full border-4 border-primary shadow-glow"
              />
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left">

            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 backdrop-blur text-sm text-amber-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Khansa
              <br />
              <span className="bg-gradient-to-r  from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Portfolio X-3
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              Saya membangun aplikasi web yang indah dan fungsional serta
              membagikan pengetahuan melalui konten yang inspiratif.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary text-black hover:opacity-90"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element)
                    element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-amber-500 text-amber-500"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element)
                    element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              className="flex gap-5 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: Github, href: "https://github.com/khansamazayaa" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-purple-600 transition"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/10 backdrop-blur"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-white" />
      </motion.button>
    </section>
  );
}