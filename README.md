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
    }

    body {
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      scroll-behavior: smooth;
    }

    h1, h2, h3, p {
      color: var(--text-color);
      text-shadow: 0 0 10px var(--glow-color);
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
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 0 20px var(--glow-color);
      margin: 1rem;
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .skill {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #111;
      border: 2px solid var(--glow-color);
      border-radius: 1rem;
      box-shadow: 0 0 15px var(--glow-color);
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
    }

    .nav-button {
      background: none;
      color: var(--text-color);
      border: 2px solid var(--glow-color);
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px var(--glow-color);
      text-shadow: 0 0 5px var(--glow-color);
    }

    a {
      color: #8AAFFF;
      text-decoration: none;
      text-shadow: 0 0 5px #8AAFFF;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <script type="text/javascript">
    const { useRef } = React;

    function App() {
      const aboutRef = React.useRef(null);
      const skillsRef = React.useRef(null);
      const projectsRef = React.useRef(null);
      const contactRef = React.useRef(null);

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
            React.createElement('h1', null, '👋 Hello, I\'m 8AAFFF'),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('p', null, 'I build AI systems, game UIs, and low-level networked apps. My portfolio lives at the edge of transformers, Unity, and C++. Let\'s connect!')
            )
          ),
          React.createElement('div', { className: 'section', ref: skillsRef },
            React.createElement('h2', null, '💡 Skills'),
            React.createElement('div', { className: 'skills-grid' },
              ['React', 'Unity', 'C++', 'Python', 'Transformers', 'ASIO', 'LoRA', 'Quantization'].map(skill =>
                React.createElement('div', { className: 'skill', key: skill }, skill)
              )
            )
          ),
          React.createElement('div', { className: 'section', ref: projectsRef },
            React.createElement('h2', null, '🚀 Projects'),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('h3', null, 'Medical AI Decision Engine'),
              React.createElement('p', null, 'Built with FLAN-T5 and optimized for Jetson Nano with quantization + LoRA.')
            ),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('h3', null, 'Unity Trivia Game'),
              React.createElement('p', null, 'Networked quiz game with custom UI Toolkit menus and admin panel.')
            ),
            React.createElement('div', { className: 'glow-box' },
              React.createElement('h3', null, 'C++ ASIO Server'),
              React.createElement('p', null, 'Low-latency backend with structured packet protocols and socket persistence.')
            )
          ),
          React.createElement('div', { className: 'section', ref: contactRef },
            React.createElement('h2', null, '📬 Contact Me'),
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
