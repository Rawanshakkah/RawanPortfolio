
import Terminal from './components/Terminal';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TerminalAnnouncement from './components/TerminalAnnouncement';
import Footer from './components/Footer';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import RollingSquare from './components/RollingSquare';

import './styles/index.css';

function App() {
    return (
        <SmoothScrollProvider>
            <div className="app">
                <RollingSquare />
                <Terminal />
                <TerminalAnnouncement />
                <Header />

                <main>
                    <Hero />
                    <AboutMe />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>

                <Footer />
            </div>
        </SmoothScrollProvider>
    );
}

export default App;
