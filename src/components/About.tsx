import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";

export default function About() {
  const photoUrl = `${import.meta.env.BASE_URL}images/ALMGreyscale.jpg`;
  const { language } = useLanguage();
  const text = uiText.about[language];

  return (
    <section id="about" className="mb-5">
      <h2 className="mb-4 border-bottom pb-2 text-white">{text.heading}</h2>
      <div className="bg-dark rounded-3 p-4 shadow-sm border border-danger">
        <div className="row align-items-center g-4">
          <div className="col-md-8" data-aos="fade-right">
            <p className="mb-4">
              {text.intro.beforeName}
              <strong>{text.intro.name}</strong>
              {text.intro.afterName}
              <strong>{text.intro.school}</strong>
              {text.intro.afterSchool}
              {text.intro.paragraphs.map((paragraph, idx) => (
                <span key={idx}>
                  <br />
                  <br />
                  {paragraph}
                </span>
              ))}
            </p>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="d-flex about-feature text-white h-100 align-items-start">
                  <i className="bi bi-laptop-code fs-3 me-3 text-primary"></i>
                  <div>
                    <div className="fw-bold">{text.features.fullstack.title}</div>
                    <small>{text.features.fullstack.description}</small>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="d-flex about-feature text-white h-100 align-items-start">
                  <i className="bi bi-brain fs-3 me-3 text-warning"></i>
                  <div>
                    <div className="fw-bold">{text.features.ai.title}</div>
                    <small>{text.features.ai.description}</small>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="d-flex about-feature text-white h-100 align-items-start">
                  <i className="bi bi-lightning-charge-fill fs-3 me-3 text-danger"></i>
                  <div>
                    <div className="fw-bold">{text.features.efficiency.title}</div>
                    <small>{text.features.efficiency.description}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center" data-aos="fade-left">
            <div className="about-photo">
              <img src={photoUrl} alt="Jeppe Lynge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
