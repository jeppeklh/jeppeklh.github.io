export default function Contact() {
  return (
    <section id="contact" className="mb-5" data-aos="fade-up">
      <h2 className="mb-3 border-bottom pb-2 text-white">Kontakt</h2>
      <div className="d-flex flex-column gap-2">
        <a href="mailto:jeppeklh@hotmail.com" className="contact-link">
          <i className="bi bi-envelope-fill me-2"></i> Mail
        </a>
        <a
          href="https://www.linkedin.com/in/jeppeklh"
          target="_blank"
          rel="noopener"
          className="contact-link"
        >
          <i className="bi bi-linkedin me-2"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}
