const artigosData = [
  {
    categoria: "INFRAÇÕES LEVES",
    tipo: "leve",
    itens: [
      { id: "53", artigo: "Art. 53", descricao: "Pousar Aeronaves em local proibido", multa: 14000, fianca: 0, servicos: 0 },
      { id: "54", artigo: "Art. 54", descricao: "Poluição Sonora", multa: 6900, fianca: 0, servicos: 0 },
      { id: "56", artigo: "Art. 56", descricao: "Danos a terceiros", multa: 12000, fianca: 0, servicos: 0 },
      { id: "108", artigo: "Art. 108", descricao: "Direção perigosa", multa: 6500, fianca: 0, servicos: 0 },
      { id: "162", artigo: "Art. 162", descricao: "Dirigir sem habilitação", multa: 5000, fianca: 0, servicos: 0 },
      { id: "172", artigo: "Art. 172", descricao: "Estacionar em local proibido", multa: 2500, fianca: 0, servicos: 0 },
      { id: "244", artigo: "Art. 244", descricao: "Pilotar motocicleta sem o uso do capacete", multa: 1500, fianca: 0, servicos: 0 }
    ]
  },
  {
    categoria: "CRIMES MÉDIOS",
    tipo: "crime",
    itens: [
      { id: "02", artigo: "Art. 02", descricao: "Uso de máscara", servicos: 10, fianca: 4000, multa: 0 },
      { id: "19", artigo: "Art. 19", descricao: "Porte de arma branca", servicos: 10, fianca: 5500, multa: 0 },
      { id: "102", artigo: "Art. 102", descricao: "Fuga", servicos: 10, fianca: 2500, multa: 0 },
      { id: "139", artigo: "Art. 139", descricao: "Calúnia, difamação e injúria", servicos: 10, fianca: 6000, multa: 0 },
      { id: "147", artigo: "Art. 147", descricao: "Ameaça", servicos: 15, fianca: 7000, multa: 0 },
      { id: "150", artigo: "Art. 150", descricao: "Invasão", servicos: 10, fianca: 3300, multa: 0 },
      { id: "165", artigo: "Art. 165", descricao: "Dirigir sob efeito de álcool/drogas", servicos: 10, fianca: 4500, multa: 0 },
      { id: "173", artigo: "Art. 173", descricao: "Racha / Corrida ilegal", servicos: 10, fianca: 5100, multa: 0 },
      { id: "251p2", artigo: "Art. 251 §2", descricao: "Posse/Porte colete balístico", servicos: 10, fianca: 4900, multa: 0 },
      { id: "287", artigo: "Art. 287", descricao: "Apologia ao crime", servicos: 5, fianca: 6100, multa: 0 },
      { id: "289", artigo: "Art. 289", descricao: "Posse de dinheiro sujo", servicos: 5, fianca: 2000, multa: 0 },
      { id: "330", artigo: "Art. 330", descricao: "Desobediência", servicos: 10, fianca: 8000, multa: 0 },
      { id: "331", artigo: "Art. 331", descricao: "Desacato", servicos: 10, fianca: 13000, multa: 0 },
      { id: "333", artigo: "Art. 333", descricao: "Tentativa de suborno", servicos: 15, fianca: 6000, multa: 0 }
    ]
  },
  {
    categoria: "CRIMES GRAVES",
    tipo: "crime",
    itens: [
      { id: "14", artigo: "Art. 14", descricao: "Mal uso de arma com porte", servicos: 20, fianca: 5000, multa: 0 },
      { id: "33", artigo: "Art. 33", descricao: "Tráfico de drogas", servicos: 10, fianca: 4200, multa: 0 },
      { id: "129", artigo: "Art. 129", descricao: "Lesão corporal", servicos: 10, fianca: 4000, multa: 0 },
      { id: "157p2", artigo: "Art. 157 §2", descricao: "Furto", servicos: 10, fianca: 6000, multa: 0 },
      { id: "157p3", artigo: "Art. 157 §3", descricao: "Roubo a caixa registradora", servicos: 10, fianca: 2900, multa: 0 },
      { id: "157p4", artigo: "Art. 157 §4", descricao: "Roubo a caixa eletrônico", servicos: 10, fianca: 4000, multa: 0 },
      { id: "158", artigo: "Art. 158", descricao: "Extorsão", servicos: 10, fianca: 5200, multa: 0 },
      { id: "180", artigo: "Art. 180", descricao: "Receptação", servicos: 10, fianca: 5000, multa: 0 },
      { id: "251", artigo: "Art. 251", descricao: "Posse/Porte de Explosivos", servicos: 5, fianca: 3300, multa: 0 },
      { id: "288", artigo: "Art. 288", descricao: "Associação criminosa", servicos: 10, fianca: 3500, multa: 0 },
      { id: "298", artigo: "Art. 298", descricao: "Falsificação de documentos", servicos: 10, fianca: 3500, multa: 0 },
      { id: "299", artigo: "Art. 299", descricao: "Falsidade ideológica", servicos: 10, fianca: 4000, multa: 0 },
      { id: "334", artigo: "Art. 334", descricao: "Contrabando (itens ilegais)", servicos: 10, fianca: 4000, multa: 0 },
      { id: "342", artigo: "Art. 342", descricao: "Falso testemunho", servicos: 10, fianca: 10000, multa: 0 },
      { id: "358", artigo: "Art. 358", descricao: "Obstrução de justiça", servicos: 15, fianca: 5000, multa: 0 },
      { id: "520", artigo: "Art. 520", descricao: "Multas pendentes", servicos: 10, fianca: 4000, multa: 0 }
    ]
  },
  {
    categoria: "CRIMES GRAVÍSSIMOS",
    tipo: "crime",
    itens: [
      { id: "15", artigo: "Art. 15", descricao: "Posse/Porte ilegal de arma de baixo calibre", servicos: 10, fianca: 0, multa: 0 },
      { id: "16", artigo: "Art. 16", descricao: "Posse/Porte de arma de alto calibre", servicos: 20, fianca: 0, multa: 0 },
      { id: "16p1", artigo: "Art. 16 §1", descricao: "Posse/Porte de Arma Restrita", servicos: 30, fianca: 0, multa: 0 },
      { id: "18", artigo: "Art. 18", descricao: "Tráfico de armas", servicos: 20, fianca: 0, multa: 0 },
      { id: "33i", artigo: "Art. 33", descricao: "Tráfico Internacional", servicos: 15, fianca: 0, multa: 0 },
      { id: "57", artigo: "Art. 57", descricao: "Posse/Porte ilegal de munições", servicos: 10, fianca: 0, multa: 0 },
      { id: "59", artigo: "Art. 59", descricao: "Roubo a bancos", servicos: 20, fianca: 0, multa: 0 },
      { id: "60", artigo: "Art. 60", descricao: "Roubo à joalheria", servicos: 20, fianca: 0, multa: 0 },
      { id: "92p1", artigo: "Art. 92 §1", descricao: "Simulacro de arma", servicos: 10, fianca: 0, multa: 0 },
      { id: "129p1", artigo: "Art. 129 §1", descricao: "Tentativa de homicídio", servicos: 10, fianca: 0, multa: 0 },
      { id: "148", artigo: "Art. 148", descricao: "Sequestro", servicos: 20, fianca: 0, multa: 0 },
      { id: "148p1", artigo: "Art. 148 §1", descricao: "Extorsão mediante sequestro", servicos: 25, fianca: 0, multa: 0 },
      { id: "157p1", artigo: "Art. 157 §1", descricao: "Roubo", servicos: 15, fianca: 0, multa: 0 },
      { id: "157p5", artigo: "Art. 157 §5", descricao: "Homicídio", servicos: 25, fianca: 0, multa: 0 },
      { id: "157p6", artigo: "Art. 157 §6", descricao: "Latrocínio", servicos: 30, fianca: 0, multa: 0 },
      { id: "157p7", artigo: "Art. 157 §7", descricao: "Roubo ao Nióbio / Galinheiro", servicos: 20, fianca: 0, multa: 0 },
      { id: "157p8", artigo: "Art. 157 §8", descricao: "Roubo a loja de conv./armas", servicos: 15, fianca: 0, multa: 0 },
      { id: "157p9", artigo: "Art. 157 §9", descricao: "Roubo a residência", servicos: 15, fianca: 0, multa: 0 },
      { id: "171", artigo: "Art. 171", descricao: "Estelionato", servicos: 10, fianca: 0, multa: 0 },
      { id: "351", artigo: "Art. 351", descricao: "Fuga da prisão / Resgate", servicos: 15, fianca: 0, multa: 0 }
    ]
  }
];

