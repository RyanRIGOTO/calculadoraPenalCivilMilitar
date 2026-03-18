const artigos = [
  {
    categoria: "Infrações leves",
    itens: [
      { id: 1, artigo: "Art. 53", descricao: "Pousar aeronaves em local proibido", servicos: 0, multa: 14000, fianca: 0 },
      { id: 2, artigo: "Art. 54", descricao: "Poluição sonora", servicos: 0, multa: 6900, fianca: 0 },
      { id: 3, artigo: "Art. 56", descricao: "Danos a terceiros", servicos: 0, multa: 12000, fianca: 0 },
      { id: 4, artigo: "Art. 108", descricao: "Direção perigosa", servicos: 0, multa: 6500, fianca: 0 },
      { id: 5, artigo: "Art. 162", descricao: "Dirigir sem habilitação", servicos: 0, multa: 5000, fianca: 0 },
      { id: 6, artigo: "Art. 172", descricao: "Estacionar em local proibido", servicos: 0, multa: 2500, fianca: 0 },
      { id: 7, artigo: "Art. 244", descricao: "Pilotar motocicleta sem o uso do capacete", servicos: 0, multa: 1500, fianca: 0 }
    ]
  },
  {
    categoria: "Crimes médios",
    itens: [
      { id: 8, artigo: "Art. 02", descricao: "Uso de máscara", servicos: 10, multa: 0, fianca: 4000 },
      { id: 9, artigo: "Art. 19", descricao: "Porte de arma branca", servicos: 10, multa: 0, fianca: 5500 },
      { id: 10, artigo: "Art. 102", descricao: "Fuga", servicos: 10, multa: 0, fianca: 2500 },
      { id: 11, artigo: "Art. 139", descricao: "Calúnia, difamação e injúria", servicos: 10, multa: 0, fianca: 6000 },
      { id: 12, artigo: "Art. 147", descricao: "Ameaça", servicos: 15, multa: 0, fianca: 7000 },
      { id: 13, artigo: "Art. 150", descricao: "Invasão", servicos: 10, multa: 0, fianca: 3300 },
      { id: 14, artigo: "Art. 165", descricao: "Dirigir sob efeito de álcool/drogas", servicos: 10, multa: 0, fianca: 4500 },
      { id: 15, artigo: "Art. 173", descricao: "Racha / corrida ilegal", servicos: 10, multa: 0, fianca: 5100 },
      { id: 16, artigo: "Art. 251 §2", descricao: "Posse/Porte de colete balístico", servicos: 10, multa: 0, fianca: 4900 },
      { id: 17, artigo: "Art. 287", descricao: "Apologia ao crime", servicos: 5, multa: 0, fianca: 6100 },
      { id: 18, artigo: "Art. 289", descricao: "Posse de dinheiro sujo", servicos: 5, multa: 0, fianca: 2000 },
      { id: 19, artigo: "Art. 330", descricao: "Desobediência", servicos: 10, multa: 0, fianca: 8000 },
      { id: 20, artigo: "Art. 331", descricao: "Desacato", servicos: 10, multa: 0, fianca: 13000 },
      { id: 21, artigo: "Art. 333", descricao: "Tentativa de suborno", servicos: 15, multa: 0, fianca: 6000 }
    ]
  },
  {
    categoria: "Crimes graves",
    itens: [
      { id: 22, artigo: "Art. 14", descricao: "Mal uso de arma com porte", servicos: 20, multa: 0, fianca: 5000 },
      { id: 23, artigo: "Art. 33", descricao: "Tráfico de drogas", servicos: 10, multa: 0, fianca: 4200 },
      { id: 24, artigo: "Art. 129", descricao: "Lesão corporal", servicos: 10, multa: 0, fianca: 4000 },
      { id: 25, artigo: "Art. 157 §2", descricao: "Furto", servicos: 10, multa: 0, fianca: 6000 },
      { id: 26, artigo: "Art. 157 §3", descricao: "Roubo a caixa registradora", servicos: 10, multa: 0, fianca: 2900 },
      { id: 27, artigo: "Art. 157 §4", descricao: "Roubo a caixa eletrônico", servicos: 10, multa: 0, fianca: 4000 },
      { id: 28, artigo: "Art. 158", descricao: "Extorsão", servicos: 10, multa: 0, fianca: 5200 },
      { id: 29, artigo: "Art. 180", descricao: "Receptação", servicos: 10, multa: 0, fianca: 5000 },
      { id: 30, artigo: "Art. 251", descricao: "Posse/Porte de explosivos", servicos: 5, multa: 0, fianca: 3300 },
      { id: 31, artigo: "Art. 288", descricao: "Associação criminosa", servicos: 10, multa: 0, fianca: 3500 },
      { id: 32, artigo: "Art. 298", descricao: "Falsificação de documentos", servicos: 10, multa: 0, fianca: 3500 },
      { id: 33, artigo: "Art. 299", descricao: "Falsidade ideológica", servicos: 10, multa: 0, fianca: 4000 },
      { id: 34, artigo: "Art. 334", descricao: "Contrabando (itens ilegais)", servicos: 10, multa: 0, fianca: 4000 },
      { id: 35, artigo: "Art. 342", descricao: "Falso testemunho", servicos: 10, multa: 0, fianca: 10000 },
      { id: 36, artigo: "Art. 358", descricao: "Obstrução de justiça", servicos: 15, multa: 0, fianca: 5000 },
      { id: 37, artigo: "Art. 520", descricao: "Multas pendentes", servicos: 10, multa: 0, fianca: 4000 }
    ]
  },
  {
    categoria: "Crimes gravíssimos",
    itens: [
      { id: 38, artigo: "Art. 15", descricao: "Posse/Porte ilegal de arma de baixo calibre", servicos: 10, multa: 0, fianca: 0 },
      { id: 39, artigo: "Art. 16", descricao: "Posse/Porte de arma de alto calibre", servicos: 20, multa: 0, fianca: 0 },
      { id: 40, artigo: "Art. 16 §1", descricao: "Posse/Porte de arma restrita", servicos: 30, multa: 0, fianca: 0 },
      { id: 41, artigo: "Art. 18", descricao: "Tráfico de armas", servicos: 20, multa: 0, fianca: 0 },
      { id: 42, artigo: "Art. 33", descricao: "Tráfico internacional", servicos: 15, multa: 0, fianca: 0 },
      { id: 43, artigo: "Art. 57", descricao: "Posse/Porte ilegal de munições", servicos: 10, multa: 0, fianca: 0 },
      { id: 44, artigo: "Art. 59", descricao: "Roubo a bancos", servicos: 20, multa: 0, fianca: 0 },
      { id: 45, artigo: "Art. 60", descricao: "Roubo à joalheria", servicos: 20, multa: 0, fianca: 0 },
      { id: 46, artigo: "Art. 92 §1", descricao: "Simulacro de arma", servicos: 10, multa: 0, fianca: 0 },
      { id: 47, artigo: "Art. 129 §1", descricao: "Tentativa de homicídio", servicos: 10, multa: 0, fianca: 0 },
      { id: 48, artigo: "Art. 148", descricao: "Sequestro", servicos: 20, multa: 0, fianca: 0 },
      { id: 49, artigo: "Art. 148 §1", descricao: "Extorsão mediante sequestro", servicos: 25, multa: 0, fianca: 0 },
      { id: 50, artigo: "Art. 157 §1", descricao: "Roubo", servicos: 15, multa: 0, fianca: 0 },
      { id: 51, artigo: "Art. 157 §5", descricao: "Homicídio", servicos: 25, multa: 0, fianca: 0 },
      { id: 52, artigo: "Art. 157 §6", descricao: "Latrocínio", servicos: 30, multa: 0, fianca: 0 },
      { id: 53, artigo: "Art. 157 §7", descricao: "Roubo ao nióbio / galinheiro", servicos: 20, multa: 0, fianca: 0 },
      { id: 54, artigo: "Art. 157 §8", descricao: "Roubo a loja de conveniência/armas", servicos: 15, multa: 0, fianca: 0 },
      { id: 55, artigo: "Art. 157 §9", descricao: "Roubo a residência", servicos: 15, multa: 0, fianca: 0 },
      { id: 56, artigo: "Art. 171", descricao: "Estelionato", servicos: 10, multa: 0, fianca: 0 },
      { id: 57, artigo: "Art. 351", descricao: "Fuga da prisão / resgate", servicos: 15, multa: 0, fianca: 0 }
    ]
  }
];

