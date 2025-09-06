export default function About() {
  const photoUrl = `${import.meta.env.BASE_URL}images/ALMGreyscale.jpg`;

    return (
    <section id="about" className="mb-5">
      <h2 className="mb-4 border-bottom pb-2 text-white">Om mig</h2>
      <div className="bg-dark rounded-3 p-4 shadow-sm border border-danger">
        <div className="row align-items-center g-4">
          <div className="col-md-8" data-aos="fade-right">
            <p className="mb-4">
              Jeg hedder <strong>Jeppe Lynge Hansen</strong> og er
              datamatikerstuderende på <strong>UCL Odense</strong>. Jeg har en
              særlig interesse for <strong>app-udvikling</strong>,{" "}
              <strong>AI</strong> og <strong>fullstack-udvikling</strong>, og
              jeg motiveres af at løse konkrete problemer med teknologi. Jeg går
              op i at skrive overskuelig og vedligeholdbar kode – med fokus på
              funktionalitet, performance og god brugeroplevelse. Jeg har solid
              erfaring med <strong>C#</strong> til backend og arbejder med{" "}
              <strong>Blazor</strong> og <strong>React</strong> i
              frontend-udvikling.
            </p>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* Fullstack-fokus */}
              <div className="col">
                <div className="d-flex about-feature text-white h-100 align-items-start">
                  <i className="bi bi-laptop-code fs-3 me-3 text-primary"></i>
                  <div>
                    <div className="fw-bold">Fullstack-fokus</div>
                    <small>
                      Stærk i C# til backend og erfaring med frontend i både
                      Blazor og React
                    </small>
                  </div>
                </div>
              </div>

              {/* AI & Machine Learning */}
              <div className="col">
                <div className="d-flex about-feature text-white h-100 align-items-start">
                  <i className="bi bi-brain fs-3 me-3 text-warning"></i>
                  <div>
                    <div className="fw-bold">AI &amp; Machine Learning</div>
                    <small>Projekter med scikit-learn og PyTorch</small>
                  </div>
                </div>
              </div>

              {/* Effektive løsninger */}
              <div className="col">
                <div className="d-flex about-feature text-white h-100 align-items-start">
                  <i className="bi bi-lightning-charge-fill fs-3 me-3 text-danger"></i>
                  <div>
                    <div className="fw-bold">Effektive løsninger</div>
                    <small>Optimering og automatisering i fokus</small>
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
