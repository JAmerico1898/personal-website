"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── Intersection Observer hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Section wrapper ─── */
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
    >
      {children}
    </section>
  );
}

/* ─── Translations ─── */
const t = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Publications", href: "#publications" },
      { label: "Awards", href: "#awards" },
      { label: "Projects", href: "#projects" },
      { label: "CV", href: "#cv" },
      { label: "Contact", href: "#contact" },
    ],
    heroSubtitle: "Finance Researcher & Central Bank Analyst",
    heroDesc:
      "Specialist in financial intermediation, credit markets, and financial stability. Analyst at the Central Bank of Brazil and professor at leading Brazilian institutions.",
    viewResearch: "View Research",
    getInTouch: "Get in Touch",
    aboutLabel: "About",
    aboutTitle: "Background",
    aboutP1: (
      <>
        José Américo Pereira Antunes is an analyst at{" "}
        <strong className="text-text-primary font-medium">
          Banco Central do Brasil
        </strong>
        , where he leads a banking supervision team focused on credit and
        financial intermediation. With over two decades of experience bridging
        academic research and regulatory practice, his work has shaped how
        Brazil monitors systemic risk.
      </>
    ),
    aboutP2: (
      <>
        As a professor, he teaches <em>Financial Institution Management</em>{" "}
        and <em>Financial Derivatives Management</em> at{" "}
        <strong className="text-text-primary font-medium">
          Coppead/UFRJ, FGV,
        </strong>{" "}
        and{" "}
        <strong className="text-text-primary font-medium">
          Universidade Cândido Mendes
        </strong>
        , where he also supervises master&apos;s dissertations in Economics and
        Business Management.
      </>
    ),
    aboutP3: (
      <>
        His research — published in journals such as{" "}
        <em>Financial Innovation</em>, <em>Economic Modelling</em>, and{" "}
        <em>Empirical Economics</em> — explores the intersections of financial
        intermediation, monetary policy, and credit market stability. He is also
        a reviewer for international academic journals and has received awards
        from CFA Society and Febraban.
      </>
    ),
    aboutP4:
      "Beyond finance, José holds a specialized credential in sports analytics and has built data-driven applications for football scouting and club financial analysis.",
    pubLabel: "Research",
    pubTitle: "Selected Publications",
    awardsLabel: "Recognition",
    awardsTitle: "Awards",
    projLabel: "Applications",
    projTitle: "Projects",
    cvLabel: "Curriculum",
    cvTitle: "Education",
    cvLink: "View Full CV on Lattes",
    contactLabel: "Contact",
    contactTitle: "Let\u2019s Connect",
    contactDesc:
      "Interested in collaboration, research opportunities, or academic inquiries? Feel free to reach out.",
    footerRole: "Finance Researcher & Central Bank Analyst",
    awards: [
      { year: 2020, title: "CFA Society Innovation in Finance Prize", place: "3rd place" },
      { year: 2017, title: "VIII Febraban Banking Economics Award", place: "3rd place" },
      { year: 2015, title: "VI Febraban Banking Economics Award", place: "2nd place" },
    ],
    projects: [
      {
        title: "Public Scouting Platform",
        description:
          "A data-driven scouting tool for football talent analysis using public data and advanced metrics.",
        url: "https://softplayerz-soft-playerz-vx07dg.streamlit.app/",
        tech: "Streamlit · Python · Data Science",
      },
      {
        title: "Financial Almanac — Série A (2024)",
        description:
          "Comprehensive financial analysis of Brazilian Serie A football clubs, including revenue, debt, and performance metrics.",
        url: "https://footballclubsfinancials.streamlit.app/",
        tech: "Streamlit · Python · Finance",
      },
      {
        title: "Public Data Laboratory (2026)",
        description:
          "An open platform for exploring and analyzing public datasets with interactive visualizations.",
        url: "https://lab-dados-abertos-bcb.streamlit.app/",
        tech: "Streamlit · Python · Open Data",
      },
    ],
    education: [
      { year: "2022", degree: "Post-Doc in Finance", institution: "FGV" },
      { year: "2017", degree: "Ph.D. in Accounting", institution: "UFRJ" },
      { year: "2005", degree: "M.Sc. in Accounting", institution: "UERJ" },
      { year: "2009", degree: "MBA — International Accounting Standards", institution: "USP / FIPECAFI" },
      { year: "2008", degree: "MBA — Economic & Financial Engineering", institution: "UFF" },
      { year: "1999", degree: "MBA — Risk Management", institution: "FGV" },
      { year: "2001", degree: "B.Sc. in Accounting", institution: "UFRJ" },
      { year: "1993", degree: "B.Eng. in Mechanical Engineering", institution: "UFRJ" },
    ],
  },
  pt: {
    nav: [
      { label: "Sobre", href: "#about" },
      { label: "Publicações", href: "#publications" },
      { label: "Premiações", href: "#awards" },
      { label: "Projetos", href: "#projects" },
      { label: "CV", href: "#cv" },
      { label: "Contato", href: "#contact" },
    ],
    heroSubtitle: "Pesquisador em Finanças & Analista do Banco Central",
    heroDesc:
      "Especialista em intermediação financeira, mercados de crédito e estabilidade financeira. Analista do Banco Central do Brasil e professor em instituições brasileiras de referência.",
    viewResearch: "Ver Pesquisa",
    getInTouch: "Entre em Contato",
    aboutLabel: "Sobre",
    aboutTitle: "Trajetória",
    aboutP1: (
      <>
        José Américo Pereira Antunes é analista do{" "}
        <strong className="text-text-primary font-medium">
          Banco Central do Brasil
        </strong>
        , onde lidera uma equipe de supervisão bancária focada em crédito e
        intermediação financeira. Com mais de duas décadas de experiência
        unindo pesquisa acadêmica e prática regulatória, seu trabalho tem
        contribuído para o monitoramento do risco sistêmico no Brasil.
      </>
    ),
    aboutP2: (
      <>
        Como professor, leciona <em>Gestão de Instituições Financeiras</em> e{" "}
        <em>Gestão de Derivativos Financeiros</em> na{" "}
        <strong className="text-text-primary font-medium">
          Coppead/UFRJ, FGV
        </strong>{" "}
        e{" "}
        <strong className="text-text-primary font-medium">
          Universidade Cândido Mendes
        </strong>
        , onde também orienta dissertações de mestrado em Economia e Gestão de
        Negócios.
      </>
    ),
    aboutP3: (
      <>
        Sua pesquisa — publicada em periódicos como{" "}
        <em>Financial Innovation</em>, <em>Economic Modelling</em> e{" "}
        <em>Empirical Economics</em> — explora as interseções entre
        intermediação financeira, política monetária e estabilidade do mercado
        de crédito. É também revisor de periódicos acadêmicos internacionais e
        recebeu prêmios da CFA Society e da Febraban.
      </>
    ),
    aboutP4:
      "Além de finanças, José possui credencial especializada em análise esportiva e desenvolveu aplicações orientadas a dados para scouting de futebol e análise financeira de clubes.",
    pubLabel: "Pesquisa",
    pubTitle: "Publicações Selecionadas",
    awardsLabel: "Reconhecimento",
    awardsTitle: "Premiações",
    projLabel: "Aplicativos",
    projTitle: "Projetos",
    cvLabel: "Currículo",
    cvTitle: "Formação",
    cvLink: "Ver CV completo no Lattes",
    contactLabel: "Contato",
    contactTitle: "Vamos Conversar",
    contactDesc:
      "Interessado em colaboração, oportunidades de pesquisa ou consultas acadêmicas? Fique à vontade para entrar em contato.",
    footerRole: "Pesquisador em Finanças & Analista do Banco Central",
    awards: [
      { year: 2020, title: "Prêmio CFA Society Inovação em Finanças", place: "3º lugar" },
      { year: 2017, title: "VIII Prêmio Febraban de Economia Bancária", place: "3º lugar" },
      { year: 2015, title: "VI Prêmio Febraban de Economia Bancária", place: "2º lugar" },
    ],
    projects: [
      {
        title: "Plataforma Pública de Scouting",
        description:
          "Ferramenta de scouting baseada em dados para análise de talentos no futebol usando dados públicos e métricas avançadas.",
        url: "https://softplayerz-soft-playerz-vx07dg.streamlit.app/",
        tech: "Streamlit · Python · Data Science",
      },
      {
        title: "Almanaque Financeiro — Série A (2024)",
        description:
          "Análise financeira abrangente dos clubes da Série A do futebol brasileiro, incluindo receita, dívida e métricas de desempenho.",
        url: "https://footballclubsfinancials.streamlit.app/",
        tech: "Streamlit · Python · Finanças",
      },
      {
        title: "Laboratório de Dados Públicos (2026)",
        description:
          "Plataforma aberta para explorar e analisar conjuntos de dados públicos com visualizações interativas.",
        url: "https://laboratorio-dados-abertos-bcb.vercel.app/",
        tech: "Next.js · React · Dados Abertos",
      },
    ],
    education: [
      { year: "2022", degree: "Pós-Doutorado em Finanças", institution: "FGV" },
      { year: "2017", degree: "Doutorado em Contabilidade", institution: "UFRJ" },
      { year: "2005", degree: "Mestrado em Contabilidade", institution: "UERJ" },
      { year: "2009", degree: "MBA — Normas Internacionais de Contabilidade", institution: "USP / FIPECAFI" },
      { year: "2008", degree: "MBA — Engenharia Econômica e Financeira", institution: "UFF" },
      { year: "1999", degree: "MBA — Gerenciamento de Riscos", institution: "FGV" },
      { year: "2001", degree: "Bacharelado em Contabilidade", institution: "UFRJ" },
      { year: "1993", degree: "Engenharia Mecânica", institution: "UFRJ" },
    ],
  },
};

