/* =========================================================
   DEV JOURNEY LOG — SCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   GITHUB HELPERS
   ========================================================= */

const GH_BASE = "https://github.com/vdonoladev/dev-journey-log";

/** Link para um arquivo no repositório */
function ghFile(path) {
  const encoded = path
    .split("/")
    .map((s) => encodeURIComponent(s))
    .join("/");
  return `${GH_BASE}/blob/main/${encoded}`;
}

/** Link para uma pasta no repositório */
function ghFolder(path) {
  const encoded = path
    .split("/")
    .map((s) => encodeURIComponent(s))
    .join("/");
  return `${GH_BASE}/tree/main/${encoded}`;
}

/** Retorna o URL correto com base no tipo do item */
function itemUrl(item) {
  if (!item.link) return null;
  return item.file ? ghFile(item.link) : ghFolder(item.link);
}

/* =========================================================
   DATA
   ========================================================= */

const DATA = {
  meta: {
    title: "Dev Journey Log",
    description: "Portfólio de Aprendizado em Desenvolvimento de Software",
    author: "vdonoladev",
    github: GH_BASE,
  },

  stats: [
    { icon: "🚀", value: "5", label: "Plataformas", color: "#8257E6" },
    { icon: "📚", value: "30+", label: "Cursos", color: "#3B82F6" },
    { icon: "📝", value: "60+", label: "Artigos", color: "#EC4899" },
    { icon: "💻", value: "69+", label: "Exercícios", color: "#22C55E" },
    { icon: "⚡", value: "10+", label: "Tecnologias", color: "#F59E0B" },
    { icon: "🛠️", value: "5+", label: "Projetos", color: "#14B8A6" },
  ],

  skills: [
    {
      name: "JavaScript / TypeScript",
      icon: "⚡",
      level: 80,
      color: "#F7DF1E",
    },
    { name: "Python", icon: "🐍", level: 60, color: "#3776AB" },
    { name: "PHP", icon: "🐘", level: 50, color: "#777BB4" },
    { name: "SQL / Banco de Dados", icon: "🗄️", level: 40, color: "#4479A1" },
    { name: "C# / .NET", icon: "💜", level: 25, color: "#512BD4" },
    { name: "DevOps / Infra", icon: "⚙️", level: 20, color: "#2496ED" },
  ],

  roadmap: [
    { text: "Fundamentos de lógica de programação", done: true },
    { text: "HTML, CSS e responsividade", done: true },
    { text: "JavaScript essencial e ES6+", done: true },
    { text: "PHP e desenvolvimento backend", done: true },
    { text: "Python e frameworks web (Flask, Django)", done: true },
    { text: "Versionamento com Git e GitHub", done: true },
    { text: "TypeScript avançado", done: false },
    { text: "React — nível intermediário/avançado", done: false },
    { text: "Testes automatizados", done: false },
    { text: "DevOps e CI/CD", done: false },
  ],

  technologies: [
    { name: "HTML", icon: "🔴" },
    { name: "CSS", icon: "🔵" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "jQuery", icon: "🎯" },
    { name: "PHP 7/8", icon: "🐘" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "Flask", icon: "🌶️" },
    { name: "Django", icon: "🟩" },
    { name: "SQL", icon: "🗄️" },
    { name: "Git", icon: "🔀" },
    { name: "Bash", icon: "⬛" },
    { name: "Vim", icon: "📝" },
    { name: "REST APIs", icon: "🌐" },
    { name: "SCRUM", icon: "📌" },
    { name: "C#", icon: "💜" },
  ],

  categories: [
    /* ── ROCKETSEAT ── */
    {
      id: "rocketseat",
      name: "Rocketseat",
      icon: "🚀",
      color: "#8257E6",
      description:
        "Cursos, CodeDrops, Masterclass, Discover e aulas do YouTube.",
      subcategories: [
        {
          name: "CodeDrops",
          items: [
            {
              title: "#25 — Função Debounce do Zero com JavaScript",
              link: "Rocketseat/CodeDrops/Criando função Debounce do Zero com JavaScript | CodeDrops25",
              tags: ["JavaScript"],
            },
            {
              title: "#26 — Transição de Imagens com CSS3 e JavaScript",
              link: "Rocketseat/CodeDrops/Transição de imagens com CSS3 e JavaScript puro | CodeDrops26",
              tags: ["CSS", "JavaScript"],
            },
            {
              title: "#32 — Validação de Formulários Customizada",
              link: "Rocketseat/CodeDrops/Validação de forms customizada com HTML e JavaScript | CodeDrops32",
              tags: ["HTML", "JavaScript"],
            },
          ],
        },
        {
          name: "Masterclass",
          items: [
            {
              title: "#08 — Responsividade na Prática",
              link: "Rocketseat/Masterclass/Responsividade na Prática | Masterclass08",
              tags: ["CSS", "HTML"],
            },
            {
              title: "#11 — Node.js: Da Teoria à Prática",
              link: "Rocketseat/Masterclass/Node.js: Iniciando da teoria à prática | Masterclass11",
              tags: ["Node.js", "JavaScript"],
            },
            {
              title: "#13 — SQL no Node.js com Knex.js",
              link: "Rocketseat/Masterclass/SQL no Node.js com Knex.js | Masterclass13",
              tags: ["SQL", "Node.js"],
            },
          ],
        },
        {
          name: "Discover — Guias Estelares",
          items: [
            {
              title: "Guia Estelar de HTTP",
              link: "Rocketseat/Discover/Guias estelares/Guia estelar de HTTP",
              tags: ["HTTP", "Conceitos"],
            },
            {
              title: "Guia Estelar de Programação",
              link: "Rocketseat/Discover/Guias estelares/Guia estelar de Programação",
              tags: ["Conceitos"],
            },
            {
              title: "O Guia Estelar de CSS",
              link: "Rocketseat/Discover/Guias estelares/O guia estelar de CSS",
              tags: ["CSS"],
            },
            {
              title: "O Guia Estelar de Git",
              link: "Rocketseat/Discover/Guias estelares/O guia estelar de Git",
              tags: ["Git"],
            },
            {
              title: "O Guia Estelar de HTML",
              link: "Rocketseat/Discover/Guias estelares/O guia estelar de HTML",
              tags: ["HTML"],
            },
            {
              title: "O Guia Estelar de JavaScript",
              link: "Rocketseat/Discover/Guias estelares/O guia estelar de JavaScript",
              tags: ["JavaScript"],
            },
          ],
        },
        {
          name: "Discover — Preparação de Astronautas",
          items: [
            {
              title: "Formulários de outro planeta",
              link: "Rocketseat/Discover/Preparação de astronautas/Formulários de outro planeta",
              tags: ["HTML", "CSS"],
            },
          ],
        },
        {
          name: "Cursos",
          items: [
            {
              title: "C# e .NET — Curso Introdutório",
              link: "Rocketseat/Cursos/C# e .NET - Curso Introdutório",
              tags: ["C#", ".NET"],
            },
          ],
        },
        {
          name: "YouTube | Aulas",
          items: [
            {
              title: "Array: Higher Order Functions",
              link: "Rocketseat/Youtube | Aulas/Array: Higher Order Functions | Mayk Brito",
              tags: ["JavaScript"],
            },
            {
              title: "Git e GitHub na Prática — Guia para Iniciantes",
              link: "Rocketseat/Youtube | Aulas/Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
              tags: ["Git"],
            },
            {
              title: "CSS Grid na Prática",
              link: "Rocketseat/Youtube | Aulas/Desvendando o CSS Grid na prática | Mayk Brito",
              tags: ["CSS"],
            },
            {
              title: "Formulário Animado com JS puro e CSS Animation",
              link: "Rocketseat/Youtube | Aulas/Formulário Animado com JS puro e CSS Animation | Mayk Brito",
              tags: ["JavaScript", "CSS"],
            },
            {
              title: "O que é API? REST e RESTful?",
              link: "Rocketseat/Youtube | Aulas/O que é API? REST e RESTful? | Mayk Brito",
              tags: ["REST", "Conceitos"],
            },
          ],
        },
      ],
    },

    /* ── DIGITAL INNOVATION ONE ── */
    {
      id: "dio",
      name: "Digital Innovation One",
      icon: "💻",
      color: "#E8323E",
      description: "Bootcamps e módulos completos da plataforma DIO.",
      subcategories: [
        {
          name: "Módulos do Bootcamp",
          items: [
            {
              title: "Conceitos de Responsividade e UX",
              link: "Digital Innovation One/Conceitos de responsividade e experiência do usuário",
              tags: ["CSS", "UX"],
            },
            {
              title: "Python Avançado: Flask e REST API",
              link: "Digital Innovation One/Desenvolvimento Avançado Python - Flask e REST API",
              tags: ["Python", "Flask", "REST"],
            },
            {
              title: "Desenvolvimento Avançado com JavaScript ES6",
              link: "Digital Innovation One/Desenvolvimento avançado com JavaScript ES6",
              tags: ["JavaScript", "ES6"],
            },
            {
              title: "Formulários com Condicionais e Sessões com PHP",
              link: "Digital Innovation One/Formulários com condicionais e sessões com PHP",
              tags: ["PHP"],
            },
            {
              title: "Fundamentos de Arquitetura de Sistemas",
              link: "Digital Innovation One/Fundamentos de Arquitetura de Sistemas",
              tags: ["Arquitetura"],
            },
            {
              title: "Internet, Banco de Dados com Python e Django",
              link: "Digital Innovation One/Internet, Banco de Dados com Python e Django",
              tags: ["Python", "Django"],
            },
            {
              title: "Introdução ao PHP",
              link: "Digital Innovation One/Introdução ao PHP",
              tags: ["PHP"],
            },
            {
              title: "Introdução ao ReactJS",
              link: "Digital Innovation One/Introdução ao ReactJS",
              tags: ["React", "JavaScript"],
            },
            {
              title: "Introdução à Biblioteca jQuery e Ajax",
              link: "Digital Innovation One/Introdução à biblioteca JQuery",
              tags: ["jQuery", "JavaScript"],
            },
            {
              title: "JavaScript ES6 Essencial",
              link: "Digital Innovation One/JavaScript ES6 essencial",
              tags: ["JavaScript", "ES6"],
            },
            {
              title: "Primeiros Passos para Começar a Programar",
              link: "Digital Innovation One/Primeiros passos para começar a programar",
              tags: ["Conceitos"],
            },
            {
              title: "Projetos Ágeis com SCRUM",
              link: "Digital Innovation One/Projetos ágeis com SCRUM",
              tags: ["SCRUM", "Metodologias"],
            },
          ],
        },
      ],
    },

    /* ── DEVARIA ── */
    {
      id: "devaria",
      name: "Devaria",
      icon: "📚",
      color: "#0EA5E9",
      description:
        "Fundamentos de TI, banco de dados, sistemas e lógica de programação.",
      subcategories: [
        {
          name: "Banco de Dados",
          items: [
            {
              title: "Linguagem SQL e NoSQL",
              file: true,
              link: "Devaria/Banco de Dados/Linguagem SQL e NoSQL.md",
              tags: ["SQL", "NoSQL"],
            },
            {
              title: "Linguagem SQL",
              file: true,
              link: "Devaria/Banco de Dados/Linguagem SQL.md",
              tags: ["SQL"],
            },
            {
              title: "Normalização e Modelagens",
              file: true,
              link: "Devaria/Banco de Dados/Normalização e Modelagens.md",
              tags: ["SQL", "Modelagem"],
            },
            {
              title: "Noções de Banco de Dados",
              file: true,
              link: "Devaria/Banco de Dados/Noções de Banco de Dados.md",
              tags: ["Banco de Dados"],
            },
          ],
        },
        {
          name: "Conceito de Sistemas",
          items: [
            {
              title: "Noções de Sistemas de Informação",
              file: true,
              link: "Devaria/Conceito de Sistemas/Devaria - Noções de Sistemas de Informação.md",
              tags: ["Sistemas"],
            },
          ],
        },
        {
          name: "Infraestrutura",
          items: [
            {
              title: "Noções de Infra, Redes e Hardware",
              file: true,
              link: "Devaria/Infraestrutura/Devaria - Noções de Infra, Redes e Hardware.md",
              tags: ["Infra", "Redes"],
            },
            {
              title: "Noções de Sistemas Operacionais e Servidores",
              file: true,
              link: "Devaria/Infraestrutura/Devaria - Noções de Sistemas Operacionais e Servidores.md",
              tags: ["Infra", "Linux"],
            },
          ],
        },
        {
          name: "Introdução e Preparatório",
          items: [
            {
              title: "Iniciando como um Programador",
              file: true,
              link: "Devaria/Introdução e Preparatório/Devaria - Iniciando como um Programador Devaria.md",
              tags: ["Conceitos"],
            },
          ],
        },
        {
          name: "Lógica de Programação",
          items: [
            {
              title: "Noções de Lógica — Parte 1",
              file: true,
              link: "Devaria/Lógica de Programação/Noções de Lógica - Parte 1.md",
              tags: ["Lógica"],
            },
            {
              title: "Noções de Lógica — Parte 2",
              file: true,
              link: "Devaria/Lógica de Programação/Noções de Lógica - Parte 2.md",
              tags: ["Lógica"],
            },
            {
              title: "Noções de Lógica — Parte 3",
              file: true,
              link: "Devaria/Lógica de Programação/Noções de Lógica - Parte 3.md",
              tags: ["Lógica"],
            },
            {
              title: "Noções de Lógica — Parte 4",
              file: true,
              link: "Devaria/Lógica de Programação/Noções de Lógica - Parte 4.md",
              tags: ["Lógica"],
            },
          ],
        },
      ],
    },

    /* ── GRAN ── */
    {
      id: "gran",
      name: "Gran Faculdade & Gran Cursos",
      icon: "🏛️",
      color: "#10B981",
      description: "Graduação em ADS e preparação para concurso público.",
      subcategories: [
        {
          name: "Gran Faculdade — ADS",
          items: [
            {
              title: "Análise e Desenvolvimento de Sistemas",
              link: "Gran Faculdade/Análise e Desenvolvimento de Sistemas",
              tags: ["ADS", "Graduação"],
            },
            {
              title: "UA 1 — Mundo Digital (Cibercultura, Gamificação, Mídias)",
              link: "Gran Faculdade/Análise e Desenvolvimento de Sistemas/Carreira e Futuro/UA 1 - Mundo Digital (Cibercultura, Espaços Digitais, Gamificação, Memes e Mídias Digitais)",
              tags: ["ADS"],
            },
            {
              title: "UA 2 — Cultura Maker e Inovação",
              link: "Gran Faculdade/Análise e Desenvolvimento de Sistemas/Carreira e Futuro/UA 2 - Cultura Maker e Inovação",
              tags: ["ADS"],
            },
          ],
        },
        {
          name: "Gran Cursos — Concurso BB 2026",
          items: [
            {
              title: "Agente de Tecnologia — Banco do Brasil 2026",
              link: "Gran Cursos/Concurso Banco do Brasil 2026 - Agente de TI",
              tags: ["Concurso", "TI"],
            },
            {
              title: "Atualidades do Mercado Financeiro — Questões",
              file: true,
              link: "Gran Cursos/Concurso Banco do Brasil 2026 - Agente de TI/Atualidades do Mercado Financeiro/questoes.md",
              tags: ["Finanças", "Concurso"],
            },
          ],
        },
      ],
    },

    /* ── JAVASCRIPT & TYPESCRIPT ── */
    {
      id: "javascript",
      name: "JavaScript & TypeScript",
      icon: "⚡",
      color: "#F7DF1E",
      description: "Cursos, eventos e projetos de JS e TypeScript.",
      subcategories: [
        {
          name: "Cursos",
          items: [
            {
              title: "Curso JavaScript & TypeScript — Completo (Udemy)",
              link: "JavaScript/Curso_JavaScript&TypeScript",
              tags: ["JavaScript", "TypeScript"],
            },
            {
              title: "Curso JavaScript — Rocketseat",
              link: "JavaScript/Curso_JavaScript_Rocketseat",
              tags: ["JavaScript"],
            },
          ],
        },
        {
          name: "Eventos — JSExpert",
          items: [
            {
              title:
                "Pré SemanaJSExpert — Design Patterns (Fluent Interface & Builder)",
              link: "JavaScript/Pré SemanaJSExpert/Live1 - Trabalhando com os Design Patterns Fluent Interface e Builder",
              tags: ["JavaScript", "Design Patterns"],
            },
            {
              title: "Semana JSExpert 3 — Hacker Chat",
              link: "JavaScript/Semana JSExpert3/hacker-chat",
              tags: ["JavaScript", "Node.js"],
            },
          ],
        },
      ],
    },

    /* ── PYTHON ── */
    {
      id: "python",
      name: "Python",
      icon: "🐍",
      color: "#3776AB",
      description: "Exercícios práticos e curso essencial de Python.",
      subcategories: [
        {
          name: "Exercícios Python",
          items: [
            {
              title: "001 — Deixando tudo pronto",
              file: true,
              link: "Python/Exercícios_Python/001_=_deixando_tudo_pronto.py",
              tags: ["Python"],
            },
            {
              title: "002 — Respondendo ao usuário",
              file: true,
              link: "Python/Exercícios_Python/002_respondendo_ao_usuário.py",
              tags: ["Python"],
            },
            {
              title: "003 — Somando dois números",
              file: true,
              link: "Python/Exercícios_Python/003_somando_dois_números.py",
              tags: ["Python"],
            },
            {
              title: "004 — Dissecando uma variável",
              file: true,
              link: "Python/Exercícios_Python/004_dissecando_uma_variável.py",
              tags: ["Python"],
            },
            {
              title: "005 — Antecessor e sucessor",
              file: true,
              link: "Python/Exercícios_Python/005_antecessor_e_sucessor.py",
              tags: ["Python"],
            },
            {
              title: "006 — Dobro, triplo e raiz quadrada",
              file: true,
              link: "Python/Exercícios_Python/006_dobro,_triplo_e_raiz_quadrada.py",
              tags: ["Python"],
            },
            {
              title: "007 — Média aritmética",
              file: true,
              link: "Python/Exercícios_Python/007_média_aritmética.py",
              tags: ["Python"],
            },
            {
              title: "008 — Conversor de medidas",
              file: true,
              link: "Python/Exercícios_Python/008_conversor_de_medidas.py",
              tags: ["Python"],
            },
            {
              title: "009 — Tabuada",
              file: true,
              link: "Python/Exercícios_Python/009_tabuada.py",
              tags: ["Python"],
            },
            {
              title: "010 — Conversor de moedas",
              file: true,
              link: "Python/Exercícios_Python/010_conversor_de_moedas.py",
              tags: ["Python"],
            },
            {
              title: "011 — Pintando parede",
              file: true,
              link: "Python/Exercícios_Python/011_pintando_parede.py",
              tags: ["Python"],
            },
            {
              title: "012 — Calculando descontos",
              file: true,
              link: "Python/Exercícios_Python/012_calculando_descontos.py",
              tags: ["Python"],
            },
            {
              title: "013 — Reajuste salarial",
              file: true,
              link: "Python/Exercícios_Python/013_reajuste_salarial.py",
              tags: ["Python"],
            },
            {
              title: "014 — Conversor de temperaturas",
              file: true,
              link: "Python/Exercícios_Python/014_conversor_de_temperaturas.py",
              tags: ["Python"],
            },
            {
              title: "015 — Aluguel de carros",
              file: true,
              link: "Python/Exercícios_Python/015_aluguel_de_carros.py",
              tags: ["Python"],
            },
            {
              title: "016 — Quebrando um número",
              file: true,
              link: "Python/Exercícios_Python/016_quebrando_um_número.py",
              tags: ["Python"],
            },
            {
              title: "017 — Catetos e hipotenusa",
              file: true,
              link: "Python/Exercícios_Python/017_catetos_e_hipotenusa.py",
              tags: ["Python"],
            },
            {
              title: "018 — Seno, cosseno e tangente",
              file: true,
              link: "Python/Exercícios_Python/018_seno,_cosseno_e_tangente.py",
              tags: ["Python"],
            },
            {
              title: "019 — Sorteando um item na lista",
              file: true,
              link: "Python/Exercícios_Python/019_sorteando_um_item_na_lista.py",
              tags: ["Python"],
            },
            {
              title: "020 — Sorteando uma ordem na lista",
              file: true,
              link: "Python/Exercícios_Python/020_sorteando_uma_ordem_na_lista.py",
              tags: ["Python"],
            },
            {
              title: "021 — Tocando um MP3",
              file: true,
              link: "Python/Exercícios_Python/021_tocando_um_mp3.py",
              tags: ["Python"],
            },
            {
              title: "022 — Analisador de textos",
              file: true,
              link: "Python/Exercícios_Python/022_analisador_de_textos.py",
              tags: ["Python"],
            },
            {
              title: "023 — Separando dígitos de um número",
              file: true,
              link: "Python/Exercícios_Python/023_separando_dígitos_de_um_número.py",
              tags: ["Python"],
            },
            {
              title: "024 — Primeiras letras de um texto",
              file: true,
              link: "Python/Exercícios_Python/024_primeiras_letras_de_um_texto.py",
              tags: ["Python"],
            },
            {
              title: "025 — Procurando string",
              file: true,
              link: "Python/Exercícios_Python/025_procurando_string.py",
              tags: ["Python"],
            },
            {
              title: "026 — Ocorrências dentro de um texto",
              file: true,
              link: "Python/Exercícios_Python/026_ocorrências_dentro_de_um_texto.py",
              tags: ["Python"],
            },
            {
              title: "027 — Primeiro e último nome",
              file: true,
              link: "Python/Exercícios_Python/027_primeiro_e_último_nome.py",
              tags: ["Python"],
            },
            {
              title: "028 — Jogo da adivinhação",
              file: true,
              link: "Python/Exercícios_Python/028_jogo_da_adivinhação.py",
              tags: ["Python"],
            },
            {
              title: "029 — Radar de velocidade",
              file: true,
              link: "Python/Exercícios_Python/029_radar_de_velocidade.py",
              tags: ["Python"],
            },
            {
              title: "030 — Radar de velocidade v2",
              file: true,
              link: "Python/Exercícios_Python/030_radar_de_velocidade_v2.py",
              tags: ["Python"],
            },
            {
              title: "031 — Par ou ímpar",
              file: true,
              link: "Python/Exercícios_Python/031_par_ou_ímpar.py",
              tags: ["Python"],
            },
            {
              title: "032 — Custo da viagem",
              file: true,
              link: "Python/Exercícios_Python/032_custo_da_viagem.py",
              tags: ["Python"],
            },
            {
              title: "033 — Ano bissexto",
              file: true,
              link: "Python/Exercícios_Python/033_ano_bissexto.py",
              tags: ["Python"],
            },
            {
              title: "034 — Maior e menor valor",
              file: true,
              link: "Python/Exercícios_Python/034_maior_e_menor_valor.py",
              tags: ["Python"],
            },
            {
              title: "035 — Aumentos múltiplos",
              file: true,
              link: "Python/Exercícios_Python/035_aumentos_múltiplos.py",
              tags: ["Python"],
            },
            {
              title: "036 — Analisando triângulo",
              file: true,
              link: "Python/Exercícios_Python/036_analisando_triângulo.py",
              tags: ["Python"],
            },
            {
              title: "037 — Aprovando empréstimos",
              file: true,
              link: "Python/Exercícios_Python/037_aprovando_empréstimos.py",
              tags: ["Python"],
            },
            {
              title: "038 — Conversor de bases numéricas",
              file: true,
              link: "Python/Exercícios_Python/038_conversor_de_bases_numéricas.py",
              tags: ["Python"],
            },
            {
              title: "039 — Comparando números",
              file: true,
              link: "Python/Exercícios_Python/039_comparando_números.py",
              tags: ["Python"],
            },
            {
              title: "040 — Alistamento militar",
              file: true,
              link: "Python/Exercícios_Python/040_alistamento_militar.py",
              tags: ["Python"],
            },
            {
              title: "041 — Aquele clássico da média",
              file: true,
              link: "Python/Exercícios_Python/041_aquele_classico_da_média.py",
              tags: ["Python"],
            },
            {
              title: "042 — Classificando atletas",
              file: true,
              link: "Python/Exercícios_Python/042_classificando_atletas.py",
              tags: ["Python"],
            },
            {
              title: "043 — Analisando triângulos v2",
              file: true,
              link: "Python/Exercícios_Python/043_analisando_triângulos_v2.py",
              tags: ["Python"],
            },
            {
              title: "044 — Índice de Massa Corporal",
              file: true,
              link: "Python/Exercícios_Python/044_índice_de_massa_corporal.py",
              tags: ["Python"],
            },
            {
              title: "045 — Gerenciador de pagamentos",
              file: true,
              link: "Python/Exercícios_Python/045_gerenciador_de_pagamentos.py",
              tags: ["Python"],
            },
            {
              title: "046 — Pedra, papel e tesoura",
              file: true,
              link: "Python/Exercícios_Python/046_pedra,_papel_e_tesoura.py",
              tags: ["Python"],
            },
            {
              title: "047 — Contagem regressiva",
              file: true,
              link: "Python/Exercícios_Python/047_contagem_regressiva.py",
              tags: ["Python"],
            },
            {
              title: "048 — Contagem de pares",
              file: true,
              link: "Python/Exercícios_Python/048_contagem_de_pares.py",
              tags: ["Python"],
            },
            {
              title: "049 — Soma ímpares múltiplos de três",
              file: true,
              link: "Python/Exercícios_Python/049_soma_ímpares_múltiplos_de_três.py",
              tags: ["Python"],
            },
            {
              title: "050 — Tabuada v2",
              file: true,
              link: "Python/Exercícios_Python/050_tabuada_v2.py",
              tags: ["Python"],
            },
            {
              title: "051 — Soma dos pares",
              file: true,
              link: "Python/Exercícios_Python/051_soma_dos_pares.py",
              tags: ["Python"],
            },
            {
              title: "052 — Progressão aritmética",
              file: true,
              link: "Python/Exercícios_Python/052_progressão_aritmética.py",
              tags: ["Python"],
            },
            {
              title: "053 — Números primos",
              file: true,
              link: "Python/Exercícios_Python/053_números_primos.py",
              tags: ["Python"],
            },
            {
              title: "054 — Detector de palíndromo",
              file: true,
              link: "Python/Exercícios_Python/054_detector_de_palíndromo.py",
              tags: ["Python"],
            },
            {
              title: "055 — Grupo da maioridade",
              file: true,
              link: "Python/Exercícios_Python/055_grupo_da_maioridade.py",
              tags: ["Python"],
            },
            {
              title: "056 — Maior e menor da sequência",
              file: true,
              link: "Python/Exercícios_Python/056_maior_e_menor_da_sequência.py",
              tags: ["Python"],
            },
            {
              title: "057 — Analisador completo",
              file: true,
              link: "Python/Exercícios_Python/057_analisador_completo.py",
              tags: ["Python"],
            },
            {
              title: "058 — Validação de dados",
              file: true,
              link: "Python/Exercícios_Python/058_validação_de_dados.py",
              tags: ["Python"],
            },
            {
              title: "059 — Jogo da adivinhação v2",
              file: true,
              link: "Python/Exercícios_Python/059_jogo_da_adivinhação_v2.py",
              tags: ["Python"],
            },
            {
              title: "060 — Criando um menu de opções",
              file: true,
              link: "Python/Exercícios_Python/060_criando_um_menu_de_opções.py",
              tags: ["Python"],
            },
            {
              title: "061 — Cálculo do fatorial",
              file: true,
              link: "Python/Exercícios_Python/061_cálculo_do_fatorial.py",
              tags: ["Python"],
            },
            {
              title: "062 — Progressão aritmética v2",
              file: true,
              link: "Python/Exercícios_Python/062_progressão_aritmética_v2.py",
              tags: ["Python"],
            },
            {
              title: "063 — Progressão aritmética v3",
              file: true,
              link: "Python/Exercícios_Python/063_progressão_aritmética_v3.py",
              tags: ["Python"],
            },
            {
              title: "064 — Sequência de Fibonacci",
              file: true,
              link: "Python/Exercícios_Python/064_sequência_de_fibonacci.py",
              tags: ["Python"],
            },
            {
              title: "065 — Tratando vários valores",
              file: true,
              link: "Python/Exercícios_Python/065_tratando_vários_valores.py",
              tags: ["Python"],
            },
            {
              title: "066 — Maior e menor valor",
              file: true,
              link: "Python/Exercícios_Python/066_maior_e_menor_valor.py",
              tags: ["Python"],
            },
            {
              title: "067 — Vários números com flag",
              file: true,
              link: "Python/Exercícios_Python/067_vários_números_com_flag.py",
              tags: ["Python"],
            },
            {
              title: "068 — Tabuada v3",
              file: true,
              link: "Python/Exercícios_Python/068_tabuada_v3.py",
              tags: ["Python"],
            },
            {
              title: "069 — Jogo do par ou ímpar",
              file: true,
              link: "Python/Exercícios_Python/069_jogo_do_par_ou_ímpar.py",
              tags: ["Python"],
            },
            {
              title: "Ler Número Inteiro (utilitário)",
              file: true,
              link: "Python/Exercícios_Python/LerNumeroInteiro.py",
              tags: ["Python"],
            },
            {
              title: "Ler Número Real (utilitário)",
              file: true,
              link: "Python/Exercícios_Python/LerNumeroReal.py",
              tags: ["Python"],
            },
            {
              title: "Palpites Mega Sena",
              file: true,
              link: "Python/Exercícios_Python/PalpitesMegaSena.py",
              tags: ["Python"],
            },
            {
              title: "Soma de Valores Inteiros",
              file: true,
              link: "Python/Exercícios_Python/SomaValoresInteiros.py",
              tags: ["Python"],
            },
          ],
        },
        {
          name: "Programação em Python Essencial",
          items: [
            {
              title: "1 — Introdução",
              link: "Python/Programação_em_Python_Essencial/1- Introdução",
              tags: ["Python"],
            },
            {
              title: "2 — Variáveis e Tipos de Dados",
              link: "Python/Programação_em_Python_Essencial/2- Variáveis e Tipos de Dados",
              tags: ["Python"],
            },
            {
              title: "3 — Estruturas Lógicas",
              link: "Python/Programação_em_Python_Essencial/3- Estruturas Lógicas e Condicionais",
              tags: ["Python"],
            },
            {
              title: "4 — Estruturas de Repetição",
              link: "Python/Programação_em_Python_Essencial/4- Estruturas de Repetição",
              tags: ["Python"],
            },
            {
              title: "5 — Coleções",
              link: "Python/Programação_em_Python_Essencial/5- Coleções",
              tags: ["Python"],
            },
            {
              title: "6 — Funções",
              link: "Python/Programação_em_Python_Essencial/6- Funções",
              tags: ["Python"],
            },
          ],
        },
      ],
    },

    /* ── PHP ── */
    {
      id: "php",
      name: "PHP",
      icon: "🐘",
      color: "#777BB4",
      description: "Cursos completos de PHP 7 e PHP 8.",
      subcategories: [
        {
          name: "Curso Completo de PHP 7",
          items: [
            {
              title: "Pasta do curso completo",
              link: "PHP/Curso Completo de PHP 7",
              tags: ["PHP"],
            },
          ],
        },
        {
          name: "PHP 8: Desenvolvimento Web Completo",
          items: [
            {
              title: "Pasta do curso PHP 8",
              link: "PHP/PHP 8: Curso de Desenvolvimento Web Completo",
              tags: ["PHP"],
            },
          ],
        },
      ],
    },

    /* ── LEARN X IN Y MINUTES ── */
    {
      id: "learnxy",
      name: "Learn X in Y Minutes",
      icon: "⏱️",
      color: "#F59E0B",
      description:
        "Referências rápidas de sintaxe para linguagens e ferramentas.",
      subcategories: [
        {
          name: "Linguagens",
          items: [
            {
              title: "Bash",
              link: "Learn X in Y Minutes/Bash",
              tags: ["Bash", "CLI"],
            },
            { title: "C#", link: "Learn X in Y Minutes/C#", tags: ["C#"] },
            { title: "CSS", link: "Learn X in Y Minutes/CSS", tags: ["CSS"] },
            {
              title: "HTML",
              link: "Learn X in Y Minutes/HTML",
              tags: ["HTML"],
            },
            {
              title: "JSON",
              link: "Learn X in Y Minutes/JSON",
              tags: ["JSON"],
            },
            {
              title: "JavaScript",
              link: "Learn X in Y Minutes/JavaScript",
              tags: ["JavaScript"],
            },
            {
              title: "Markdown",
              link: "Learn X in Y Minutes/Markdown",
              tags: ["Markdown"],
            },
            { title: "PHP", link: "Learn X in Y Minutes/PHP", tags: ["PHP"] },
            {
              title: "Python",
              link: "Learn X in Y Minutes/Python",
              tags: ["Python"],
            },
            {
              title: "TypeScript",
              link: "Learn X in Y Minutes/TypeScript",
              tags: ["TypeScript"],
            },
          ],
        },
        {
          name: "Ferramentas & Algoritmos",
          items: [
            { title: "Git", link: "Learn X in Y Minutes/Git", tags: ["Git"] },
            {
              title: "Notação Assintótica",
              link: "Learn X in Y Minutes/Notação Assintótica",
              tags: ["Algoritmos"],
            },
            {
              title: "Programação Dinâmica",
              link: "Learn X in Y Minutes/Programação Dinâmica",
              tags: ["Algoritmos"],
            },
            {
              title: "Tmux",
              link: "Learn X in Y Minutes/Tmux",
              tags: ["CLI", "Terminal"],
            },
            {
              title: "Vim",
              link: "Learn X in Y Minutes/Vim",
              tags: ["Vim", "CLI"],
            },
          ],
        },
      ],
    },

    /* ── DICAS & TEXTOS ── */
    {
      id: "dicas",
      name: "Dicas & Textos",
      icon: "💡",
      color: "#EC4899",
      description:
        "Artigos, dicas de carreira, clean code, produtividade e mais.",
      subcategories: [
        {
          name: "Carreira & Desenvolvimento",
          items: [
            {
              title: "10 coisas que todo desenvolvedor babaca fala",
              file: true,
              link: "Dicas e Textos/10 coisas que todo desenvolvedor babaca fala.md",
              tags: ["Carreira"],
            },
            {
              title: "5 dicas para ajudar desenvolvedores em 2020",
              file: true,
              link: "Dicas e Textos/5 dicas para ajudar desenvolvedores em 2020.md",
              tags: ["Carreira"],
            },
            {
              title: "5 dúvidas de quem quer iniciar na programação",
              file: true,
              link: "Dicas e Textos/5 dúvidas de quem quer iniciar a carreira em programação.md",
              tags: ["Carreira"],
            },
            {
              title: "7 dicas para novos programadores",
              file: true,
              link: "Dicas e Textos/7 dicas para novos programadores.md",
              tags: ["Carreira"],
            },
            {
              title: "Como criar um Portfólio de Desenvolvedor",
              file: true,
              link: "Dicas e Textos/Como criar um Portfólio de Desenvolvedor.md",
              tags: ["Carreira"],
            },
            {
              title: "Como ter superpoderes na programação?",
              file: true,
              link: "Dicas e Textos/Como ter superpoderes na programação?.md",
              tags: ["Carreira"],
            },
            {
              title: "Como desenvolver a LÓGICA",
              file: true,
              link: "Dicas e Textos/Como desenvolver a LÓGICA.md",
              tags: ["Carreira"],
            },
            {
              title: "O que é ser um desenvolvedor sênior?",
              file: true,
              link: "Dicas e Textos/O que é ser um desenvolvedor sênior?.md",
              tags: ["Carreira"],
            },
            {
              title: "Principais Softskills para Desenvolvedores",
              file: true,
              link: "Dicas e Textos/Principais Softskills para Desenvolvedores em 2020.md",
              tags: ["Carreira"],
            },
            {
              title: "Seja um programador melhor em 5 etapas",
              file: true,
              link: "Dicas e Textos/Seja um programador melhor em 5 etapas.md",
              tags: ["Carreira"],
            },
            {
              title: "LinkedIn — Dicas para o Perfil",
              file: true,
              link: "Dicas e Textos/LinkedIn.md",
              tags: ["Carreira"],
            },
            {
              title: "Desenvolvedor cowboy",
              file: true,
              link: "Dicas e Textos/Desenvolvedor cowboy.md",
              tags: ["Carreira"],
            },
            {
              title: "Desenvolvedor egoísta",
              file: true,
              link: "Dicas e Textos/Desenvolvedor egoísta.md",
              tags: ["Carreira"],
            },
            {
              title: "Desenvolvedor plantador de surpresas",
              file: true,
              link: "Dicas e Textos/Desenvolvedor plantador de surpresas.md",
              tags: ["Carreira"],
            },
            {
              title: "Ótimas maneiras de melhorar suas habilidades",
              file: true,
              link: "Dicas e Textos/Ótimas maneiras de melhorar suas habilidades de Programação.md",
              tags: ["Carreira"],
            },
          ],
        },
        {
          name: "Clean Code & Arquitetura",
          items: [
            {
              title: "Clean Code: Introdução",
              file: true,
              link: "Dicas e Textos/Clean Code: Introdução.md",
              tags: ["Clean Code"],
            },
            {
              title: "Clean Code: O que é código limpo?",
              file: true,
              link: "Dicas e Textos/Clean Code: O que é código limpo?.md",
              tags: ["Clean Code"],
            },
            {
              title: "Como escrever código limpo?",
              file: true,
              link: "Dicas e Textos/Como escrever código limpo?.md",
              tags: ["Clean Code"],
            },
            {
              title: "Qualidade no código",
              file: true,
              link: "Dicas e Textos/Qualidade no código.md",
              tags: ["Clean Code"],
            },
            {
              title: "Refatoração",
              file: true,
              link: "Dicas e Textos/Refatoração.md",
              tags: ["Clean Code"],
            },
            {
              title: "Design Patterns em termos simples",
              file: true,
              link: "Dicas e Textos/Design Patterns em termos simples.md",
              tags: ["Design Patterns"],
            },
            {
              title: "Engenharia vs Engenhoca",
              file: true,
              link: "Dicas e Textos/Engenharia vs Engenhoca.md",
              tags: ["Arquitetura"],
            },
            {
              title: "Separation of Concerns",
              file: true,
              link: "Dicas e Textos/Separation of concerns.md",
              tags: ["Arquitetura"],
            },
            {
              title: "Processo de Desenvolvimento de Software",
              file: true,
              link: "Dicas e Textos/Processo de Desenvolvimento de Software.md",
              tags: ["Metodologias"],
            },
            {
              title: "Frameworks e código customizado",
              file: true,
              link: "Dicas e Textos/Frameworks e código customizado.md",
              tags: ["Arquitetura"],
            },
            {
              title: "Limite de contexto",
              file: true,
              link: "Dicas e Textos/Limite de contexto.md",
              tags: ["Arquitetura"],
            },
            {
              title: "Custo para adicionar features",
              file: true,
              link: "Dicas e Textos/Custo para adicionar features.md",
              tags: ["Arquitetura"],
            },
          ],
        },
        {
          name: "Tecnologias & Referências",
          items: [
            {
              title: "Git - Cheat Sheets",
              file: true,
              link: "Dicas e Textos/Git - Cheat Sheets.md",
              tags: ["Git"],
            },
            {
              title: "PHP - Cheat Sheets",
              file: true,
              link: "Dicas e Textos/PHP - Cheat Sheets.md",
              tags: ["PHP"],
            },
            {
              title: "Comandos básicos do Vim",
              file: true,
              link: "Dicas e Textos/Comandos básicos do Vim.md",
              tags: ["Vim"],
            },
            {
              title: "Guia definitivo de Vim",
              file: true,
              link: "Dicas e Textos/Guia definitivo de Vim.md",
              tags: ["Vim"],
            },
            {
              title: "Códigos Vim",
              file: true,
              link: "Dicas e Textos/Códigos Vim.md",
              tags: ["Vim"],
            },
            {
              title: "LISTA DE TAGS HTML5",
              file: true,
              link: "Dicas e Textos/LISTA DE TAGS BASEADA EM HTML5.md",
              tags: ["HTML"],
            },
            {
              title: "Masonry Grid CSS (2020)",
              file: true,
              link: "Dicas e Textos/Masonry Grid CSS (2020).md",
              tags: ["CSS"],
            },
            {
              title: "MongoDB",
              file: true,
              link: "Dicas e Textos/MongoDB.md",
              tags: ["NoSQL"],
            },
            {
              title: "Métodos HTTP",
              file: true,
              link: "Dicas e Textos/Métodos HTTP.md",
              tags: ["HTTP"],
            },
            {
              title: "Protocolo HTTP",
              file: true,
              link: "Dicas e Textos/Protocolo HTTP.md",
              tags: ["HTTP"],
            },
            {
              title: "Por que Arrays começam em 0",
              file: true,
              link: "Dicas e Textos/Por que Arrays começam em 0 em termos simples.md",
              tags: ["Conceitos"],
            },
            {
              title: "Glossário da Programação",
              file: true,
              link: "Dicas e Textos/Glossário da Programação.md",
              tags: ["Conceitos"],
            },
            {
              title: "Criando ambientes Front-End",
              file: true,
              link: "Dicas e Textos/Criando ambientes Front-End.md",
              tags: ["Frontend"],
            },
            {
              title: "Iniciar servidor PHP (CLI)",
              file: true,
              link: "Dicas e Textos/Iniciar servidor PHP (CLI).md",
              tags: ["PHP", "CLI"],
            },
            {
              title: "Comandos para Manutenção do Sistema",
              file: true,
              link: "Dicas e Textos/Comandos para Manutenção do Sistema.md",
              tags: ["Linux"],
            },
            {
              title: "Suprimir emissão de luz azul (CLI)",
              file: true,
              link: "Dicas e Textos/Como suprimir a emissão de luz azul da tela via linha de comando (CLI).md",
              tags: ["Linux"],
            },
            {
              title: "Ubuntu-Make",
              file: true,
              link: "Dicas e Textos/Ubuntu-Make.md",
              tags: ["Linux"],
            },
            {
              title: "Eventos",
              file: true,
              link: "Dicas e Textos/Eventos.md",
              tags: ["Carreira"],
            },
            {
              title: "Plataformas de Estudo",
              file: true,
              link: "Dicas e Textos/Plataformas.md",
              tags: ["Cursos"],
            },
            {
              title: "Lista de Cursos Gratuitos",
              file: true,
              link: "Dicas e Textos/Lista de Cursos Gratuitos.md",
              tags: ["Cursos"],
            },
            {
              title: "Cursos recomendados",
              file: true,
              link: "Dicas e Textos/Cursos/Cursos.md",
              tags: ["Cursos"],
            },
            {
              title: "O que eu preciso saber?",
              file: true,
              link: "Dicas e Textos/Cursos/O que eu preciso saber?.md",
              tags: ["Cursos"],
            },
          ],
        },
        {
          name: "Produtividade & Saúde",
          items: [
            {
              title: "5 dicas para nunca esquecer uma ideia",
              file: true,
              link: "Dicas e Textos/5 dicas para nunca esquecer uma ideia.md",
              tags: ["Produtividade"],
            },
            {
              title: "Como ter mais concentração para programar",
              file: true,
              link: "Dicas e Textos/Como ter mais concentração para programar.md",
              tags: ["Produtividade"],
            },
            {
              title: "Hábitos que ATRASAM o SEU DIA",
              file: true,
              link: "Dicas e Textos/Hábitos que ATRASAM o SEU DIA e você nem percebe.md",
              tags: ["Produtividade"],
            },
            {
              title: "O que é mindfulness?",
              file: true,
              link: "Dicas e Textos/O que é mindfulness?.md",
              tags: ["Produtividade"],
            },
            {
              title: "Como eu me mantenho saudável?",
              file: true,
              link: "Dicas e Textos/Como eu me mantenho saudável?.md",
              tags: ["Saúde"],
            },
            {
              title: "Rotina de Treino",
              file: true,
              link: "Dicas e Textos/Rotina de Treino.md",
              tags: ["Saúde"],
            },
            {
              title: "Aplicativos para Estudantes",
              file: true,
              link: "Dicas e Textos/Aplicativos para Estudantes.md",
              tags: ["Ferramentas"],
            },
            {
              title: "Usando um agregador de conteúdo",
              file: true,
              link: "Dicas e Textos/Usando um agregador de conteúdo.md",
              tags: ["Ferramentas"],
            },
            {
              title: "Dicas de Livros",
              file: true,
              link: "Dicas e Textos/Dicas de Livros.md",
              tags: ["Livros"],
            },
          ],
        },
        {
          name: "Textos & Reflexões",
          items: [
            {
              title:
                "Quais conselhos daria a um jovem que quer sair da pobreza?",
              file: true,
              link: "Dicas e Textos/Quais conselhos daria a um pobre de 18 anos que quer sair da pobreza?.md",
              tags: ["Reflexão"],
            },
            {
              title:
                "Qual é o truque de vida mais inteligente que você aprendeu?",
              file: true,
              link: "Dicas e Textos/Qual é o truque de vida mais inteligente que você aprendeu?.md",
              tags: ["Reflexão"],
            },
            {
              title: "Lições valiosas de O Lobo de Wall Street",
              file: true,
              link: "Dicas e Textos/Lições valiosas de O Lobo de Wall Street.md",
              tags: ["Reflexão"],
            },
            {
              title: "Liderança e a gestão do medo",
              file: true,
              link: "Dicas e Textos/Liderança e a gestão do medo.md",
              tags: ["Reflexão"],
            },
            {
              title: "Quantidade x Qualidade",
              file: true,
              link: "Dicas e Textos/Quantidade x Qualidade.md",
              tags: ["Reflexão"],
            },
            {
              title: "Exercite a criação de domínios",
              file: true,
              link: "Dicas e Textos/Exercite a criação de domínios.md",
              tags: ["Reflexão"],
            },
            {
              title: "Como evitar a clonagem do chip SIM?",
              file: true,
              link: "Dicas e Textos/Como evitar e lidar com a clonagem do chip SIM?.md",
              tags: ["Segurança"],
            },
            {
              title: "16Personalities — Perfil INTP-T",
              link: "Dicas e Textos/16Personalities (INPT-T)",
              tags: ["Reflexão"],
            },
          ],
        },
      ],
    },

    /* ── PROJETOS ── */
    {
      id: "projetos",
      name: "Prática & Projetos",
      icon: "🛠️",
      color: "#14B8A6",
      description: "Projetos práticos desenvolvidos durante os estudos.",
      subcategories: [
        {
          name: "Projetos",
          items: [
            {
              title: "Pomodoro Timer",
              link: "Prática (Projetos)/Pomodoro",
              tags: ["JavaScript", "CSS", "HTML"],
            },
          ],
        },
      ],
    },
  ],
};

