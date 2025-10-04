import { useMemo } from "react";
import { getSkillCategories } from "../data/skills";
import SkillBadge from "./SkillBadge";
import SkillFlip from "./SkillFlip";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";

export default function Skills() {
  const { language } = useLanguage();
  const categories = useMemo(() => getSkillCategories(language), [language]);
  const text = uiText.skillsSection[language];

  return (
    <section id="skills" className="mb-5" data-aos="fade-up">
      <h2 className="mb-4 border-bottom pb-2 text-white">{text.heading}</h2>

      {categories.map((cat) => (
        <div key={cat.title}>
          <h5
            className={`text-secondary ${cat.topMargin ? "mt-5" : "mt-4"} mb-3`}
          >
            {cat.title}
          </h5>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {cat.items.map((item) => (
              <div key={`${cat.title}-${item.name}`} className="col">
                {item.flip ? <SkillFlip {...item} /> : <SkillBadge {...item} />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
