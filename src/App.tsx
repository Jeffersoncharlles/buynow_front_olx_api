import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Routers } from "./routers"
import { Container } from "./styles"

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routers />
      </Container>
      <Footer />
    </>
  )
}

export default App