/* Publications are the same in both languages (academic titles stay in English) */
const PUBLICATIONS = [
  {
    title: "What do we know about the relationship between banks risk measures and social-environmental sustainability transparency?",
    authors: "Antunes, J. A. P.; De Moraes, C. O.; Grapiúna, L. S.",
    journal: "Borsa Istanbul Review",
    volume: "24, 1",
    year: 2023,
  },
  {
    title: "To supervise or to self-supervise: A machine-learning based comparison on credit supervision",
    authors: "Antunes, J. A. P.",
    journal: "Financial Innovation",
    volume: "7, 26",
    year: 2021,
  },
  {
    title: "What is the effect of banking concentration and competition on Financial Development? An international assessment",
    authors: "Antunes, J. A. P.; Moraes, C. O.; Coutinho, M. S.",
    journal: "Journal of Economic Studies",
    volume: "48(6), 1162–1176",
    year: 2020,
  },
  {
    title: "Financial Intermediation analysis from financial flows",
    authors: "Antunes, J. A. P.; De Moraes, C. O.; Rodrigues, A.",
    journal: "Journal of Economic Studies",
    volume: "46, 727–747",
    year: 2019,
  },
  {
    title: "Effects of Monetary Policy and Credibility on Financial Intermediation: Evidence from the Brazilian banking sector",
    authors: "Antunes, J. A. P.; Montes, G. C.; Araújo, A. F.",
    journal: "Empirical Economics",
    volume: "1, 1",
    year: 2019,
  },
  {
    title: "How Financial Intermediation impacts on Financial Stability?",
    authors: "Antunes, J. A. P.; De Moraes, C. O.; Rodrigues",
    journal: "Applied Economic Letters",
    volume: "25, 1135–1139",
    year: 2017,
  },
  {
    title: "How does capital regulation react to monetary policy? New evidence on the risk-taking channel",
    authors: "Antunes, J. A. P.; De Moraes, C. O.; Montes, G. C.",
    journal: "Economic Modelling",
    volume: "56, 177–186",
    year: 2016,
  },
];

