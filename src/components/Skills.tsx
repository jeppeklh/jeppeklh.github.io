import { skillCategories } from "../data/skills";
import SkillBadge from "./SkillBadge";
import SkillFlip from "./SkillFlip";

export default function Skills() {
  return (
    <section id="skills" className="mb-5" data-aos="fade-up">
      <h2 className="mb-4 border-bottom pb-2 text-white">
        Tekniske Kompetencer
      </h2>

      {skillCategories.map((cat) => (
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
