import type { SkillItem } from "../types/skills";

export default function SkillBadge({
  name,
  iconUrl,
  borderClass,
  invertOnDark,
  whiteBg,
}: SkillItem) {
  return (
    <div className={`tech-badge ${borderClass ?? ""}`}>
      <img
        src={iconUrl}
        alt={name}
        className={`${invertOnDark ? "invert-on-dark" : ""} ${
          whiteBg ? "white-bg" : ""
        }`.trim()}
      />
      <span>{name}</span>
    </div>
  );
}
