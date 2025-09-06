import { useEffect, useState } from "react";

const roles = [
  "Datamatikerstuderende",
  "Fullstack Udvikler",
  "AI & Machine Learning Entusiast",
  "Brugercentreret Designer",
];

const TYPE_DELAY = 100; // typing speed
const DELETE_DELAY = 60; // deleting speed
const HOLD_FULL = 1000; // pause when fully typed
const HOLD_EMPTY = 300; // pause before next word

export default function Typewriter() {
  const [index, setIndex] = useState(0); // which role
  const [charIndex, setCharIndex] = useState(0); // how many chars shown
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index];
    let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;

    // At bounds, switch mode and set appropriate pause
    if (!isDeleting && charIndex === full.length) {
      delay = HOLD_FULL; // hold when fully typed
      // next tick we start deleting (do not change charIndex here)
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      delay = HOLD_EMPTY; // small pause when cleared
      const t = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, delay);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setCharIndex((c) => c + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, index]);

  const text = roles[index].slice(0, charIndex);

  return (
    <div className="text-center py-3 typewriter-wrapper">
      <p
        id="typewriter"
        className="mb-0 fs-5"
        style={{ color: "#ff6b6b", minHeight: "1.5em" }}
      >
        {text}
      </p>
    </div>
  );
}
