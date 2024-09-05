

import About from './components/About/About';
import Layout from './components/Layout/layout';
import Slider from './components/Slider/Slider';
import TopBar from './components/Top/top';
import OrganizationPage from './components/Organisation/Organisation';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <TopBar />
      <Layout />
      <Slider />
      <About />
      <OrganizationPage />
      <Footer />
      
    </div>
  )
    
  
}

export default App
