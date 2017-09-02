import React from 'react'

import 'normalize.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'

import './App.css'

const ForkMeOnGithub = () => (
  <a
    className="github-fork-ribbon"
    href="https://github.com/josmardias/snake"
    title="Fork me on GitHub"
  >
    Fork me on GitHub
  </a>
)

const App = () => (
  <div id="app">
    <ForkMeOnGithub />
  </div>
)

export default App
