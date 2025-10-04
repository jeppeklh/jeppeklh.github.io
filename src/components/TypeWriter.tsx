import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";

const TYPE_DELAY = 100;
const DELETE_DELAY = 60;
const HOLD_FULL = 1000;
const HOLD_EMPTY = 300;

export default function Typewriter() {
  const { language } = useLanguage();
  const roles = useMemo(() => uiText.typewriterRoles[language], [language]);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    if (!roles.length) return;
    const full = roles[index % roles.length];
    let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;

    if (!isDeleting && charIndex === full.length) {
      const timeout = setTimeout(() => setIsDeleting(true), HOLD_FULL);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, HOLD_EMPTY);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCharIndex((c) => c + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, roles]);

  const text = roles.length ? roles[index % roles.length].slice(0, charIndex) : "";

  return (
    <div className="text-center py-3 typewriter-wrapper">
      <p
        id="typewriter"
        className="mb-0 fs-5"
        style={{ color: "var(--bs-danger)", minHeight: "1.5em" }}
      >
        {text}
      </p>
    </div>
  );
}