const ui = {
  nome: document.getElementById("nome"),
  cpf: document.getElementById("cpf"),
  busca: document.getElementById("busca"),
  listaCategorias: document.getElementById("listaCategorias"),
  totalArtigos: document.getElementById("totalArtigos"),
  totalServicos: document.getElementById("totalServicos"),
  totalMulta: document.getElementById("totalMulta"),
  totalFianca: document.getElementById("totalFianca"),
  reuPrimario: document.getElementById("reuPrimario"),
  colaboracao: document.getElementById("colaboracao"),
  advogado: document.getElementById("advogado"),
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

function moeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function cpfMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2}).*/, "$1-$2");
}

function artigosSelecionados() {
  const ids = Array.from(document.querySelectorAll(".artigo-check:checked")).map(el => el.value);
  return artigosData.flatMap(c => c.itens.filter(item => ids.includes(item.id)));
}

function filtrarItens(item, termo) {
  const t = termo.trim().toLowerCase();
  if (!t) return true;
  return `${item.artigo} ${item.descricao}`.toLowerCase().includes(t);
}

function renderCategorias() {
  const termo = ui.busca.value || "";
  const checkedIds = new Set(Array.from(document.querySelectorAll(".artigo-check:checked")).map(el => el.value));
  ui.listaCategorias.innerHTML = "";

  artigosData.forEach(categoria => {
    const itens = categoria.itens.filter(item => filtrarItens(item, termo));
    if (!itens.length) return;

    const section = document.createElement("section");
    section.className = "categoria card";
    section.innerHTML = `<h2>${categoria.categoria}</h2>`;

    const wrap = document.createElement("div");
    wrap.className = "itens";

    itens.forEach(item => {
      const meta = categoria.tipo === "leve"
        ? `Multa: ${moeda(item.multa)}`
        : `Serviços: ${String(item.servicos).padStart(2, "0")} | Fiança: ${moeda(item.fianca)}`;

      const label = document.createElement("label");
      label.className = "item";
      label.innerHTML = `
        <input class="artigo-check" type="checkbox" value="${item.id}" ${checkedIds.has(item.id) ? "checked" : ""}>
        <div>
          <strong>${item.artigo} ${item.descricao}</strong>
          <div class="meta">${meta}</div>
        </div>
      `;
      wrap.appendChild(label);
    });

    section.appendChild(wrap);
    ui.listaCategorias.appendChild(section);
  });

  if (!ui.listaCategorias.children.length) {
    ui.listaCategorias.innerHTML = `<div class="vazio card">Nenhum artigo encontrado para a busca informada.</div>`;
  }

  document.querySelectorAll(".artigo-check").forEach(check => {
    check.addEventListener("change", atualizarTotais);
  });
}

