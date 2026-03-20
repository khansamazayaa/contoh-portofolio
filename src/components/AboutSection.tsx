import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Video } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
  ];

  const content = [
    "I am a motivated beginner who is passionate about learning and developing new skills. I enjoy exploring different ideas, solving problems, and improving my abilities through practice and experience.",
    "Through my projects and learning experiences, I aim to build strong foundations and contribute positively to every opportunity I get. I am a responsible, curious, and hardworking individual who values teamwork and creativity."
  ];

  const content2 = [
    "I also love experimenting with new technologies and frameworks, constantly building mini-projects to test my knowledge.",
    "Collaboration is important to me, so I often share my progress and learnings with peers or in communities to get feedback and improve further."
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openAccordion2, setOpenAccordion2] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Emoji / image box with tilt */}
          <InteractiveTiltBox>
            <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </InteractiveTiltBox>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Passionate Developer &amp; Creator
            </h3>

            {/* Accordion content */}
            {content.map((text, index) => (
              <motion.div key={index} className="border-b border-muted-foreground/20 pb-2">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full text-left font-medium flex justify-between items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Paragraph {index + 1}</span>
                  <span className={`transform transition-transform ${openAccordion === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openAccordion === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground mt-2 leading-relaxed"
                  >
                    {text}
                  </motion.p>
                )}
              </motion.div>
            ))}

            {content2.map((text, index) => (
              <motion.div key={index} className="border-b border-muted-foreground/20 pb-2">
                <button
                  onClick={() => setOpenAccordion2(openAccordion2 === index ? null : index)}
                  className="w-full text-left font-medium flex justify-between items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Extra {index + 1}</span>
                  <span className={`transform transition-transform ${openAccordion2 === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openAccordion2 === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground mt-2 leading-relaxed"
                  >
                    {text}
                  </motion.p>
                )}
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <InteractiveTiltBox key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                  >
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </InteractiveTiltBox>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// COMPONENT TILT INTERACTIVE
function InteractiveTiltBox({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}