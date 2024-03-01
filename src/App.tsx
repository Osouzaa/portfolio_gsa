import { About } from "./components/About"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import "./index.css"


function App() {

  return (
    <div className="App">
      <div className="app__content">
        <Header />
        <Home />
        <About />
      </div>

    </div>
  )
}

export default App
