import Terminal from './components/Terminal';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
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
                    <Projects />
                    <Skills />
                </main>

                <Footer />
            </div>
        </SmoothScrollProvider>
    );
}

export default App;