<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>8AAFFF | Portfolio</title>
  <style>
    :root {
      --bg-color: #000000;
      --text-color: #ffffff;
      --glow-color: #8AAFFF;
      --glow-strength: 0 0 20px, 0 0 40px, 0 0 60px;
    }

    body {
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: 'Consolas', 'Courier New', monospace;
      scroll-behavior: smooth;
    }

    h1, h2, h3, p {
      color: var(--text-color);
      text-shadow: var(--glow-strength) var(--glow-color);
    }

    .section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      box-sizing: border-box;
    }

    .glow-box {
      border: 2px solid var(--glow-color);
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: var(--glow-strength) var(--glow-color);
      margin: 1rem;
      max-width: 700px;
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.2rem;
    }

    .skill {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #111;
      border: 2px solid var(--glow-color);
      border-radius: 0.75rem;
      box-shadow: var(--glow-strength) var(--glow-color);
      font-weight: bold;
      text-align: center;
    }

    .side-nav {
      position: fixed;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 1000;
    }

    .nav-button {
      background: none;
      color: var(--text-color);
      border: 2px solid var(--glow-color);
      padding: 0.4rem 0.8rem;
      cursor: pointer;
      border-radius: 0.4rem;
      font-family: 'Consolas', 'Courier New', monospace;
      box-shadow: var(--glow-strength) var(--glow-color);
      text-shadow: var(--glow-strength) var(--glow-color);
    }

    a {
      color: var(--glow-color);
      text-decoration: none;
      text-shadow: var(--glow-strength) var(--glow-color);
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <!-- Load React and ReactDOM from CDN -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <script type="text/javascript">
    const { useRef } = React;

    function App() {
      const aboutRef = useRef(null);
      const skillsRef = useRef(null);
      const projectsRef = useRef(null);
      const contactRef = useRef(null);

      const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

      return (
        React.createElement(React.Fragment, null,
          React.createElement('div', { className: 'side-nav' },
            React.createElement('button', { className: 'nav-button', onClick: () => scrollTo(aboutRef) }, 'About'),
            React.createElement('button', { className: 'nav-button', onClick: () => scrollTo(skillsRef) }, 'Skills'),
            React.createElement('button', { className: 'nav-button', onClick: () => scrollTo(projectsRef) }, 'Projects'),
            React.createElement('button', { className: 'nav-button', onClick: () => scrollTo(contactRef) }, 'Contact')
          ),
          React.createElement('div', { className: 'section', ref: aboutRef },
            React.createElement('h1', null, '8AAFFF'),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('p', null, 'I develop AI systems, C++ servers, and game clients. My stack includes PyTorch, Unity, ASIO, and transformer-based models. Currently experimenting with LoRA and quantization for tiny hardware.')
            )
          ),
          React.createElement('div', { className: 'section', ref: skillsRef },
            React.createElement('h2', null, 'Skills'),
            React.createElement('div', { className: 'skills-grid' },
              ['React', 'Unity', 'C++', 'Python', 'Transformers', 'ASIO', 'LoRA', 'Quantization'].map(skill =>
                React.createElement('div', { className: 'skill', key: skill }, skill)
              )
            )
          ),
          React.createElement('div', { className: 'section', ref: projectsRef },
            React.createElement('h2', null, 'Projects'),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('h3', null, 'Medical AI Decision Engine'),
              React.createElement('p', null, 'Built with FLAN-T5 and optimized for Jetson Nano with <2 GB RAM. Includes LoRA and 8-bit quantization.')
            ),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('h3', null, 'Unity Trivia Game'),
              React.createElement('p', null, 'Client-server game with UI Toolkit (UXML), async TCP, and admin controls.')
            ),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('h3', null, 'C++ ASIO Server'),
              React.createElement('p', null, 'Low-latency TCP server using custom protocol serialization and persistent socket connections.')
            )
          ),
          React.createElement('div', { className: 'section', ref: contactRef },
            React.createElement('h2', null, 'Contact'),
            React.createElement('p', null, 'Email: ', React.createElement('a', { href: 'mailto:8aafff@example.com' }, '8aafff@example.com')),
            React.createElement('p', null, 'GitHub: ', React.createElement('a', { href: 'https://github.com/8aafff', target: '_blank' }, 'github.com/8aafff'))
          )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  </script>
</body>
</html>