function calcularReducao(totalServicos) {
  if (!ui.advogado.checked) {
    return totalServicos;
  }
  let redutores = 0;
  if (ui.reuPrimario.checked) redutores += 1;
  if (ui.colaboracao.checked) redutores += 1;
  if (ui.advogado.checked) redutores += 1;

  const pena = totalServicos * (1 - (redutores / 6));
  return Math.max(0, Math.round(pena));
}

function atualizarTotais() {
  const selecionados = artigosSelecionados();
  const totalServicos = selecionados.reduce((s, item) => s + (item.servicos || 0), 0);
  const totalMulta = selecionados.reduce((s, item) => s + (item.multa || 0), 0);
  const totalFianca = selecionados.reduce((s, item) => s + (item.fianca || 0), 0);
  const penaReduzida = calcularReducao(totalServicos);

  ui.totalArtigos.textContent = selecionados.length;
  ui.totalServicos.textContent = totalServicos;
  ui.totalMulta.textContent = moeda(totalMulta);
  ui.totalFianca.textContent = moeda(totalFianca);
  ui.penaBase.textContent = `${totalServicos} meses`;
  ui.penaReduzida.textContent = `${penaReduzida} meses`;
}

function textoArtigos(lista) {
  return lista.length
    ? lista.map(item => `${item.artigo} ${item.descricao}`).join(", ")
    : "Nenhum artigo selecionado";
}