/* =========================================================
   UTILITIES
   ========================================================= */

function qs(sel, ctx = document) {
  return ctx.querySelector(sel);
}
function qsa(sel, ctx = document) {
  return [...ctx.querySelectorAll(sel)];
}

function tagClass(tag) {
  const map = {
    JavaScript: "tag-js",
    TypeScript: "tag-ts",
    Python: "tag-py",
    PHP: "tag-php",
    CSS: "tag-css",
    HTML: "tag-html",
    SQL: "tag-sql",
    Git: "tag-git",
    React: "tag-react",
    ReactJS: "tag-react",
    "Node.js": "tag-node",
  };
  return map[tag] || "tag-default";
}

function renderTags(tags = []) {
  return tags
    .map((t) => `<span class="tag ${tagClass(t)}">${t}</span>`)
    .join("");
}

function countItems(category) {
  return category.subcategories.reduce((sum, s) => sum + s.items.length, 0);
}

function getAllItems() {
  const results = [];
  DATA.categories.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      sub.items.forEach((item) => {
        results.push({
          ...item,
          category: cat.name,
          categoryId: cat.id,
          categoryIcon: cat.icon,
          subcategory: sub.name,
        });
      });
    });
  });
  return results;
}

/* =========================================================
   ROUTER
   ========================================================= */