const selecionadosIds = new Set();

const el = {
  nome: document.getElementById("nome"),
  cpf: document.getElementById("cpf"),
  reuPrimario: document.getElementById("reuPrimario"),
  colaboracao: document.getElementById("colaboracao"),
  advogado: document.getElementById("advogado"),
  busca: document.getElementById("busca"),
  listaArtigos: document.getElementById("listaArtigos"),
  totalArtigos: document.getElementById("totalArtigos"),
  totalServicos: document.getElementById("totalServicos"),
  totalMulta: document.getElementById("totalMulta"),
  totalFianca: document.getElementById("totalFianca"),
  penaBase: document.getElementById("penaBase"),
  penaReduzida: document.getElementById("penaReduzida"),
  resultado: document.getElementById("resultado"),
  btnPrisao: document.getElementById("btnPrisao"),
  btnPenaParcial: document.getElementById("btnPenaParcial"),
  btnLiberdade: document.getElementById("btnLiberdade"),
  btnMultar: document.getElementById("btnMultar"),
  btnCopiar: document.getElementById("btnCopiar"),
  btnLimpar: document.getElementById("btnLimpar")
};

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function obterItensSelecionados() {
  return artigos.flatMap((categoria) =>
    categoria.itens.filter((item) => selecionadosIds.has(item.id))
  );
}

