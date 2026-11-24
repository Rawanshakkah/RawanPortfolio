
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({
        type: '',
        text: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setStatus({ type: '', text: '' });

        try {
            await emailjs.send(
                'service_0j9hq8k',
                'template_jezmra9',
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    publicKey: '1FOHlLcerR92uh1Xd',
                }
            );

            setStatus({
                type: 'success',
                text: 'Your message has been sent successfully!',
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

        } catch (error) {
            console.error('EmailJS error:', error);

            setStatus({
                type: 'error',
                text: 'Something went wrong. Please try again.',
            });

        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-heading">
                    <span className="section-subtitle">GET IN TOUCH</span>

                    <h2 className="section-title">
                        Contact <span className="gradient-text">Me</span>
                    </h2>

                    <p>
                        Have a project or an opportunity in mind?
                        I'd love to hear from you!
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>

                        <p className="contact-info-text">
                            I'm always open to discussing new projects,
                            creative ideas, and opportunities.
                            Feel free to reach out!
                        </p>

                        <div className="contact-info-items">
                            <a
                                href="mailto:rawanshakkah@gmail.com"
                                className="contact-info-item"
                            >
                                <span className="contact-icon">
                                    <i className="bx bx-envelope"></i>
                                </span>

                                <span>
                                    <strong>Email</strong>
                                    <small>rawanshakkah@gmail.com</small>
                                </span>
                            </a>

                            <a
                                href="tel:+962772331013"
                                className="contact-info-item"
                            >
                                <span className="contact-icon">
                                    <i className="bx bx-phone"></i>
                                </span>

                                <span>
                                    <strong>Phone</strong>
                                    <small>+962 772 331 013</small>
                                </span>
                            </a>

                            <div className="contact-info-item">
                                <span className="contact-icon">
                                    <i className="bx bx-map"></i>
                                </span>

                                <span>
                                    <strong>Location</strong>
                                    <small>Amman, Jordan</small>
                                </span>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a
                                href="https://github.com/Rawanshakkah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="bx bxl-github"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rawan-shakkah-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>Send Me a Message</h3>

                        <div className="form-group">
                            <label htmlFor="contact-name">Your Name</label>

                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email">Your Email</label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-subject">Subject</label>

                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {status.text && (
                            <p
                                className={`contact-form-status ${status.type}`}
                                role="status"
                            >
                                {status.text}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send Message'}

                            <i className="bx bx-send"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