let currentPage = "dashboard";

function navigate(pageId) {
  currentPage = pageId;

  qsa(".nav-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.page === pageId);
  });

  const breadcrumb = qs("#breadcrumb");
  const cat = DATA.categories.find((c) => c.id === pageId);
  if (pageId === "dashboard") {
    breadcrumb.innerHTML = "<span>Dashboard</span>";
  } else if (pageId === "roadmap") {
    breadcrumb.innerHTML =
      '<span class="bc-sep">›</span><span class="bc-current">Roadmap</span>';
  } else if (pageId === "search") {
    breadcrumb.innerHTML =
      '<span class="bc-sep">›</span><span class="bc-current">Buscar Tudo</span>';
  } else if (cat) {
    breadcrumb.innerHTML = `<span class="bc-sep">›</span><span class="bc-current">${cat.name}</span>`;
  }

  const content = qs("#content");
  content.style.animation = "none";
  requestAnimationFrame(() => {
    content.style.animation = "";
    renderPage(pageId);
  });

  closeSidebar();
}

function renderPage(pageId) {
  const content = qs("#content");
  switch (pageId) {
    case "dashboard":
      content.innerHTML = renderDashboard();
      break;
    case "roadmap":
      content.innerHTML = renderRoadmap();
      break;
    case "search":
      content.innerHTML = renderSearchPage();
      break;
    default: {
      const cat = DATA.categories.find((c) => c.id === pageId);
      if (cat) content.innerHTML = renderCategory(cat);
      else
        content.innerHTML =
          '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">Página não encontrada.</div></div>';
    }
  }

  if (pageId === "dashboard") setTimeout(animateSkillBars, 120);
  initAccordions();
}

