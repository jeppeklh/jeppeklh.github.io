import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";

export default function Contact() {
  const { language } = useLanguage();
  const text = uiText.contact[language];

  return (
    <section id="contact" className="mb-5" data-aos="fade-up">
      <h2 className="mb-3 border-bottom pb-2 text-white">{text.heading}</h2>
      <div className="d-flex flex-column gap-2">
        <a href="mailto:jeppeklh@hotmail.com" className="contact-link">
          <i className="bi bi-envelope-fill me-2"></i> {text.email}
        </a>
        <a
          href="https://www.linkedin.com/in/jeppe-h-2723772b1/"
          target="_blank"
          rel="noopener"
          className="contact-link"
        >
          <i className="bi bi-linkedin me-2"></i> {text.linkedin}
        </a>
        <a
          href="https://github.com/jeppeklh"
          target="_blank"
          rel="noopener"
          className="contact-link"
        >
          <i className="bi bi-github me-2"></i> {text.github}
        </a>
      </div>
    </section>
  );
}
