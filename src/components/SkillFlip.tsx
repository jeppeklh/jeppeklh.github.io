import { useEffect, useRef } from "react";
import type { SkillItem } from "../types/skills";

export default function SkillFlip({
  name,
  iconUrl,
  borderClass,
  invertOnDark,
  whiteBg,
  backText,
}: SkillItem) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = () => el.classList.toggle("flipped");
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={ref} className="tech-flip">
      <div className={`tech-badge front ${borderClass ?? ""}`}>
        <img
          src={iconUrl}
          alt={name}
          className={`${invertOnDark ? "invert-on-dark" : ""} ${
            whiteBg ? "white-bg" : ""
          }`.trim()}
        />
        <span>{name}</span>
      </div>
      <div className={`tech-badge back ${borderClass ?? ""}`}>
        <p className="m-0 small">{backText}</p>
      </div>
    </div>
  );
}
