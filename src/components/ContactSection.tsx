import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'khansamazaya112@gmail.com', href: 'mailto:khansamazaya112@gmail.com' },
  { icon: Phone, label: 'Telepon', value: '+62 82293587814', href: 'tel:+6282293587814' },
  { icon: MapPin, label: 'Lokasi', value: 'Aceh, Indonesia', href: '#' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Kontak</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* KIRI (CARD KONTAK) */}
          <div className="space-y-6 [perspective:1000px]">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mari Berkolaborasi!</h3>
              <p className="text-muted-foreground">Punya project menarik? Yuk ngobrol!</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <InteractiveCard key={index} info={info} />
              ))}
            </div>
          </div>

          {/* KANAN (FORM) */}
          <motion.div initial={{ opacity: 0, x: 80, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6 }}>
            <motion.form
              action="https://formspree.io/f/xbdzwarz"
              method="POST"
              className="space-y-6 p-6 glass rounded-2xl shadow-lg"
              whileHover={{ y: -10, scale: 1.02, rotateX: 3, rotateY: -3 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Input name="name" placeholder="Nama Anda" required />
              <Input name="email" type="email" placeholder="Email Anda" required />
              <Input name="subject" placeholder="Subjek" required />
              <Textarea name="message" placeholder="Tulis pesan..." rows={5} required />

              <motion.div whileHover={{ scale: 1.1, y: -4, rotate: -2 }} whileTap={{ scale: 0.95, rotate: 0 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button className="w-full rounded-full bg-amber-500 hover:bg-amber-600 text-black shadow-md">
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Pesan
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// COMPONENT INTERACTIVE CARD
function InteractiveCard({ info }: { info: typeof contactInfo[0] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [ -50, 50 ], [15, -15]);
  const rotateY = useTransform(x, [ -50, 50 ], [-15, 15]);

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
    <motion.a
      ref={ref}
      href={info.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 glass rounded-xl shadow-md"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <motion.div className="p-3 rounded-lg bg-primary/10">
        <info.icon className="h-5 w-5 text-primary" />
      </motion.div>

      <div>
        <p className="text-sm text-muted-foreground">{info.label}</p>
        <p className="font-medium">{info.value}</p>
      </div>
    </motion.a>
  );
}