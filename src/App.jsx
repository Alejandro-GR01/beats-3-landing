import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Specs from "./components/Specs"
import Sponsors from "./components/Sponsors"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <Sponsors />
      <Specs />
    </>
  )
}

export default App