import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">5+ Tahun</p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </div>
            </div>
          </motion.div>

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
            <p className="text-muted-foreground leading-relaxed">
              I am a motivated beginner who is passionate about learning and developing new skills. I enjoy exploring 
              different ideas, solving problems, and improving my abilities through practice and experience. Even though I 
              am at the early stage of my journey, I am committed to continuous growth and always eager to take on new 
              challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through my projects and learning experiences, I aim to build strong foundations and contribute positively to
               every opportunity I get. I am a responsible, curious, and hardworking individual who values teamwork and 
               creativity. My goal is to keep learning, expand my knowledge, and create meaningful work that reflect my 
               dedication and progress.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
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
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
