import './App.css';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Blog from './components/Blog';
import ClientSays from './components/ClientSays';
import Faq from './components/Faq';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import JoinUs from './components/JoinUs';
import Navbar from './components/Navbar';
import Security from './components/Security';
import WhyAreYouHere from './components/WhyAreYouHere';

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Banner/>
      <Hero/>
      <Security/>
      <Banner2/>
      <WhyAreYouHere/>
      <Featured/>
      <ClientSays/>
      <Faq/>
      <Blog/>
      <Banner3/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
