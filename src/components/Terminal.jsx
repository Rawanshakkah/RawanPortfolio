import { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [history, setHistory] = useState([
        "Welcome to Rawan's Shell (v1.0.0)",
        "Type 'help' to see available commands."
    ]);

    const [input, setInput] = useState('');
    const [pendingAction, setPendingAction] = useState(null);
    const [position, setPosition] = useState({
        x: -1,
        y: -1
    });

    const terminalRef = useRef(null);
    const isDragging = useRef(false);
    const offset = useRef({
        x: 0,
        y: 0
    });

    const commands = {
        help:
            "Available: about, skills, projects, contact, resume, clear, cd [section], ls [skills|projects], whoami, kill, exit",

        about:
            "Rawan Shakkah: Computer Engineering graduate focused on Full-Stack Development.",

        skills:
            "C#, ASP.NET Core, React, Python, SQL, Networking, Git, Docker.",

        projects:
            "Featured: Network Monitoring & Traffic Testing System, RAG Chatbot, Titanic Machine Learning.",

        whoami:
            "Rawan Shakkah. Software Engineer. Full-Stack Developer. Always Learning.",

        contact:
            "Go to the contact section to get in touch.",

        resume:
            "Opening resume.pdf...",

        clear:
            "clear",

        kill:
            "kill",

        exit:
            "kill"
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });

            return true;
        }

        return false;
    };

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return;

        const rawInput = input.toLowerCase().trim();

        // Handle Interactive flows (y/n)
        if (
            pendingAction &&
            (rawInput === 'y' || rawInput === 'yes')
        ) {
            scrollToSection(pendingAction);

            setHistory((prev) => [
                ...prev,
                `> ${input}`,
                `Navigating to ${pendingAction}...`
            ]);

            setPendingAction(null);
            setInput('');

            return;
        }

        if (
            pendingAction &&
            (rawInput === 'n' || rawInput === 'no')
        ) {
            setHistory((prev) => [
                ...prev,
                `> ${input}`,
                'Action cancelled.'
            ]);

            setPendingAction(null);
            setInput('');

            return;
        }

        const parts = rawInput.split(' ');
        const cmd = parts[0];
        const arg = parts[1];

        let response =
            commands[cmd] ||
            `Command not found: ${cmd}. Type 'help' for assistance.`;

        if (cmd === 'clear') {
            setHistory([]);
        }

        else if (cmd === 'kill' || cmd === 'exit') {
            setIsOpen(false);
        }

        else if (cmd === 'ls') {
            if (arg === 'skills') {
                response =
                    "Skills: C#, ASP.NET Core, React, Python, SQL, Networking. \nGo to skills section? (y/n)";

                setPendingAction('skills');
            }

            else if (arg === 'projects') {
                response =
                    "Projects: Network Monitoring, RAG Chatbot, Titanic ML. \nGo to projects section? (y/n)";

                setPendingAction('projects');
            }

            else {
                response =
                    'Usage: ls [skills|projects]';
            }

            setHistory((prev) => [
                ...prev,
                `> ${input}`,
                response
            ]);
        }

        else if (cmd === 'cd') {
            const targetSection =
                arg === 'about' ? 'about-me' : arg;

            if (scrollToSection(targetSection)) {
                response = `Navigating to ${arg}...`;
            }

            else {
                response =
                    `Section not found: ${arg}. Try: home, about, projects, skills, contact`;
            }

            setHistory((prev) => [
                ...prev,
                `> ${input}`,
                response
            ]);
        }

        else {
            setHistory((prev) => [
                ...prev,
                `> ${input}`,
                response
            ]);
        }

        if (cmd === 'resume') {
            window.open('/resume.pdf', '_blank');
        }

        setInput('');
    };

    // Initialize position after component mounts
    useEffect(() => {
        if (position.x === -1) {
            setPosition({
                x: window.innerWidth - 350,
                y: window.innerHeight - 300
            });
        }
    }, [position]);

    const handleMouseDown = (e) => {
        if (e.target.closest('.terminal-header')) {
            isDragging.current = true;

            offset.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y
            };
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === '`') {
                setIsOpen((prev) => !prev);
            }
        };

        const handleMouseMove = (e) => {
            if (
                isDragging.current &&
                terminalRef.current
            ) {
                setPosition({
                    x:
                        e.clientX -
                        offset.current.x,

                    y:
                        e.clientY -
                        offset.current.y
                });
            }
        };

        const handleMouseUp = () => {
            isDragging.current = false;
        };

        window.addEventListener(
            'keydown',
            handleKeyDown
        );

        window.addEventListener(
            'mousemove',
            handleMouseMove
        );

        window.addEventListener(
            'mouseup',
            handleMouseUp
        );

        return () => {
            window.removeEventListener(
                'keydown',
                handleKeyDown
            );

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );

            window.removeEventListener(
                'mouseup',
                handleMouseUp
            );
        };
    }, []);

    if (!isOpen) {
        return (
            <div
                className="terminal-launcher"
                onClick={() => setIsOpen(true)}
            >
                <i className="bx bx-terminal"></i>
                <span>Shell</span>
            </div>
        );
    }

    return (
        <div
            ref={terminalRef}
            className="terminal-container fade-in"
            style={{
                left: position.x,
                top: position.y
            }}
            onMouseDown={handleMouseDown}
        >
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span
                        className="dot red"
                        onClick={() =>
                            setIsOpen(false)
                        }
                    ></span>

                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>

                <div className="terminal-title">
                    rawan@portfolio:~$
                </div>
            </div>

            <div
                className="terminal-body"
                onClick={() =>
                    document
                        .getElementById('term-input')
                        .focus()
                }
            >
                <div className="terminal-history">
                    {history.map((line, i) => (
                        <div
                            key={i}
                            className="terminal-line"
                        >
                            {line}
                        </div>
                    ))}
                </div>

                <div className="terminal-input-area">
                    <span className="prompt">
                        &gt;{' '}
                    </span>

                    <input
                        id="term-input"
                        type="text"
                        value={input}
                        onChange={(e) =>
                            setInput(e.target.value)
                        }
                        onKeyDown={handleCommand}
                        autoFocus
                        spellCheck="false"
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;