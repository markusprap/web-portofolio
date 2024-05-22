import Navbar from '../components/Navbar';

export default function About() {
return (
    <>
        <Navbar />
        <section className="py-20">
            <div className="container mt-1 mx-auto px-6 lg:flex">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p className="mt-4 text-base">My name is Razan Smith, I'm a Freelance Full Stack Developer based in New York, USA, and I'm very passionate and dedicated to my work. With 9 years experience as a professional Full Stack Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <img src="/profil-pict.jpg" alt="About me" style={{ maxWidth: '100%', height: 'auto', width: '300px' }} />
                </div>
            </div>
            <div className="text-center mt-8">
                <a href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded">Contact Me</a>
            </div>
        </section>
    </>
);
}