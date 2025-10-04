import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const collapseRef = useRef<HTMLDivElement>(null);
  const logoUrl = `${import.meta.env.BASE_URL}images/name-logo2.png`;
  const { language } = useLanguage();
  const text = uiText.header[language];

  const closeNavbar = () => {
    const el = collapseRef.current;
    if (!el || !el.classList.contains("show")) return;
    const toggler = document.querySelector<HTMLButtonElement>(
      '[data-bs-target="#navbarNav"]'
    );
    toggler?.click();
  };

  useEffect(() => {
    closeNavbar();
  }, [pathname, hash]);

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    if (!href.startsWith("#")) return; // external / normal links
    e.preventDefault();
    const id = href.slice(1);

    if (pathname === "/") {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
        closeNavbar();
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="bg-dark shadow-sm mb-4 border-bottom border-secondary">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img
            src={logoUrl}
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
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={onAnchorClick}>
                {text.navAbout}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={onAnchorClick}>
                {text.navProjects}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={onAnchorClick}>
                {text.navSkills}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={onAnchorClick}>
                {text.navContact}
              </a>
            </li>
            <li className="nav-item mt-3 mt-lg-0 ms-lg-3">
              <LanguageToggle className="w-100" onToggle={closeNavbar} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
