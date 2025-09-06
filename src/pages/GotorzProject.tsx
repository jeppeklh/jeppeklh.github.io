import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const base = import.meta.env.BASE_URL;

export default function GotorzProject() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <main className="container py-5 text-white">
      {/* Decorative background shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Link to="/" className="btn btn-outline-light mb-4">
        &larr; Tilbage til forsiden
      </Link>

      <h1 className="mb-4">Rejsebooking Web App</h1>
      <p className="lead">
        Et projekt udviklet for virksomheden Gotorz – en platform der samler
        fly- og hoteldata i én samlet rejsepakke.
      </p>

      <video className="w-100 rounded mb-4" controls>
        <source src={`${base}videos/gotorz.mp4`} type="video/mp4" />
        Din browser understøtter ikke videoafspilleren.
      </video>

      <h5>Beskrivelse</h5>
      <p>
        Brugeren møder en enkel og overskuelig bookingoplevelse med login, chat
        og sikker betaling. Systemet er udviklet med Blazor og ASP.NET Core og
        er klar til skalerbar vækst og selvbetjening via Gotorz-platformen.
      </p>

      <h5>Teknologier</h5>
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
        <h2 className="mb-5 text-center">Funktioner i Webappen</h2>

        {/* Feature 1 */}
        <div
          className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
          data-aos="fade-up-left"
          data-aos-delay="300"
        >
          <div className="feature-card text-center" style={{ maxWidth: 800 }}>
            <img
              src={`${base}images/login-screenshot.jpg`}
              className="img-fluid rounded shadow mb-4"
              alt="Login skærm"
            />
            <h4 className="mb-3">Nem login og brugerhåndtering</h4>
            <p>
              Brugerne logger nemt ind via en intuitiv og sikker grænseflade.
              Systemet understøtter adgangskodebeskyttelse og session
              management.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div
          className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
          data-aos="fade-up-right"
          data-aos-delay="300"
        >
          <div className="feature-card text-center" style={{ maxWidth: 800 }}>
            <img
              src={`${base}images/search-screenshot.jpg`}
              className="img-fluid rounded shadow mb-4"
              alt="Søgefunktion"
            />
            <h4 className="mb-3">Avanceret søgning</h4>
            <p>
              Brugeren kan søge efter rejsemuligheder med realtidsdata, som
              henter både fly og hoteller i én samlet løsning.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div
          className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
          data-aos="fade-up-left"
          data-aos-delay="300"
        >
          <div className="feature-card text-center" style={{ maxWidth: 800 }}>
            <img
              src={`${base}images/chat-screenshot.jpg`}
              className="img-fluid rounded shadow mb-4"
              alt="Chatfunktion"
            />
            <h4 className="mb-3">Indbygget kundesupport via chat</h4>
            <p>
              Direkte kontakt til kundeservice via en indbygget chatfunktion,
              hvilket øger brugervenlighed og hurtig support.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div
          className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
          data-aos="fade-up-right"
          data-aos-delay="300"
        >
          <div className="feature-card text-center" style={{ maxWidth: 800 }}>
            <img
              src={`${base}images/admin-dashboard-screenshot.jpg`}
              className="img-fluid rounded shadow mb-4"
              alt="Admin Dashboard"
            />
            <h4 className="mb-3">Admin Dashboard med sikkerhedslog</h4>
            <p>
              Dashboardet viser statistik over mislykkede loginforsøg og låste
              brugere. IP-adresser logges, og systemet reagerer automatisk ved
              gentagne fejl.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