/* =========================================================
   PAGE: DASHBOARD
   ========================================================= */

function renderDashboard() {
  const statsHtml = DATA.stats
    .map(
      (s) => `
    <div class="stat-card">
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-value" style="color:${s.color}">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `,
    )
    .join("");

  const skillsHtml = DATA.skills
    .map(
      (s) => `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name"><span class="skill-icon">${s.icon}</span>${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" data-level="${s.level}" style="background:linear-gradient(90deg,${s.color}cc,${s.color})"></div>
      </div>
    </div>
  `,
    )
    .join("");

  const roadmapPreviewHtml = DATA.roadmap
    .slice(0, 5)
    .map(
      (r) => `
    <div class="roadmap-item ${r.done ? "done" : ""}">
      <div class="roadmap-check">${r.done ? "✓" : ""}</div>
      <span class="roadmap-text">${r.text}</span>
      <span class="roadmap-badge ${r.done ? "done" : "pending"}">${r.done ? "Feito" : "Pendente"}</span>
    </div>
  `,
    )
    .join("");

  const catsHtml = DATA.categories
    .map(
      (cat) => `
    <div class="cat-card" style="--cat-color:${cat.color}" onclick="navigate('${cat.id}')">
      <div class="cat-card-icon">${cat.icon}</div>
      <div class="cat-card-name">${cat.name}</div>
      <div class="cat-card-desc">${cat.description}</div>
      <div class="cat-card-meta">
        <span class="cat-card-count">${countItems(cat)} itens</span>
        <span class="cat-card-arrow">→</span>
      </div>
    </div>
  `,
    )
    .join("");

  const techHtml = DATA.technologies
    .map(
      (t) => `
    <div class="tech-pill">${t.icon} ${t.name}</div>
  `,
    )
    .join("");

  const donePct = Math.round(
    (DATA.roadmap.filter((r) => r.done).length / DATA.roadmap.length) * 100,
  );

  return `
    <div class="hero">
      <div class="hero-eyebrow">$ cat progresso.log</div>
      <div class="hero-title">Dev Journey Log</div>
      <div class="hero-sub">Portfólio de aprendizado em desenvolvimento de software — commit a commit, conceito a conceito. Registro vivo de evolução.</div>
      <div class="hero-badges">
        <span class="hero-badge">🚀 Em progresso</span>
        <span class="hero-badge">📅 Atualizado continuamente</span>
        <span class="hero-badge">✅ Roadmap ${donePct}% completo</span>
        <a class="hero-badge" href="${GH_BASE}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">⭐ Ver repositório ↗</a>
      </div>
    </div>

    <div class="section">
      <div class="section-header"><span class="section-title">Números</span></div>
      <div class="stats-grid">${statsHtml}</div>
    </div>

    <div class="two-col section">
      <div class="card">
        <div class="card-title">📊 Nível de Habilidades</div>
        <div class="skills-list">${skillsHtml}</div>
      </div>
      <div class="card">
        <div class="card-title">🗺️ Roadmap — Destaques</div>
        <div class="roadmap-list">${roadmapPreviewHtml}</div>
        <div style="margin-top:14px">
          <button onclick="navigate('roadmap')" style="cursor:pointer;border:1px solid var(--border2);background:var(--surface2);color:var(--muted);font-size:12px;padding:6px 12px;border-radius:6px;width:100%;font-family:inherit;">
            Ver roadmap completo →
          </button>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <span class="section-title">Categorias</span>
        <span class="section-count">${DATA.categories.length} seções</span>
      </div>
      <div class="cards-grid">${catsHtml}</div>
    </div>

    <div class="section">
      <div class="section-header"><span class="section-title">Tecnologias Estudadas</span></div>
      <div class="card"><div class="tech-row">${techHtml}</div></div>
    </div>
  `;
}

