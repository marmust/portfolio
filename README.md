<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>8AAFFF Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Framer Motion and React CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/framer-motion/dist/framer-motion.umd.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
      @font-face {
        font-family: 'OCRA';
        src: url('https://cdn.jsdelivr.net/gh/tsoding/ttf-fonts/OCRAEXT.TTF') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      html {
        scroll-behavior: smooth;
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

      .analog-fuzz {
        position: relative;
      }

      .analog-fuzz::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url('https://media.githubusercontent.com/media/captainpainway/noise-overlay/main/noise.gif') repeat;
        opacity: 0.03;
        mix-blend-mode: screen;
        pointer-events: none;
      }
    </style>
  </head>
  <body class="bg-black text-white font-ocra">
    <div id="root"></div>

    <script type="text/javascript">
      const { useRef } = React;
      const { motion } = window.framerMotion;

      function Portfolio() {
        const homeRef = useRef(null);
        const aboutRef = useRef(null);
        const projectsRef = useRef(null);
        const contactRef = useRef(null);

        const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' });

        const NavButton = ({ onClick, icon, label }) => {
          const Icon = lucide[icon];
          return React.createElement(
            'button',
            {
              onClick,
              className:
                'flex items-center px-3 py-2 bg-[#111] border border-[#8AAFFF33] text-[#8AAFFF] hover:bg-[#1a1a1a] rounded-md text-sm glow-box',
            },
            React.createElement(Icon, { className: 'w-4 h-4 mr-2' }),
            label
          );
        };

        return React.createElement(
          'div',
          { className: 'min-h-screen scroll-smooth relative' },
          React.createElement(
            'nav',
            { className: 'fixed top-4 right-4 z-50 flex flex-col gap-2' },
            React.createElement(NavButton, { onClick: () => scrollTo(homeRef), icon: 'Home', label: 'Home' }),
            React.createElement(NavButton, { onClick: () => scrollTo(aboutRef), icon: 'Info', label: 'About' }),
            React.createElement(NavButton, { onClick: () => scrollTo(projectsRef), icon: 'Code', label: 'Projects' }),
            React.createElement(NavButton, { onClick: () => scrollTo(contactRef), icon: 'Mail', label: 'Contact' })
          ),
          React.createElement('div', {
            className:
              'pointer-events-none fixed inset-0 z-10 opacity-[0.03] mix-blend-screen bg-[url(\"/static-noise.gif\")]',
          }),

          React.createElement(
            'section',
            { ref: homeRef, className: 'h-screen flex items-center justify-center' },
            React.createElement(
              motion.div,
              { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } },
              React.createElement('h1', {
                className: 'text-5xl font-bold text-[#8AAFFF] glow-text analog-fuzz',
                children: '8AAFFF',
              }),
              React.createElement('p', {
                className: 'mt-2 text-gray-400 text-center',
                children: 'Creative Developer | Black + Glow Vibes',
              }),
              React.createElement(lucide.ArrowDown, {
                className: 'mt-8 mx-auto animate-bounce text-[#8AAFFF]',
              })
            )
          ),

          React.createElement(
            'section',
            { ref: aboutRef, className: 'h-screen flex items-center justify-center' },
            React.createElement('div', { className: 'max-w-2xl text-center' }, [
              React.createElement('h2', {
                className: 'text-4xl font-bold text-[#8AAFFF] glow-text analog-fuzz',
                children: 'About Me',
              }),
              React.createElement('p', {
                className: 'mt-4 text-gray-300',
                children: '[Insert your developer origin story here]',
              }),
            ])
          ),

          React.createElement(
            'section',
            { ref: projectsRef, className: 'h-screen flex items-center justify-center' },
            React.createElement('div', { className: 'max-w-4xl' }, [
              React.createElement('h2', {
                className: 'text-4xl font-bold text-[#8AAFFF] glow-text analog-fuzz text-center',
                children: 'Projects',
              }),
              React.createElement(
                'div',
                { className: 'mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6' },
                [1, 2, 3].map((n) =>
                  React.createElement('div', {
                    key: n,
                    className: 'bg-[#111] rounded-xl p-4 glow-box border border-[#8AAFFF22]',
                    children: [
                      React.createElement('h3', {
                        className: 'text-xl font-semibold text-[#8AAFFF]',
                        children: `Project ${n}`,
                      }),
                      React.createElement('p', {
                        className: 'text-gray-400 mt-2',
                        children: '[Project description placeholder]',
                      }),
                    ],
                  })
                )
              ),
            ])
          ),

          React.createElement(
            'section',
            { ref: contactRef, className: 'h-screen flex items-center justify-center' },
            React.createElement('div', { className: 'text-center' }, [
              React.createElement('h2', {
                className: 'text-4xl font-bold text-[#8AAFFF] glow-text analog-fuzz',
                children: 'Contact',
              }),
              React.createElement('p', {
                className: 'mt-4 text-gray-300',
                children: '[Add your contact links here]',
              }),
            ])
          )
        );
      }

      ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Portfolio));
    </script>
  </body>
</html>
