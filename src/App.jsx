import Navbar from './composants/Navbar'
import Footers from './composants/Footers'
import bg from './assets/arriereplan.jpeg'
import './App.css'

export default function App() {
  return (
      <section style={{
          backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
             minHeight: "100vh"
            }}>
      <Navbar />
      <div style={{color:"white", padding:"20px"}}>
        MIDDLE TEST 🚀
      </div>
      <Footers />
    </section>
    
  )
}