function animateSkillBars() {
  qsa(".skill-fill").forEach((el) => {
    el.style.width = el.dataset.level + "%";
  });
}

/* =========================================================
   PAGE: ROADMAP
   ========================================================= */

function renderRoadmap() {
  const done = DATA.roadmap.filter((r) => r.done).length;
  const total = DATA.roadmap.length;
  const pct = Math.round((done / total) * 100);

  const itemsHtml = DATA.roadmap
    .map(
      (r) => `
    <div class="roadmap-item ${r.done ? "done" : ""}">
      <div class="roadmap-check">${r.done ? "✓" : ""}</div>
      <span class="roadmap-text">${r.text}</span>
      <span class="roadmap-badge ${r.done ? "done" : "pending"}">${r.done ? "Feito" : "Pendente"}</span>
    </div>
  `,
    )
    .join("");

  return `
    <div class="page-header">
      <div class="page-header-inner">
        <div class="page-header-icon" style="background:rgba(124,58,237,.15)">🗺️</div>
        <div class="page-header-text">
          <div class="page-title">Roadmap de Aprendizado</div>
          <div class="page-subtitle">${done} de ${total} itens concluídos (${pct}%)</div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-bottom:20px">
      <div class="skill-header" style="margin-bottom:8px">
        <span class="skill-name">Progresso Geral</span>
        <span class="skill-pct">${pct}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width:${pct}%;background:linear-gradient(90deg,#7C3AED,#22C55E)"></div>
      </div>
      <div style="display:flex;gap:16px;margin-top:14px">
        <span style="font-size:12px;color:var(--success)">✓ ${done} concluídos</span>
        <span style="font-size:12px;color:var(--warning)">◌ ${total - done} pendentes</span>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <span class="section-title">Todos os itens</span>
        <span class="section-count">${total} no total</span>
      </div>
      <div class="roadmap-list">${itemsHtml}</div>
    </div>
  `;
}

