const posts = [
  ["Planejamento patrimonial", "Como investidores podem utilizar planejamento para ampliar patrimônio", "6 min de leitura", "investidores-planejamento"],
  ["Preservação de caixa", "Como empresários podem adquirir ativos sem comprometer todo o caixa", "5 min de leitura", "empresarios-caixa"],
  ["Aquisições estratégicas", "O que avaliar antes de adquirir um imóvel com consórcio", "7 min de leitura", "imovel-consorcio"],
  ["Construção patrimonial", "Como transformar objetivos em um plano de longo prazo", "5 min de leitura", "objetivos-plano"],
  ["Liquidez", "O papel da liquidez em uma estratégia de investimento", "6 min de leitura", "papel-da-liquidez"],
  ["Aquisições", "Como planejar imóveis, veículos e equipamentos", "6 min de leitura", "planejar-aquisicoes"],
];

export default function ArticlesPage() {
  return <main className="reader-page"><header className="reader-header"><a href="/consultores/felipe-soares"><img src="/es11-logo.png" alt="ES11 Capital" /></a><a href="/consultores/felipe-soares">← Voltar ao perfil de Felipe</a></header><section className="reader-hero"><p>CONTEÚDOS DE FELIPE SOARES</p><h1>Estratégia começa com <em>informação clara.</em></h1><span>Planejamento patrimonial, liquidez, aquisições e decisões de longo prazo.</span></section><section className="reader-list">{posts.map(([category,title,time,slug])=><article key={slug}><small>{category} · {time}</small><h2>{title}</h2><p>Uma reflexão de Felipe Soares sobre caminhos que podem fazer sentido para decisões patrimoniais mais conscientes.</p><a href={`/consultores/felipe-soares/artigos/${slug}`}>Ler artigo →</a></article>)}</section></main>;
}
