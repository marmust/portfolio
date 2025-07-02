// A single-page React portfolio website with glowing black aesthetic, scroll sections, and quick navigation
// Tools: React + Tailwind CSS + Framer Motion + Lucide Icons + OCRA font

import { useRef } from 'react';
import { ArrowDown, Home, Info, Mail, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' });

  const NavButton = ({ onClick, icon: Icon, label }) => (
    <button
      onClick={onClick}
      className="flex items-center px-3 py-2 bg-[#111] border border-[#8AAFFF33] text-[#8AAFFF] hover:bg-[#1a1a1a] rounded-md text-sm glow-box"
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );

  return (
    <div className="bg-black text-white font-ocra min-h-screen scroll-smooth">
      {/* Quick Scroll Buttons */}
      <nav className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <NavButton onClick={() => scrollTo(homeRef)} icon={Home} label="Home" />
        <NavButton onClick={() => scrollTo(aboutRef)} icon={Info} label="About" />
        <NavButton onClick={() => scrollTo(projectsRef)} icon={Code} label="Projects" />
        <NavButton onClick={() => scrollTo(contactRef)} icon={Mail} label="Contact" />
      </nav>

      {/* Static noise overlay (faint) */}
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.03] mix-blend-screen bg-[url('/static-noise.gif')]" />

      {/* Home Section */}
      <section ref={homeRef} className="h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold text-[#8AAFFF] glow-text">8AAFFF</h1>
          <p className="mt-2 text-gray-400 text-center">Creative Developer | Black + Glow Vibes</p>
          <ArrowDown className="mt-8 mx-auto animate-bounce text-[#8AAFFF]" />
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-[#8AAFFF] glow-text">About Me</h2>
          <p className="mt-4 text-gray-300">[Insert your developer origin story here]</p>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="h-screen flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#8AAFFF] glow-text text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-[#111] rounded-xl p-4 glow-box border border-[#8AAFFF22]">
                <h3 className="text-xl font-semibold text-[#8AAFFF]">Project {n}</h3>
                <p className="text-gray-400 mt-2">[Project description placeholder]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#8AAFFF] glow-text">Contact</h2>
          <p className="mt-4 text-gray-300">[Add your contact links here]</p>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        @font-face {
          font-family: 'OCRA';
          src: url('https://cdn.jsdelivr.net/gh/tsoding/ttf-fonts/OCRAEXT.TTF') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .font-ocra {
          font-family: 'OCRA', monospace;
        }

        .glow-text {
          text-shadow: 0 0 5px #8AAFFF, 0 0 10px #8AAFFF, 0 0 20px #8AAFFF;
        }

        .glow-box {
          box-shadow: 0 0 10px #8AAFFF44, 0 0 20px #8AAFFF22;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
