import Case from "./components/Case"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Shop from "./components/Shop"
import Specs from "./components/Specs"
import Sponsors from "./components/Sponsors"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <Sponsors />
      <Specs />
      <Case />
      <CTA />
      <Shop />
      <Footer />
    </>
  )
}

export default App