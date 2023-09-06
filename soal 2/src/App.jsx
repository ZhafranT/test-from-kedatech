import { About, Contact, Hero, Navbar, Pricing } from "./components"
import styles from "./style"

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Pricing />
          <Contact />
        </div>
      </div>


    </div>
  )
}

export default App
