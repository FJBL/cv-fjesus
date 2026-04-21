export interface MenuItem  { label: string; path: string; icon?: string; }
export interface Metric    { value: string; label: string; }
export interface Stat      { value: string; label: string; }
export interface Block     { title: string; text: string; }
export interface Highlight { label: string; text: string; }

export interface Job {
  icon: string;
  company: string;
  period: string;
  jobTitle: string;
  summary: string;
  expanded: boolean;
  responsibilitiesLabel: string;
  bullets: string[];
  highlight?: Highlight;
  techLabel: string;
  techs: string[];
}

export interface SkillCategory {
  icon: string;
  title: string;
  description: string;
  ariaLabel: string;
  soft?: boolean;
  pills?: string[];
  points?: string[];
}

export interface PerfilData {
  kicker: string;
  name: string;
  nameAccent: string;
  intro: string;
  tag: string;
  lead: string;
  summary: string;
  metrics: Metric[];
  email: string;
  strengths: string[];
  availability: string;
}

export interface ExperienciaData {
  kicker: string;
  title: string;
  intro: string;
  jobs: Job[];
}

export interface HabilidadesData {
  kicker: string;
  title: string;
  titleAccent: string;
  intro: string;
  stats: Stat[];
  categories: SkillCategory[];
}

export interface ContactoData {
  kicker: string;
  title: string;
  intro: string;
  channelLabel: string;
  email: string;
  celular?: string;
  emailCopy: string;
  blocks: Block[];
}

export interface CvData {
  perfil: PerfilData;
  experiencia: ExperienciaData;
  habilidades: HabilidadesData;
  contacto: ContactoData;
}
