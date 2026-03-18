const artigos = [
  {
    categoria: "Infrações leves",
    itens: [
      { id: 1, artigo: "Art. 53", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 },
      { id: 2, artigo: "Art. 54", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 },
      { id: 3, artigo: "Art. 56", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 },
      { id: 4, artigo: "Art. 108", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 },
      { id: 5, artigo: "Art. 162", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 },
      { id: 6, artigo: "Art. 172", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 },
      { id: 7, artigo: "Art. 244", descricao: "Infração leve", servicos: 0, multa: 5000, fianca: 0 }
    ]
  },
  {
    categoria: "Crimes médios",
    itens: [
      { id: 8, artigo: "Art. 02", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 9, artigo: "Art. 19", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 10, artigo: "Art. 102", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 11, artigo: "Art. 139", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 12, artigo: "Art. 147", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 13, artigo: "Art. 150", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 14, artigo: "Art. 165", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 15, artigo: "Art. 173", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 16, artigo: "Art. 244", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 17, artigo: "Art. 251 §2", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 18, artigo: "Art. 331", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 },
      { id: 19, artigo: "Art. 333", descricao: "Crime médio", servicos: 10, multa: 0, fianca: 10000 }
    ]
  },
  {
    categoria: "Crimes graves",
    itens: [
      { id: 20, artigo: "Art. 14", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 21, artigo: "Art. 33", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 22, artigo: "Art. 158", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 23, artigo: "Art. 180", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 24, artigo: "Art. 288", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 25, artigo: "Art. 298", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 26, artigo: "Art. 299", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 27, artigo: "Art. 342", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 28, artigo: "Art. 358", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 },
      { id: 29, artigo: "Art. 520", descricao: "Crime grave", servicos: 20, multa: 0, fianca: 20000 }
    ]
  },
  {
    categoria: "Crimes gravíssimos",
    itens: [
      { id: 30, artigo: "Art. 15", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 31, artigo: "Art. 16", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 32, artigo: "Art. 16 §1", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 33, artigo: "Art. 18", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 34, artigo: "Art. 57", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 35, artigo: "Art. 59", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 36, artigo: "Art. 60", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 37, artigo: "Art. 92 §1", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 38, artigo: "Art. 148", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 39, artigo: "Art. 148 §1", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 40, artigo: "Art. 157 §1", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 41, artigo: "Art. 157 §5", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 42, artigo: "Art. 157 §6", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 43, artigo: "Art. 157 §7", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 44, artigo: "Art. 157 §8", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 45, artigo: "Art. 157 §9", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 46, artigo: "Art. 171", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 },
      { id: 47, artigo: "Art. 351", descricao: "Crime gravíssimo", servicos: 30, multa: 0, fianca: 30000 }
    ]
  }
];

const el = {
  nome: document.getElementById("nome"),
  cpf: document.getElementById("cpf"),
  reuPrimario: document.getElementById("reuPrimario"),
  colaboracao: document.getElementById("colaboracao"),
  advogado: document.getElementById("advogado"),
  busca: document.getElementById("busca"),
  listaArtigos: document.getElementById("listaArtigos"),
  totalServicos: document.getElementById("totalServicos"),
  totalMulta: document.getElementById("totalMulta"),
  totalFianca: document.getElementById("totalFianca"),
  penaReduzida: document.getElementById("penaReduzida"),
  resultado: document.getElementById("resultado"),
  btnPrisao: document.getElementById("btnPrisao"),
  btnPenaParcial: document.getElementById("btnPenaParcial"),
  btnLiberdade: document.getElementById("btnLiberdade"),
  btnMultar: document.getElementById("btnMultar"),
  btnCopiar: document.getElementById("btnCopiar")
};

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function obterItensSelecionados() {
  const checks = document.querySelectorAll(".artigo-check:checked");
  const ids = Array.from(checks).map(check => Number(check.value));

  return artigos.flatMap(categoria =>
    categoria.itens.filter(item => ids.includes(item.id))
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

  const totalServicos = selecionados.reduce((acc, item) => acc + item.servicos, 0);
  const totalMulta = selecionados.reduce((acc, item) => acc + item.multa, 0);
  const totalFianca = selecionados.reduce((acc, item) => acc + item.fianca, 0);
  const penaReduzida = calcularPenaReduzida(totalServicos);

  el.totalServicos.textContent = totalServicos;
  el.totalMulta.textContent = formatarMoeda(totalMulta);
  el.totalFianca.textContent = formatarMoeda(totalFianca);
  el.penaReduzida.textContent = penaReduzida;
}

function gerarListaArtigos(filtro = "") {
  const busca = filtro.trim().toLowerCase();
  el.listaArtigos.innerHTML = "";

  artigos.forEach(categoria => {
    const itensFiltrados = categoria.itens.filter(item => {
      const texto = `${item.artigo} ${item.descricao}`.toLowerCase();
      return texto.includes(busca);
    });

    if (itensFiltrados.length === 0) return;

    const categoriaDiv = document.createElement("div");
    categoriaDiv.className = "categoria";

    const titulo = document.createElement("h3");
    titulo.className = "categoria-titulo";
    titulo.textContent = categoria.categoria;
    categoriaDiv.appendChild(titulo);

    itensFiltrados.forEach(item => {
      const label = document.createElement("label");
      label.className = "item-artigo";

      label.innerHTML = `
        <input type="checkbox" class="artigo-check" value="${item.id}">
        <div class="item-conteudo">
          <strong>${item.artigo} — ${item.descricao}</strong>
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

  document.querySelectorAll(".artigo-check").forEach(checkbox => {
    checkbox.addEventListener("change", calcularTotais);
  });
}

function obterTextoItensSelecionados() {
  const selecionados = obterItensSelecionados();

  if (selecionados.length === 0) {
    return "Nenhum artigo selecionado.";
  }

  return selecionados.map(item => item.artigo).join(", ");
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

function registrarEventos() {
  el.busca.addEventListener("input", e => {
    gerarListaArtigos(e.target.value);
    calcularTotais();
  });

  el.reuPrimario.addEventListener("change", calcularTotais);
  el.colaboracao.addEventListener("change", calcularTotais);
  el.advogado.addEventListener("change", calcularTotais);

  el.btnPrisao.addEventListener("click", () => gerarTextoResultado("prisao"));
  el.btnPenaParcial.addEventListener("click", () => gerarTextoResultado("penaParcial"));
  el.btnLiberdade.addEventListener("click", () => gerarTextoResultado("liberdade"));
  el.btnMultar.addEventListener("click", () => gerarTextoResultado("multar"));
  el.btnCopiar.addEventListener("click", copiarResultado);

  el.cpf.addEventListener("input", e => {
    e.target.value = aplicarMascaraCPF(e.target.value);
  });
}

function iniciar() {
  gerarListaArtigos();
  registrarEventos();
  calcularTotais();
}

iniciar();
