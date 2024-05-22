import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from './About';

export default function Home() {    
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-blue-500"></div>
        <svg className="absolute mt-5 bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#black" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,74.7C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <About /> 
    </div>
  );
}