/* =========================================================
   PAGE: SEARCH
   ========================================================= */

function renderSearchPage() {
  return `
    <div class="page-header">
      <div class="page-header-inner">
        <div class="page-header-icon" style="background:rgba(37,99,235,.15)">🔍</div>
        <div class="page-header-text">
          <div class="page-title">Buscar Tudo</div>
          <div class="page-subtitle">Pesquise em todos os materiais, cursos, artigos e exercícios.</div>
        </div>
      </div>
    </div>
    <div class="search-page-input-wrap">
      <svg class="search-page-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" id="search-page-input" placeholder="Digite para buscar..." autofocus />
    </div>
    <div id="search-results-area">
      <div class="search-placeholder">
        <div class="search-placeholder-icon">🔎</div>
        <div class="search-placeholder-text">Digite algo para começar a busca</div>
      </div>
    </div>
  `;
}

function initSearchPage() {
  const input = qs("#search-page-input");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim();
    const area = qs("#search-results-area");
    if (!q) {
      area.innerHTML = `<div class="search-placeholder"><div class="search-placeholder-icon">🔎</div><div class="search-placeholder-text">Digite algo para começar a busca</div></div>`;
      return;
    }
    const results = searchItems(q);
    if (!results.length) {
      area.innerHTML = `<div class="search-no-results"><div class="search-no-results-icon">😕</div><div class="search-no-results-text">Nenhum resultado para "<strong>${q}</strong>"</div></div>`;
      return;
    }
    area.innerHTML = `
      <div class="section-header" style="margin-bottom:12px">
        <span class="section-title">Resultados</span>
        <span class="section-count">${results.length} encontrado(s)</span>
      </div>
      <div class="search-results-list">
        ${results
          .map((r) => {
            const url = itemUrl(r);
            return `
            <a class="search-page-result" ${url ? `href="${url}" target="_blank" rel="noopener"` : `onclick="navigate('${r.categoryId}')"`}>
              <div class="spr-icon">${r.categoryIcon}</div>
              <div class="spr-body">
                <div class="spr-title">${highlight(r.title, q)}</div>
                <div class="spr-meta">${r.category} · ${r.subcategory}${r.file ? " · 📄 arquivo" : " · 📁 pasta"}</div>
                <div class="spr-tags">${renderTags(r.tags)}</div>
              </div>
              ${url ? '<span class="spr-ext">↗</span>' : ""}
            </a>
          `;
          })
          .join("")}
      </div>
    `;
  });
}

