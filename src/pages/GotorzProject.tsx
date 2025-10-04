import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";

const base = import.meta.env.BASE_URL;

export default function GotorzProject() {
  const { language } = useLanguage();
  const text = uiText.gotorz[language];

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <main className="container py-5 text-white">
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Link to="/" className="btn btn-outline-light mb-4">
        {text.backLink}
      </Link>

      <h1 className="mb-4">{text.title}</h1>
      <p className="lead">{text.lead}</p>

      <video className="w-100 rounded mb-4" controls>
        <source src={`${base}videos/gotorz.mp4`} type="video/mp4" />
        {text.videoFallback}
      </video>

      <h5>{text.descriptionHeading}</h5>
      <p>{text.descriptionBody}</p>

      <h5>{text.technologiesHeading}</h5>
      <p>
        <img
          src="https://img.shields.io/badge/Blazor-512BD4?logo=dotnet&logoColor=white"
          alt="Blazor"
        />
        <img
          src="https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white"
          alt="C#"
        />
        <img
          src="https://img.shields.io/badge/SQL-%23007ACC?logo=microsoft-sql-server&logoColor=white"
          alt="SQL"
        />
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white"
          alt="HTML"
        />
        <img
          src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white"
          alt="CSS"
        />
      </p>

      <section className="mt-5">
        <h2 className="mb-5 text-center">{text.featuresHeading}</h2>

        {text.features.map((feature) => (
          <div
            key={feature.title}
            className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
            data-aos={feature.aos}
            data-aos-delay="300"
          >
            <div className="feature-card text-center" style={{ maxWidth: 800 }}>
              <img
                src={`${base}images/${feature.image}`}
                className="img-fluid rounded shadow mb-4"
                alt={feature.alt}
              />
              <h4 className="mb-3">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
