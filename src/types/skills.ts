export type SkillItem = {
  name: string;
  iconUrl: string;
  borderClass?: string;
  invertOnDark?: boolean;
  whiteBg?: boolean;
  flip?: boolean;
  backText?: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
  topMargin?: boolean;
};
