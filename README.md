<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Portfolio</title>
  <style>
    body {
      margin: 0;
      background-color: #000000;
      color: white;
      font-family: Arial, sans-serif;
    }
    h1, h2 {
      color: #00ffff;
    }
    a {
      color: #ff69b4;
      text-decoration: none;
    }
    .container {
      padding: 2rem;
      max-width: 800px;
      margin: auto;
    }
    .card {
      background-color: #111111;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px #00ffff40;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <!-- React + ReactDOM from CDN -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <script type="text/javascript">
    const { useState } = React;

    function App() {
      return (
        React.createElement('div', { className: 'container' },
          React.createElement('h1', null, '👋 Hi, I\'m 8AAFFF'),
          React.createElement('p', null, 'Welcome to my GitHub Pages portfolio!'),
          React.createElement('div', { className: 'card' },
            React.createElement('h2', null, '🧠 AI + Transformers'),
            React.createElement('p', null, 'I fine-tuned FLAN-T5 and used LoRA + quantization for medical decision-making tasks.')
          ),
          React.createElement('div', { className: 'card' },
            React.createElement('h2', null, '🎮 Unity + UI Toolkit'),
            React.createElement('p', null, 'I built a client-server trivia game with UI menus using UXML and persistent TCP connections.')
          ),
          React.createElement('div', { className: 'card' },
            React.createElement('h2', null, '⚙️ C++ Networking'),
            React.createElement('p', null, 'I implemented low-level networking with ASIO and custom protocol serialization.')
          ),
          React.createElement('p', null,
            'More coming soon! Check out my GitHub: ',
            React.createElement('a', { href: 'https://github.com/sussy-baka', target: '_blank' }, 'github.com/sussy-baka')
          )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  </script>
</body>
</html>
