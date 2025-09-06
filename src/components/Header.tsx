import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Header() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const collapseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = collapseRef.current;
    if (!el) return;
    if (el.classList.contains("show")) {
      const toggler = document.querySelector<HTMLButtonElement>(
        '[data-bs-target="#navbarNav"]'
      );
      toggler?.click();
    }
  }, [pathname, hash]);

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    if (!href.startsWith("#")) return; // external / normal links
    e.preventDefault();
    const id = href.slice(1);

    if (pathname === "/") {
      // Already on home: smooth scroll
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
      }
    } else {
      // Not on home: navigate home and ask Home to scroll
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="bg-dark shadow-sm mb-4 border-bottom border-secondary">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img
            src="/images/name-logo2.png"
            alt="Jeppe Lynge Logo"
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={onAnchorClick}>
                Om mig
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={onAnchorClick}>
                Projekter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={onAnchorClick}>
                Kompetencer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={onAnchorClick}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
