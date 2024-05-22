import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <Image src="/profil-pict.jpg" width={200} height={200} alt="Markus Prap" className="rounded-full" />
                <h1 className="text-5xl font-bold mt-10 mb-4">Markus Prap Kurniawan</h1>
                <p className="text-xl mb-8">A Creative Freelancer & Full Stack Developer</p>
                <Link href="#contact">
                    <span className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Contact Me</span>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
