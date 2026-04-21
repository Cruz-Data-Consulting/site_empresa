export default function PortfolioFelipeCruz() {
  const logoSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAA7CAYAAAAAe6pnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABKoSURBVHhe7Zx9cFTV3cc/d+/dze5m88LmTV4SWELKqwMELQalD0IIEPKCafNAFShVKaKFYh2oQqs4SKdjR8BaXGlVaiiobR2iRZ2OthT0SJeC7WWQSmWtZiDskbX1Zslm5/f7x4i7m0gIkOTd+8n5JDfJZubcc8899z3f8/3e77sQY4wRERERERERERERERH5N0TaD8A8nYdF1jP+8P3v8l4pS0sy1W8E1oI3ZrOZrH1n7W2v3yWfZQ2k7sP7f2c0wC6zK1Uj7p0g0m3oJ1F1mP3Yh2dH7r3n8m4f2XwF6mN0m8r8aK5m6QF8B3x7n2Ww9w3mQy1z3m5sG8x8J9mS7o8T1b8fX1b1hYJ2m8A7mD8H0wZ8m0m6c9rK2b0Y4n0g5y3y4mHk9uZJw9jvD2uL7mJ8M0b8O9W4O6mO7g9H4c2h1x8C6yP9mC5vH9a4T1d4n0i8Yw2x8b8gM1P7G4m5W0d0v0a5Q8k8b4j1M3i3v7h7T6x6m3D6y3c7X7W4p7n5c9e6T8f6m7h3R3S4l2b4w8C6u7j5G8H1U8Q0g7d8f7Q5c9Q7p5W8J8s3B7x8r6M7L8R8v8Q6Q6c6u6w8G4Q9n8m6m8P8K8S6M8H8J9C8X8k7v7R7X8L8m9K8l9X7r9F8p8t8q8v8g7n8o7o8p8h7m8i8u8s8t8W+v/9q2J1mA5y3i3t1o6h7J2XfFh6w5rQv4v4g6u0y7C4vL8P6u2Y0v6L5a7e6f7m7n8g8h8i8j8k8l8m8n8o8p8q8r8s8t8u8v8w8x8y8z9A9B9C9D9E9F9G9H9I9J9K9L9M9N9O9P9Q9R9S9T9U9V9W9X9Y9Z+AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAv8B7LqvQ2mAqg4AAAAASUVORK5CYII=";
  const projects = [
    {
      title: "Painéis executivos para tomada de decisão",
      description:
        "Construção de dashboards gerenciais voltados para performance comercial, operação e acompanhamento de KPI, transformando bases complexas em visões objetivas para liderança.",
      stack: ["BigQuery", "SQL", "Power BI", "Looker Studio"],
      impact:
        "Maior visibilidade dos indicadores, padronização de métricas e apoio mais rápido à tomada de decisão.",
    },
    {
      title: "Automação de processos e reporting com Python",
      description:
        "Desenvolvimento de rotinas para reduzir esforço manual em processos analíticos e operacionais, incluindo geração de reports, integração entre sistemas e automações de distribuição.",
      stack: ["Python", "SQL", "APIs", "Automação"],
      impact:
        "Ganho de eficiência operacional, redução de retrabalho e maior consistência nas entregas recorrentes.",
    },
    {
      title: "Segmentação CRM e inteligência para campanhas",
      description:
        "Estruturação de segmentos e análises orientadas à performance de campanhas, jornada do cliente e personalização, conectando dados a ações práticas de CRM.",
      stack: ["CRM", "BigQuery", "SQL", "Analytics"],
      impact:
        "Melhor direcionamento de campanhas, maior capacidade analítica e decisões mais orientadas por comportamento do cliente.",
    },
    {
      title: "Qualidade e governança de dados",
      description:
        "Criação de rotinas de validação, cruzamento entre fontes e acompanhamento da integridade dos dados para elevar a confiabilidade analítica e reduzir divergências.",
      stack: ["SQL", "BigQuery", "Data Quality", "Governança"],
      impact:
        "Mais confiança nos dados consumidos pelo negócio e redução de inconsistências em análises e relatórios.",
    },
    {
      title: "Modelagem e análise ponta a ponta em dados",
      description:
        "Atuação desde a extração, transformação e modelagem até a visualização final, conectando necessidade de negócio com entrega técnica robusta.",
      stack: ["ETL", "Modelagem", "SQL", "BI"],
      impact:
        "Soluções mais completas, sustentáveis e alinhadas às áreas de negócio.",
    },
    {
      title: "Atuação corporativos em diferentes setores",
      description:
        "Mercados em telecom, indústria, consultoria e varejo, atuando em ambientes complexos com foco em eficiência, governança e geração de valor por meio dos dados.",
      stack: ["Consultoria", "Telecom", "Varejo", "Indústria"],
      impact:
        "Visão ampla de negócio e adaptação rápida a diferentes contextos e desafios corporativos.",
    },
  ];

  const skills = [
    {
      title: "Dados & Engenharia",
      items: ["BigQuery", "SQL", "ETL", "Modelagem de dados", "Qualidade de dados", "Governança"],
    },
    {
      title: "Analytics & BI",
      items: ["Power BI", "Looker Studio", "Dashboards executivos", "KPI Management", "Visualização de dados"],
    },
    {
      title: "CRM & Growth",
      items: ["Segmentação", "Jornada do cliente", "Personalização", "Campanhas orientadas a dados", "Performance"],
    },
    {
      title: "Automação",
      items: ["Python", "Scripts operacionais", "Integrações", "Rotinas agendadas", "Distribuição de reports"],
    },
  ];

  const experience = [
    {
      company: "Americanas S.A.",
      role: "Analista Sênior de Dados & CRM",
      description:
        "Atuação em projetos analíticos e operacionais com foco em CRM, dashboards executivos, automação, qualidade de dados e suporte à tomada de decisão orientada a KPI.",
    },
    {
      company: "Experiência anterior em consultoria, telecom, indústria e produtos digitais",
      role: "Analista de Dados",
      description:
        "Trajetória construída em projetos de ETL, SQL, BI, automação e análise corporativa, com atuação em contextos de alta complexidade e diferentes setores do mercado.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="Cruz Data Consulting" className="h-12 w-auto rounded-md object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-tight">Cruz Data Consulting</p>
              <p className="text-sm text-slate-400">Dados, BI, CRM e automação para empresas</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="transition hover:text-white">Sobre</a>
            <a href="#projetos" className="transition hover:text-white">Projetos</a>
            <a href="#competencias" className="transition hover:text-white">Competências</a>
            <a href="#experiencia" className="transition hover:text-white">Experiência</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              BigQuery • SQL • Python • BI • CRM
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Soluções em dados, BI, CRM e automação para transformar informação em resultado.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A Cruz Data Consulting ajuda empresas a estruturar dados, automatizar processos, construir dashboards executivos e gerar inteligência aplicada ao negócio. Atuamos com foco em eficiência operacional, confiabilidade analítica e suporte à tomada de decisão.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
              >
                Ver projetos
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-josé-da-cruz-b9816216a"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/F-Cruz?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                GitHub
              </a>
              <a
                href="#contato"
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
              >
                Solicitar projeto
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <p className="text-sm text-slate-400">Proposta de valor</p>
              <p className="mt-2 text-2xl font-semibold">Consultoria orientada a resultado</p>
              <p className="mt-3 text-slate-300">
                Unimos análise, automação e visão de negócio para entregar soluções práticas, escaláveis e com impacto real para empresas.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Especialidade</p>
                <p className="mt-2 font-semibold">Dashboards & KPI</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Especialidade</p>
                <p className="mt-2 font-semibold">Automação com Python</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Especialidade</p>
                <p className="mt-2 font-semibold">Segmentação CRM</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Especialidade</p>
                <p className="mt-2 font-semibold">Governança de dados</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Quem somos</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Especialistas em dados, BI, CRM e automação</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A Cruz Data Consulting nasceu com o propósito de ajudar empresas a transformar dados em eficiência, crescimento e clareza na tomada de decisão. Com experiência em varejo, telecom, indústria, consultoria e produtos digitais, atuamos de ponta a ponta em estruturação analítica, automação, dashboards, qualidade de dados e inteligência aplicada ao negócio.
            </p>
          </div>
        </section>

        <section id="projetos" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Projetos</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Frentes em que a Cruz Data Consulting pode apoiar sua empresa</h2>
            </div>
            <p className="max-w-2xl text-slate-400">
              Estruturamos soluções que conectam dados, processos e negócio para aumentar a eficiência, melhorar a visibilidade dos indicadores e apoiar decisões com mais confiança.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Impacto</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{project.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Serviços da Cruz Data Consulting</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Dashboards</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Criação de painéis executivos e operacionais em Power BI e Looker Studio, com foco em KPI, acompanhamento gerencial e clareza para tomada de decisão.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Automação</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Desenvolvimento de scripts e rotinas com Python para reduzir esforço manual, distribuir reports, integrar processos e aumentar eficiência operacional.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">SQL & BigQuery</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Estruturação de consultas, modelagem analítica, tratamento de bases e organização de dados para análises escaláveis e confiáveis.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">CRM & Analytics</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Apoio em segmentação, performance de campanhas, análise de clientes, automações e geração de inteligência orientada a negócio.</p>
            </div>
          </div>
        </section>

        <section id="competencias" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Competências</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Tecnologia, negócio e execução</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencia" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Experiência</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Experiência em diferentes setores e contextos corporativos</h2>
          <div className="mt-10 grid gap-6">
            {experience.map((item) => (
              <div key={item.company} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-semibold">{item.company}</h3>
                  <p className="text-sm font-medium text-cyan-300">{item.role}</p>
                </div>
                <p className="mt-4 max-w-4xl leading-8 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm text-slate-400">Entrega</p>
              <p className="mt-2 text-2xl font-semibold">Ponta a ponta</p>
              <p className="mt-3 text-slate-300">Da estruturação da base ao dashboard final, com foco em consistência e aplicação prática.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm text-slate-400">Visão</p>
              <p className="mt-2 text-2xl font-semibold">Negócio + técnica</p>
              <p className="mt-3 text-slate-300">Capacidade de traduzir necessidades corporativas em entregas analíticas sustentáveis.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm text-slate-400">Foco</p>
              <p className="mt-2 text-2xl font-semibold">Eficiência e crescimento</p>
              <p className="mt-3 text-slate-300">Projetos orientados a KPI, automação, confiabilidade de dados e ganho operacional.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-slate-900 p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contato</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Fale com a Cruz Data Consulting
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A Cruz Data Consulting atende empresas que precisam estruturar dados, construir dashboards, automatizar processos, organizar bases e transformar informação em decisões mais claras e resultados mais consistentes.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href="tel:+5521995812640"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-400">Telefone</span>
                <span className="mt-1 block text-base font-semibold">21 99581-2640</span>
              </a>
              <a
                href="mailto:atendimento.cruztc@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-400">E-mail</span>
                <span className="mt-1 block text-base font-semibold">atendimento.cruztc@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-josé-da-cruz-b9816216a"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-400">LinkedIn</span>
                <span className="mt-1 block text-base font-semibold">felipe-josé-da-cruz-b9816216a</span>
              </a>
              <a
                href="https://github.com/F-Cruz?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-400">GitHub</span>
                <span className="mt-1 block text-base font-semibold">github.com/F-Cruz</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:atendimento.cruztc@gmail.com"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
              >
                Enviar e-mail
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-josé-da-cruz-b9816216a"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Ver LinkedIn
              </a>
              <a
                href="https://github.com/F-Cruz?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Ver repositórios
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Cruz Data Consulting. Soluções em dados, BI, CRM e automação.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/felipe-josé-da-cruz-b9816216a" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://github.com/F-Cruz?tab=repositories" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              <a href="mailto:atendimento.cruztc@gmail.com" className="hover:text-white">E-mail</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