function calcularPenaReduzida(totalServicos) {
  if (!el.advogado.checked) {
    return totalServicos;
  }

  let redutores = 0;
  if (el.advogado.checked) redutores += 1;
  if (el.reuPrimario.checked) redutores += 1;
  if (el.colaboracao.checked) redutores += 1;

  const fracaoReducao = redutores * (1 / 6);
  const penaFinal = totalServicos * (1 - fracaoReducao);

  return Math.max(0, Math.round(penaFinal));
}

function calcularTotais() {
  const selecionados = obterItensSelecionados();
  const totalArtigos = selecionados.length;
  const totalServicos = selecionados.reduce((acc, item) => acc + item.servicos, 0);
  const totalMulta = selecionados.reduce((acc, item) => acc + item.multa, 0);
  const totalFianca = selecionados.reduce((acc, item) => acc + item.fianca, 0);
  const penaReduzida = calcularPenaReduzida(totalServicos);

  el.totalArtigos.textContent = totalArtigos;
  el.totalServicos.textContent = `${totalServicos} meses`;
  el.totalMulta.textContent = `R$ ${formatarMoeda(totalMulta)}`;
  el.totalFianca.textContent = `R$ ${formatarMoeda(totalFianca)}`;
  el.penaBase.textContent = `${totalServicos} meses`;
  el.penaReduzida.textContent = `${penaReduzida} meses`;
}

function criarMensagemVazia() {
  const vazio = document.createElement("div");
  vazio.className = "vazio";
  vazio.textContent = "Nenhum artigo encontrado para esta busca.";
  return vazio;
}

function gerarListaArtigos(filtro = "") {
  const busca = filtro.trim().toLowerCase();
  el.listaArtigos.innerHTML = "";

  let totalVisiveis = 0;

  artigos.forEach((categoria) => {
    const itensFiltrados = categoria.itens.filter((item) => {
      const texto = `${item.artigo} ${item.descricao}`.toLowerCase();
      return texto.includes(busca);
    });

    if (itensFiltrados.length === 0) return;

    totalVisiveis += itensFiltrados.length;

    const categoriaDiv = document.createElement("div");
    categoriaDiv.className = "categoria";

    const titulo = document.createElement("h3");
    titulo.className = "categoria-titulo";
    titulo.textContent = categoria.categoria;
    categoriaDiv.appendChild(titulo);

    itensFiltrados.forEach((item) => {
      const label = document.createElement("label");
      label.className = "item-artigo";

      label.innerHTML = `
        <input type="checkbox" class="artigo-check" value="${item.id}" ${selecionadosIds.has(item.id) ? "checked" : ""}>
        <div class="item-conteudo">
          <strong>${item.artigo}</strong>
          <span class="crime-nome">${item.descricao}</span>
          <span class="meta">
            Serviços: ${item.servicos} meses |
            Multa: R$ ${formatarMoeda(item.multa)} |
            Fiança: R$ ${formatarMoeda(item.fianca)}
          </span>
        </div>
      `;

      categoriaDiv.appendChild(label);
    });

    el.listaArtigos.appendChild(categoriaDiv);
  });

  if (totalVisiveis === 0) {
    el.listaArtigos.appendChild(criarMensagemVazia());
  }

  document.querySelectorAll(".artigo-check").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const id = Number(event.target.value);
      if (event.target.checked) {
        selecionadosIds.add(id);
      } else {
        selecionadosIds.delete(id);
      }
      calcularTotais();
    });
  });
}

function obterTextoItensSelecionados() {
  const selecionados = obterItensSelecionados();

  if (selecionados.length === 0) {
    return "Nenhum artigo selecionado.";
  }

  return selecionados.map((item) => `${item.artigo} (${item.descricao})`).join(", ");
}

