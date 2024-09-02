

import About from './components/About/About';
import Layout from './components/Layout/layout';
import Slider from './components/Slider/Slider';
import TopBar from './components/Top/top';
import Services from './components/Service/Service';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <TopBar />
      <Layout />
      <Slider />
      <About />
      <Services />
      <Footer />
      
    </div>
  )
    
  
}

export default App
