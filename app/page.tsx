const whatsapp = "https://wa.me/5511971244859?text=Olá%2C%20Felipe.%20Acessei%20seu%20perfil%20na%20ES11%20Capital%20e%20gostaria%20de%20conversar%20sobre%20meu%20planejamento%20patrimonial.";

const specialties = [
  ["01", "Construção e expansão patrimonial", "Estratégias para investidores, empresários e famílias que desejam ampliar patrimônio com visão de longo prazo."],
  ["02", "Planejamento para investidores e empresários", "Análise de aquisições, liquidez, capacidade financeira e caminhos para crescer preservando caixa."],
  ["03", "Planejamento de contemplação", "Estratégias de participação e lance acompanhadas de perto, sem promessa de prazo específico."],
];

const articles = [
  ["Planejamento patrimonial", "Como investidores podem utilizar planejamento para ampliar patrimônio", "6 min de leitura", "investidores-planejamento"],
  ["Preservação de caixa", "Como empresários podem adquirir ativos sem comprometer todo o caixa", "5 min de leitura", "empresarios-caixa"],
  ["Aquisições estratégicas", "O que avaliar antes de adquirir um imóvel com consórcio", "7 min de leitura", "imovel-consorcio"],
];

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <div className="nav-inner">
          <a href="#inicio" className="logo-link" aria-label="ES11 Capital, início">
            <img src="/es11-logo.png" alt="ES11 Capital" width="86" height="60" />
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#especialidades">Especialidades</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#conteudos">Conteúdos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer"><svg viewBox="0 0 448 512" width="15" height="15" aria-hidden="true" focusable="false"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.4-10.5-8.9-9.1-12.5-9.3-3.2-.2-6.9-.2-10.6-.2z" /></svg> Agendar conversa</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">CONSULTOR FINANCEIRO · ES11 CAPITAL</p>
            <h1>Felipe Soares <span>— Consultor Financeiro da ES11 Capital</span></h1>
            <p className="hero-title">Estratégias patrimoniais para investidores e empresários que desejam crescer preservando liquidez.</p>
            <p className="hero-description">Atendimento consultivo para estruturar aquisições, ampliar patrimônio e transformar objetivos em um planejamento de longo prazo.</p>
            <div className="hero-actions"><a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">Agendar conversa com Felipe <b aria-hidden="true">→</b></a><a className="quiet-link" href="#como-funciona">Conhecer o atendimento <b aria-hidden="true">↓</b></a></div>
            <div className="hero-points"><span>Atendimento consultivo</span><span>São Paulo, SP · todo o Brasil</span><span>ES11 Capital</span></div>
          </div>
          <div className="hero-photo-wrap"><div className="photo-outline" /><img className="hero-photo" src="/felipe-soares-retrato.webp" alt="Felipe Soares, sócio e consultor financeiro da ES11 Capital" /><div className="photo-label"><strong>Felipe Soares</strong><small>Estratégia para o seu momento</small></div></div>
        </div>
      </section>

      <section className="about section" id="sobre"><div className="container about-grid"><div><p className="section-tag">SOBRE FELIPE</p><h2>Patrimônio não se constrói por acaso. <em>Ele ganha direção.</em></h2></div><div className="about-copy"><p>Sou sócio da ES11 Capital e atuo com estratégias patrimoniais voltadas para pessoas e empresas que desejam construir patrimônio de forma inteligente.</p><p>Minha trajetória começou na área comercial, onde desenvolvi uma visão consultiva focada em entender os objetivos de cada cliente e encontrar as melhores soluções. Hoje, ajudo clientes a transformar planejamento financeiro em crescimento patrimonial por meio de estratégias personalizadas.</p><blockquote>“Meu trabalho começa antes da apresentação de qualquer produto: começa entendendo o objetivo, o momento financeiro e os planos futuros do cliente.”</blockquote></div></div></section>

      <section className="audiences section"><div className="container"><div className="section-heading"><div><p className="section-tag light">PARA QUEM É O ATENDIMENTO</p><h2>Para quem pensa patrimônio <em>com seriedade.</em></h2></div><p>O ponto de partida é entender o que você deseja construir, adquirir ou organizar - e definir caminhos compatíveis com sua realidade.</p></div><div className="audience-grid"><article><span>01 / PRIORIDADE</span><h3>Investidores</h3><p>Para quem deseja ampliar patrimônio, avaliar aquisições e usar tempo, liquidez e oportunidades de forma estratégica.</p></article><article><span>02</span><h3>Empresários e profissionais liberais</h3><p>Para estruturar ativos e crescimento sem comprometer o fluxo pessoal ou empresarial.</p></article><article><span>03</span><h3>Famílias e empresas</h3><p>Para transformar projetos de imóveis, veículos, frota ou equipamentos em planejamento de longo prazo.</p></article></div></div></section>

      <section className="decisions section"><div className="container decisions-grid"><div className="decision-image"><img src="/felipe-soares-es11.webp" alt="Felipe Soares em reunião na ES11 Capital" /><span>ES11 CAPITAL</span></div><div><p className="section-tag">EM QUAIS DECISÕES POSSO AJUDAR</p><h2>Clareza antes da sua próxima decisão patrimonial.</h2><div className="decision-list"><span>Adquirir imóveis e formar patrimônio imobiliário</span><span>Diversificar ativos e preservar liquidez</span><span>Planejar a compra de veículos, frota ou equipamentos</span><span>Estruturar uma aquisição ou expansão empresarial</span><span>Avaliar consórcio, financiamento ou crédito</span><span>Transformar renda em patrimônio</span></div></div></div></section>

      <section className="specialties section" id="especialidades"><div className="container"><p className="section-tag">ESPECIALIDADES</p><div className="specialty-heading"><h2>Estratégias que respeitam o seu momento e <em>o seu futuro.</em></h2><a className="quiet-link navy-link" href={whatsapp} target="_blank" rel="noreferrer">Falar sobre meu objetivo <b aria-hidden="true">→</b></a></div><div className="specialty-grid">{specialties.map(([number,title,text])=><article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{text}</p><b aria-hidden="true">↗</b></article>)}</div></div></section>

      <section className="method section" id="como-funciona"><div className="container"><div className="method-heading"><div><p className="section-tag light">COMO FUNCIONA</p><h2>Uma conversa estratégica para clarear <em>seu próximo movimento.</em></h2></div><p>Meu atendimento é estratégico, próximo e didático. Antes de apresentar qualquer solução, busco entender objetivos, realidade financeira e planos futuros.</p></div><div className="steps">{[["01","Objetivo","Você apresenta o que deseja adquirir, construir ou organizar."],["02","Diagnóstico","Entendemos momento financeiro, liquidez, prazo e prioridades."],["03","Cenários","Avaliamos alternativas e seus possíveis impactos."],["04","Estratégia","Apresentamos caminhos que podem fazer sentido."],["05","Acompanhamento","Caso avance, acompanho a execução da estratégia."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div><a className="gold-button method-button" href={whatsapp} target="_blank" rel="noreferrer">Quero conversar com Felipe <b aria-hidden="true">→</b></a></div></section>

      <section className="es11 section"><div className="container es11-inner"><div><img src="/es11-logo.png" alt="ES11 Capital" /><p className="section-tag">A ESTRUTURA DA ES11 CAPITAL</p><h2>Atendimento pessoal com uma estrutura maior por trás.</h2></div><p>A ES11 Capital atua com planejamento e estruturação patrimonial para investidores, empresários, profissionais liberais, famílias e empresas. Antes de recomendar qualquer solução, são considerados objetivo, liquidez, prazo, capacidade financeira, oportunidades e riscos.</p><a className="quiet-link navy-link" href="https://www.es11capital.com.br/" target="_blank" rel="noreferrer">Conhecer a ES11 Capital <b aria-hidden="true">↗</b></a></div></section>

      <section className="content section" id="conteudos"><div className="container"><div className="section-heading content-heading"><div><p className="section-tag">CONTEÚDOS DE FELIPE</p><h2>Ideias para decidir <em>com mais clareza.</em></h2></div><a className="quiet-link navy-link" href="/consultores/felipe-soares/artigos">Ver todos os artigos <b aria-hidden="true">→</b></a></div><div className="article-grid">{articles.map(([category,title,time,slug],index)=><article key={slug}><div className={`article-visual visual-${index+1}`}><span>{category}</span></div><div className="article-body"><small>{category} · {time}</small><h3>{title}</h3><a href={`/consultores/felipe-soares/artigos/${slug}`}>Ler artigo <b aria-hidden="true">→</b></a></div></article>)}</div></div></section>

      <section className="faq section" id="duvidas"><div className="container faq-grid"><div><p className="section-tag">DÚVIDAS COMUNS</p><h2>Antes de decidir, <em>é natural perguntar.</em></h2><p>Se o seu objetivo ainda não está totalmente claro, a conversa é justamente o lugar para começar.</p></div><div>{[["A primeira conversa tem custo?","Não. A primeira conversa é um diagnóstico consultivo para entender seu objetivo e avaliar os caminhos que podem fazer sentido."],["Você atende clientes fora de São Paulo?","Sim. O atendimento pode ser realizado para clientes em todo o Brasil."],["Preciso saber qual produto quero contratar?","Não. A conversa começa pelo objetivo e pela sua realidade, não por uma solução previamente definida."],["Você atende investidores e empresas?","Sim. Investidores, empresários, profissionais liberais, famílias e empresas fazem parte dos públicos atendidos."],["Existe garantia de contemplação?","Não. A ES11 não trabalha com promessa de contemplação em data específica. O atendimento busca uma estratégia compatível com o objetivo, o prazo e a capacidade financeira de cada cliente."]].map(([q,a])=><details key={q}><summary>{q}<b aria-hidden="true">+</b></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><p className="section-tag light">SEU PRÓXIMO PASSO</p><h2>Objetivos claros. <em>Resultados construídos com estratégia.</em></h2><p>Se você tem um objetivo, mas ainda não sabe qual é o melhor caminho para alcançá-lo, conte comigo. Vamos analisar sua situação e montar um planejamento para o seu momento.</p><a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">Agendar conversa com Felipe <b aria-hidden="true">→</b></a></div></section>

      <footer><div className="container footer-grid"><div><img src="/es11-logo.png" alt="ES11 Capital" /><p>Felipe Soares<br /><span>Sócio e Consultor Financeiro</span></p></div><div><small>CONTATO</small><a href={whatsapp} target="_blank" rel="noreferrer">(11) 97124-4859</a><p>São Paulo, SP · atendimento em todo o Brasil</p></div><div><small>SIGA</small><a href="https://www.instagram.com/felipennsoares/" target="_blank" rel="noreferrer">@felipennsoares ↗</a><a href="https://www.instagram.com/es11capital/" target="_blank" rel="noreferrer">@es11capital ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Felipe Soares · ES11 Capital</span><span>A análise realizada pela ES11 Capital é personalizada e consultiva. Não há promessa de prazo de contemplação, rentabilidade ou resultado financeiro.</span></div></footer>
    </main>
  );
}