function obterCabecalhoPessoa() {
  const nome = el.nome.value.trim() || "Não informado";
  const cpf = el.cpf.value.trim() || "Não informado";
  return `Nome: ${nome}\nCPF: ${cpf}`;
}

function obterTextoRedutores() {
  const redutores = [];

  if (el.reuPrimario.checked) redutores.push("Réu primário");
  if (el.colaboracao.checked) redutores.push("Colaboração");
  if (el.advogado.checked) redutores.push("Advogado");

  return redutores.length ? redutores.join(", ") : "Nenhum";
}

function gerarTextoResultado(tipo) {
  const selecionados = obterItensSelecionados();
  const totalServicos = selecionados.reduce((acc, item) => acc + item.servicos, 0);
  const totalMulta = selecionados.reduce((acc, item) => acc + item.multa, 0);
  const totalFianca = selecionados.reduce((acc, item) => acc + item.fianca, 0);
  const penaReduzida = calcularPenaReduzida(totalServicos);

  if (selecionados.length === 0) {
    el.resultado.value = "Selecione ao menos um artigo para gerar o resultado.";
    return;
  }

  const base = [
    obterCabecalhoPessoa(),
    `Artigos selecionados: ${obterTextoItensSelecionados()}`,
    `Serviços totais: ${totalServicos} meses`,
    `Redutores aplicados: ${obterTextoRedutores()}`,
    `Pena reduzida: ${penaReduzida} meses`,
    `Multa total: R$ ${formatarMoeda(totalMulta)}`,
    `Fiança total: R$ ${formatarMoeda(totalFianca)}`
  ];

  let textoFinal = "";

  if (tipo === "prisao") {
    textoFinal = [
      ...base,
      "",
      "RESULTADO: PRISÃO",
      `Pena final fixada em ${penaReduzida} meses de serviços, conforme artigos selecionados.`
    ].join("\n");
  }

  if (tipo === "penaParcial") {
    textoFinal = [
      ...base,
      "",
      "RESULTADO: PENA PARCIAL",
      `Pena parcial aplicada, restando ${penaReduzida} meses após os redutores válidos.`
    ].join("\n");
  }

  if (tipo === "liberdade") {
    textoFinal = [
      ...base,
      "",
      "RESULTADO: LIBERDADE",
      `Liberdade concedida mediante condições cabíveis e fiança total de R$ ${formatarMoeda(totalFianca)}.`
    ].join("\n");
  }

  if (tipo === "multar") {
    textoFinal = [
      ...base,
      "",
      "RESULTADO: MULTAR",
      `Aplicação de multa total no valor de R$ ${formatarMoeda(totalMulta)}.`
    ].join("\n");
  }

  el.resultado.value = textoFinal;
}

function copiarResultado() {
  const texto = el.resultado.value;
  if (!texto.trim()) return;

  navigator.clipboard.writeText(texto)
    .then(() => {
      const original = el.btnCopiar.textContent;
      el.btnCopiar.textContent = "Copiado";
      setTimeout(() => {
        el.btnCopiar.textContent = original;
      }, 1200);
    })
    .catch(() => {
      el.resultado.select();
      document.execCommand("copy");
    });
}

function aplicarMascaraCPF(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14);
}

function limparFormulario() {
  selecionadosIds.clear();
  el.nome.value = "";
  el.cpf.value = "";
  el.busca.value = "";
  el.reuPrimario.checked = false;
  el.colaboracao.checked = false;
  el.advogado.checked = false;
  el.resultado.value = "";
  gerarListaArtigos();
  calcularTotais();
}

function registrarEventos() {
  el.busca.addEventListener("input", (e) => {
    gerarListaArtigos(e.target.value);
  });

  el.reuPrimario.addEventListener("change", calcularTotais);
  el.colaboracao.addEventListener("change", calcularTotais);
  el.advogado.addEventListener("change", calcularTotais);

  el.btnPrisao.addEventListener("click", () => gerarTextoResultado("prisao"));
  el.btnPenaParcial.addEventListener("click", () => gerarTextoResultado("penaParcial"));
  el.btnLiberdade.addEventListener("click", () => gerarTextoResultado("liberdade"));
  el.btnMultar.addEventListener("click", () => gerarTextoResultado("multar"));
  el.btnCopiar.addEventListener("click", copiarResultado);
  el.btnLimpar.addEventListener("click", limparFormulario);

  el.cpf.addEventListener("input", (e) => {
    e.target.value = aplicarMascaraCPF(e.target.value);
  });
}

function iniciar() {
  gerarListaArtigos();
  registrarEventos();
  calcularTotais();
}

iniciar();