function searchItems(query) {
  const q = query.toLowerCase();
  return getAllItems().filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.subcategory.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)),
  );
}

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  return text.replace(re, '<span class="sri-highlight">$1</span>');
}

/* =========================================================
   PAGE: CATEGORY
   ========================================================= */

function renderCategory(cat) {
  const total = countItems(cat);

  const subcatsHtml = cat.subcategories
    .map(
      (sub, i) => `
    <div class="subcat${i === 0 ? " open" : ""}">
      <div class="subcat-header" onclick="toggleSubcat(this)">
        <span class="subcat-title">${sub.name}</span>
        <span class="subcat-count">${sub.items.length}</span>
        <svg class="subcat-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="subcat-body">
        <div class="subcat-items">
          ${
            sub.items.length
              ? sub.items
                  .map((item) => {
                    const url = itemUrl(item);
                    const typeIcon = item.file ? "📄" : "📁";
                    if (url) {
                      return `
                <a class="subcat-item subcat-item--link" href="${url}" target="_blank" rel="noopener noreferrer">
                  <span class="subcat-item-type">${typeIcon}</span>
                  <span class="subcat-item-title">${item.title}</span>
                  <div class="subcat-item-tags">${renderTags(item.tags)}</div>
                  <span class="subcat-item-ext">↗</span>
                </a>
              `;
                    }
                    return `
              <div class="subcat-item">
                <span class="subcat-item-type">${typeIcon}</span>
                <span class="subcat-item-title">${item.title}</span>
                <div class="subcat-item-tags">${renderTags(item.tags)}</div>
              </div>
            `;
                  })
                  .join("")
              : `<div class="subcat-item"><span style="color:var(--muted);font-size:13px">Nenhum item listado.</span></div>`
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  return `
    <div class="page-header">
      <div class="page-header-inner">
        <div class="page-header-icon" style="background:${cat.color}22;border:1px solid ${cat.color}44">${cat.icon}</div>
        <div class="page-header-text">
          <div class="page-title">${cat.name}</div>
          <div class="page-subtitle">${cat.description}</div>
        </div>
      </div>
    </div>
    <div class="section-header" style="margin-bottom:12px">
      <span class="section-title">Conteúdo</span>
      <span class="section-count">${total} item(ns) · ${cat.subcategories.length} seção(ões)</span>
    </div>
    <div class="subcats">${subcatsHtml}</div>
  `;
}

function toggleSubcat(header) {
  header.parentElement.classList.toggle("open");
}

/* =========================================================
   ACCORDIONS
   ========================================================= */

function initAccordions() {
  if (currentPage === "search") setTimeout(initSearchPage, 0);
}

/* =========================================================
   TOPBAR SEARCH DROPDOWN
   ========================================================= */

const topbarSearch = qs("#topbar-search");
const searchDropdown = qs("#search-dropdown");

topbarSearch.addEventListener("input", () => {
  const q = topbarSearch.value.trim();
  if (!q) {
    hideDropdown();
    return;
  }

  const results = searchItems(q).slice(0, 8);
  if (!results.length) {
    searchDropdown.innerHTML = `<div class="search-empty">Nenhum resultado encontrado.</div>`;
    searchDropdown.classList.add("show");
    return;
  }

  searchDropdown.innerHTML = `
    <div class="search-result-header">Resultados</div>
    ${results
      .map((r) => {
        const url = itemUrl(r);
        return `
        <a class="search-result-item" ${url ? `href="${url}" target="_blank" rel="noopener"` : `href="#" onclick="navigate('${r.categoryId}');hideDropdown();topbarSearch.value='';return false;"`}>
          <div class="sri-icon">${r.categoryIcon}</div>
          <div class="sri-body">
            <div class="sri-title">${highlight(r.title, q)}</div>
            <div class="sri-sub">${r.category} · ${r.subcategory}</div>
          </div>
          ${url ? '<span style="color:var(--muted2);font-size:11px;flex-shrink:0;margin-top:2px">↗</span>' : ""}
        </a>
      `;
      })
      .join("")}
  `;
  searchDropdown.classList.add("show");
});

topbarSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const q = topbarSearch.value.trim();
    if (q) {
      navigate("search");
      hideDropdown();
      topbarSearch.value = "";
      setTimeout(() => {
        const pi = qs("#search-page-input");
        if (pi) {
          pi.value = q;
          pi.dispatchEvent(new Event("input"));
        }
      }, 80);
    }
  }
  if (e.key === "Escape") hideDropdown();
});

document.addEventListener("click", (e) => {
  if (!searchDropdown.contains(e.target) && e.target !== topbarSearch)
    hideDropdown();
});

function hideDropdown() {
  searchDropdown.classList.remove("show");
}

/* =========================================================
   SIDEBAR TOGGLE (MOBILE)
   ========================================================= */

const sidebar = qs("#sidebar");
const overlay = qs("#overlay");
const hamburger = qs("#hamburger");
const sidebarClose = qs("#sidebar-close");

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
}
function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

hamburger.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

/* =========================================================
   NAV CLICK DELEGATION
   ========================================================= */

qs("#sidebar-nav").addEventListener("click", (e) => {
  const item = e.target.closest(".nav-item");
  if (!item) return;
  e.preventDefault();
  const page = item.dataset.page;
  if (page) navigate(page);
});

/* =========================================================
   KEYBOARD SHORTCUT  Ctrl+K / Cmd+K
   ========================================================= */

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    topbarSearch.focus();
    topbarSearch.select();
  }
});

/* =========================================================
   INIT
   ========================================================= */

(function init() {
  const hash = window.location.hash.replace("#", "");
  const valid = [
    "dashboard",
    "roadmap",
    "search",
    ...DATA.categories.map((c) => c.id),
  ];
  navigate(valid.includes(hash) ? hash : "dashboard");
})();
