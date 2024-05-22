import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
    <nav className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${scroll ? 'bg-gray-900' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold text-white">/markusprap</div>
            <ul className="flex space-x-6 text-white">
                    <li><Link href="/" passHref><span className="transform transition-all duration-200 hover:scale-110">Home</span></Link></li>
                    <li><Link href="/about" passHref><span className="transform transition-all duration-200 hover:scale-110" style={{color: 'tomato'}}>About</span></Link></li>
                    <li><Link href="/services" passHref><span className="transform transition-all duration-200 hover:scale-110">Services</span></Link></li>
                    <li><Link href="/portfolio" passHref><span className="transform transition-all duration-200 hover:scale-110">Portfolio</span></Link></li>
                    <li><Link href="/blog" passHref><span className="transform transition-all duration-200 hover:scale-110">Blog</span></Link></li>
                    <li><Link href="/contact" passHref><span className="transform transition-all duration-200 hover:scale-110">Contact</span></Link></li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;