/* ────────────────────────────── PAGE ────────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "pt">("en");

  const l = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-navy"
          >
            José Américo Antunes
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {l.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium tracking-wide text-text-secondary hover:text-navy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-gold after:transition-all after:duration-300"
              >
                {n.label}
              </a>
            ))}
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="ml-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-light-border text-text-secondary hover:text-navy hover:border-navy/30 transition-colors rounded-sm cursor-pointer"
              aria-label="Toggle language"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-light-border text-text-secondary hover:text-navy transition-colors rounded-sm cursor-pointer"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[5px] cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] bg-navy transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-navy transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-navy transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-cream/95 backdrop-blur-md border-t border-light-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {l.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-navy"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-navy/5 to-transparent rounded-full -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-gold/5 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-4xl mx-auto px-6 pt-16 text-center relative z-10">
          <div className="mb-8 animate-fade-up opacity-0 delay-1">
            <Image
              src="/photo.png"
              alt="José Américo Antunes"
              width={160}
              height={160}
              className="mx-auto rounded-full border-4 border-white shadow-lg object-cover w-36 h-36 md:w-40 md:h-40"
              priority
            />
          </div>
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up opacity-0 delay-1">
            {l.heroSubtitle}
          </p>
          <h1 className="font-heading text-6xl md:text-8xl font-light text-navy leading-[1.1] mb-8 animate-fade-up opacity-0 delay-2">
            José Américo
            <br />
            Antunes
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up opacity-0 delay-3">
            {l.heroDesc}
          </p>
          <div className="flex gap-4 justify-center animate-fade-up opacity-0 delay-4">
            <a
              href="#publications"
              className="px-8 py-3 bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-light transition-colors rounded-sm"
            >
              {l.viewResearch}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-navy text-navy text-sm font-medium tracking-wide hover:bg-navy hover:text-white transition-colors rounded-sm"
            >
              {l.getInTouch}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-6">
          <div className="w-[1px] h-12 bg-gradient-to-b from-navy/40 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-3">
                {l.aboutLabel}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-navy font-light leading-tight">
                {l.aboutTitle}
              </h2>
            </div>
            <div className="space-y-5 text-text-secondary leading-relaxed text-[17px]">
              <p>{l.aboutP1}</p>
              <p>{l.aboutP2}</p>
              <p>{l.aboutP3}</p>
              <p>{l.aboutP4}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PUBLICATIONS ── */}
      <Section id="publications" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-3">
            {l.pubLabel}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-navy font-light mb-16">
            {l.pubTitle}
          </h2>

          <div className="space-y-0">
            {PUBLICATIONS.map((pub, i) => (
              <article
                key={i}
                className="group py-8 border-b border-light-border first:border-t hover:bg-cream/40 transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-text-muted font-heading text-2xl font-light shrink-0 md:w-16">
                    {pub.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl text-text-primary font-medium leading-snug mb-2 group-hover:text-navy transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-text-muted text-sm italic">
                      {pub.journal}, {pub.volume}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AWARDS ── */}
      <Section id="awards" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-3">
            {l.awardsLabel}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-navy font-light mb-16">
            {l.awardsTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {l.awards.map((a, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-light-border hover:border-gold/30 transition-colors"
              >
                <span className="text-gold font-heading text-4xl font-light">
                  {a.year}
                </span>
                <h3 className="font-heading text-xl text-navy font-medium mt-4 mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-text-muted text-sm uppercase tracking-wide">
                  {a.place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-3">
            {l.projLabel}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-navy font-light mb-16">
            {l.projTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {l.projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream border border-light-border p-8 hover:border-navy/20 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gold text-xs font-medium tracking-widest uppercase">
                    {p.tech.split(" · ")[0]}
                  </span>
                  <svg
                    className="w-4 h-4 text-text-muted group-hover:text-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy font-medium mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-text-muted text-xs tracking-wide">
                  {p.tech}
                </p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CV / EDUCATION ── */}
      <Section id="cv" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-3">
                {l.cvLabel}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-navy font-light leading-tight mb-6">
                {l.cvTitle}
              </h2>
              <a
                href="http://lattes.cnpq.br/6861728313655490"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-navy font-medium hover:text-gold transition-colors"
              >
                {l.cvLink}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
            <div className="space-y-0">
              {l.education.map((ed, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-5 border-b border-light-border first:border-t group"
                >
                  <span className="text-text-muted font-heading text-lg font-light w-14 shrink-0">
                    {ed.year}
                  </span>
                  <div>
                    <h3 className="text-text-primary font-medium group-hover:text-navy transition-colors">
                      {ed.degree}
                    </h3>
                    <p className="text-text-muted text-sm">{ed.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" className="py-24 md:py-32 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold-light font-medium tracking-[0.25em] uppercase text-xs mb-3">
            {l.contactLabel}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light mb-6">
            {l.contactTitle}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-6">
            {l.contactDesc}
          </p>

          {/* Email */}
          <a
            href="mailto:tesouraria.rj@gmail.com"
            className="inline-block text-gold-light hover:text-white text-lg font-medium tracking-wide transition-colors mb-12"
          >
            tesouraria.rj@gmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:tesouraria.rj@gmail.com"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-navy transition-all rounded-sm"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-am%C3%A9rico-pereira-antunes-119b3822b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-navy transition-all rounded-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://www.researchgate.net/profile/Jose-Antunes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-navy transition-all rounded-sm"
            >
              ResearchGate
            </a>
            <a
              href="http://lattes.cnpq.br/6861728313655490"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-navy transition-all rounded-sm"
            >
              Lattes CV
            </a>
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <span>&copy; {new Date().getFullYear()} José Américo Antunes</span>
          <span>{l.footerRole}</span>
        </div>
      </footer>
    </>
  );
}