function cabecalhoPadrao() {
  const selecionados = artigosSelecionados();
  const totalServicos = selecionados.reduce((s, item) => s + (item.servicos || 0), 0);
  const totalMulta = selecionados.reduce((s, item) => s + (item.multa || 0), 0);
  const totalFianca = selecionados.reduce((s, item) => s + (item.fianca || 0), 0);
  const penaReduzida = calcularReducao(totalServicos);

  return {
    nome: ui.nome.value.trim() || "",
    cpf: ui.cpf.value.trim() || "",
    artigos: textoArtigos(selecionados),
    servicos: penaReduzida,
    multa: moeda(totalMulta),
    fianca: moeda(totalFianca)
  };
}

function gerarResultado(tipo) {
  const selecionados = artigosSelecionados();
  if (!selecionados.length) {
    ui.resultado.value = "Selecione pelo menos um artigo.";
    return;
  }

  const dados = cabecalhoPadrao();
  const templates = {
    prisao: {
      titulo: "PRISÃO",
      subtitulo: "Indivíduo será encaminhado à prisão para cumprir sua pena."
    },
    penaParcial: {
      titulo: "PENA PARCIAL",
      subtitulo: "Indivíduo encaminhado à prisão porém com redução da pena devido pagamento das penas afiançáveis."
    },
    liberdade: {
      titulo: "LIBERDADE",
      subtitulo: "Indivíduo segue em liberdade por pagamento total da fiança."
    },
    multar: {
      titulo: "MULTAR",
      subtitulo: "Indivíduo será autuado de acordo com suas infrações."
    }
  };

  const bloco = templates[tipo];
  ui.resultado.value =
`${bloco.titulo}

${bloco.subtitulo}

Nome: ${dados.nome}
CPF: ${dados.cpf}
Artigos: ${dados.artigos}
Pena (meses): ${dados.servicos}
Multa: ${dados.multa}
Fiança: ${dados.fianca}`;
}

function copiarResultado() {
  const texto = ui.resultado.value.trim();
  if (!texto) return;

  navigator.clipboard.writeText(texto).then(() => {
    const original = ui.btnCopiar.textContent;
    ui.btnCopiar.textContent = "Copiado";
    setTimeout(() => ui.btnCopiar.textContent = original, 1200);
  }).catch(() => {
    ui.resultado.select();
    document.execCommand("copy");
  });
}

function limparTudo() {
  ui.nome.value = "";
  ui.cpf.value = "";
  ui.busca.value = "";
  ui.reuPrimario.checked = false;
  ui.colaboracao.checked = false;
  ui.advogado.checked = false;
  ui.resultado.value = "";
  renderCategorias();
  atualizarTotais();
}

function bind() {
  ui.busca.addEventListener("input", () => {
    renderCategorias();
    atualizarTotais();
  });
  ui.cpf.addEventListener("input", e => {
    e.target.value = cpfMask(e.target.value);
  });
  [ui.reuPrimario, ui.colaboracao, ui.advogado].forEach(el => {
    el.addEventListener("change", atualizarTotais);
  });
  ui.btnPrisao.addEventListener("click", () => gerarResultado("prisao"));
  ui.btnPenaParcial.addEventListener("click", () => gerarResultado("penaParcial"));
  ui.btnLiberdade.addEventListener("click", () => gerarResultado("liberdade"));
  ui.btnMultar.addEventListener("click", () => gerarResultado("multar"));
  ui.btnCopiar.addEventListener("click", copiarResultado);
  ui.btnLimpar.addEventListener("click", limparTudo);
}

function init() {
  renderCategorias();
  bind();
  atualizarTotais();
}

init();
