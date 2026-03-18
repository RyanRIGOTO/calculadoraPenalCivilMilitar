const artigos = {
  leves: [
    { id: '53', artigo: 'Art. 53', nome: 'Pousar aeronaves em local proibido', multa: 14000, tipo: 'leve' },
    { id: '54', artigo: 'Art. 54', nome: 'Poluição sonora', multa: 6900, tipo: 'leve' },
    { id: '56', artigo: 'Art. 56', nome: 'Danos a terceiros', multa: 12000, tipo: 'leve' },
    { id: '108', artigo: 'Art. 108', nome: 'Direção perigosa', multa: 6500, tipo: 'leve' },
    { id: '162', artigo: 'Art. 162', nome: 'Dirigir sem habilitação', multa: 5000, tipo: 'leve' },
    { id: '172', artigo: 'Art. 172', nome: 'Estacionar em local proibido', multa: 2500, tipo: 'leve' },
    { id: '244', artigo: 'Art. 244', nome: 'Pilotar motocicleta sem o uso do capacete', multa: 1500, tipo: 'leve' }
  ],
  medios: [
    { id: '02', artigo: 'Art. 02', nome: 'Uso de máscara', servicos: 10, fianca: 4000, tipo: 'medio' },
    { id: '19', artigo: 'Art. 19', nome: 'Porte de arma branca', servicos: 10, fianca: 5500, tipo: 'medio' },
    { id: '102', artigo: 'Art. 102', nome: 'Fuga', servicos: 10, fianca: 2500, tipo: 'medio' },
    { id: '139', artigo: 'Art. 139', nome: 'Calúnia, difamação e injúria', servicos: 10, fianca: 6000, tipo: 'medio' },
    { id: '147', artigo: 'Art. 147', nome: 'Ameaça', servicos: 15, fianca: 7000, tipo: 'medio' },
    { id: '150', artigo: 'Art. 150', nome: 'Invasão', servicos: 10, fianca: 3300, tipo: 'medio' },
    { id: '165', artigo: 'Art. 165', nome: 'Dirigir sob efeito de álcool/drogas', servicos: 10, fianca: 4500, tipo: 'medio' },
    { id: '173', artigo: 'Art. 173', nome: 'Racha / Corrida ilegal', servicos: 10, fianca: 5100, tipo: 'medio' },
    { id: '251-2', artigo: 'Art. 251 §2', nome: 'Posse/Porte colete balístico', servicos: 10, fianca: 4900, tipo: 'medio' },
    { id: '287', artigo: 'Art. 287', nome: 'Apologia ao crime', servicos: 5, fianca: 6100, tipo: 'medio' },
    { id: '289', artigo: 'Art. 289', nome: 'Posse de dinheiro sujo', servicos: 5, fianca: 2000, tipo: 'medio' },
    { id: '330', artigo: 'Art. 330', nome: 'Desobediência', servicos: 10, fianca: 8000, tipo: 'medio' },
    { id: '331', artigo: 'Art. 331', nome: 'Desacato', servicos: 10, fianca: 13000, tipo: 'medio' },
    { id: '333', artigo: 'Art. 333', nome: 'Tentativa de suborno', servicos: 15, fianca: 6000, tipo: 'medio' }
  ],
  graves: [
    { id: '14', artigo: 'Art. 14', nome: 'Mal uso de arma com porte', servicos: 20, fianca: 5000, tipo: 'grave' },
    { id: '33', artigo: 'Art. 33', nome: 'Tráfico de drogas', servicos: 10, fianca: 4200, tipo: 'grave' },
    { id: '129', artigo: 'Art. 129', nome: 'Lesão corporal', servicos: 10, fianca: 4000, tipo: 'grave' },
    { id: '157-2', artigo: 'Art. 157 §2', nome: 'Furto', servicos: 10, fianca: 6000, tipo: 'grave' },
    { id: '157-3', artigo: 'Art. 157 §3', nome: 'Roubo a caixa registradora', servicos: 10, fianca: 2900, tipo: 'grave' },
    { id: '157-4', artigo: 'Art. 157 §4', nome: 'Roubo a caixa eletrônico', servicos: 10, fianca: 4000, tipo: 'grave' },
    { id: '158', artigo: 'Art. 158', nome: 'Extorsão', servicos: 10, fianca: 5200, tipo: 'grave' },
    { id: '180', artigo: 'Art. 180', nome: 'Receptação', servicos: 10, fianca: 5000, tipo: 'grave' },
    { id: '251', artigo: 'Art. 251', nome: 'Posse/Porte de explosivos', servicos: 5, fianca: 3300, tipo: 'grave' },
    { id: '288', artigo: 'Art. 288', nome: 'Associação criminosa', servicos: 10, fianca: 3500, tipo: 'grave' },
    { id: '298', artigo: 'Art. 298', nome: 'Falsificação de documentos', servicos: 10, fianca: 3500, tipo: 'grave' },
    { id: '299', artigo: 'Art. 299', nome: 'Falsidade ideológica', servicos: 10, fianca: 4000, tipo: 'grave' },
    { id: '334', artigo: 'Art. 334', nome: 'Contrabando (itens ilegais)', servicos: 10, fianca: 4000, tipo: 'grave' },
    { id: '342', artigo: 'Art. 342', nome: 'Falso testemunho', servicos: 10, fianca: 10000, tipo: 'grave' },
    { id: '358', artigo: 'Art. 358', nome: 'Obstrução de justiça', servicos: 15, fianca: 5000, tipo: 'grave' },
    { id: '520', artigo: 'Art. 520', nome: 'Multas pendentes', servicos: 10, fianca: 4000, tipo: 'grave' }
  ],
  gravissimos: [
    { id: '15', artigo: 'Art. 15', nome: 'Posse/Porte ilegal de arma de baixo calibre', servicos: 10, tipo: 'gravissimo' },
    { id: '16', artigo: 'Art. 16', nome: 'Posse/Porte de arma de alto calibre', servicos: 20, tipo: 'gravissimo' },
    { id: '16-1', artigo: 'Art. 16 §1', nome: 'Posse/Porte de arma restrita', servicos: 30, tipo: 'gravissimo' },
    { id: '18', artigo: 'Art. 18', nome: 'Tráfico de armas', servicos: 20, tipo: 'gravissimo' },
    { id: '33-int', artigo: 'Art. 33', nome: 'Tráfico internacional', servicos: 15, tipo: 'gravissimo' },
    { id: '57', artigo: 'Art. 57', nome: 'Posse/Porte ilegal de munições', servicos: 10, tipo: 'gravissimo' },
    { id: '59', artigo: 'Art. 59', nome: 'Roubo a bancos', servicos: 20, tipo: 'gravissimo' },
    { id: '60', artigo: 'Art. 60', nome: 'Roubo à joalheria', servicos: 20, tipo: 'gravissimo' },
    { id: '92-1', artigo: 'Art. 92 §1', nome: 'Simulacro de arma', servicos: 10, tipo: 'gravissimo' },
    { id: '129-1', artigo: 'Art. 129 §1', nome: 'Tentativa de homicídio', servicos: 10, tipo: 'gravissimo' },
    { id: '148', artigo: 'Art. 148', nome: 'Sequestro', servicos: 20, tipo: 'gravissimo' },
    { id: '148-1', artigo: 'Art. 148 §1', nome: 'Extorsão mediante sequestro', servicos: 25, tipo: 'gravissimo' },
    { id: '157-1', artigo: 'Art. 157 §1', nome: 'Roubo', servicos: 15, tipo: 'gravissimo' },
    { id: '157-5', artigo: 'Art. 157 §5', nome: 'Homicídio', servicos: 25, tipo: 'gravissimo' },
    { id: '157-6', artigo: 'Art. 157 §6', nome: 'Latrocínio', servicos: 30, tipo: 'gravissimo' },
    { id: '157-7', artigo: 'Art. 157 §7', nome: 'Roubo ao Nióbio / Galinheiro', servicos: 20, tipo: 'gravissimo' },
    { id: '157-8', artigo: 'Art. 157 §8', nome: 'Roubo a loja de conv./armas', servicos: 15, tipo: 'gravissimo' },
    { id: '157-9', artigo: 'Art. 157 §9', nome: 'Roubo a residência', servicos: 15, tipo: 'gravissimo' },
    { id: '171', artigo: 'Art. 171', nome: 'Estelionato', servicos: 10, tipo: 'gravissimo' },
    { id: '351', artigo: 'Art. 351', nome: 'Fuga da prisão / Resgate', servicos: 15, tipo: 'gravissimo' }
  ]
};

const todasCategorias = Object.values(artigos).flat();
const estado = { selecionados: [] };

const el = {
  busca: document.getElementById('busca'),
  nome: document.getElementById('nome'),
  cpf: document.getElementById('cpf'),
  artigosSelecionados: document.getElementById('artigosSelecionados'),
  totalServicos: document.getElementById('totalServicos'),
  totalMulta: document.getElementById('totalMulta'),
  totalFianca: document.getElementById('totalFianca'),
  reuPrimario: document.getElementById('reuPrimario'),
  colaboracao: document.getElementById('colaboracao'),
  advogado: document.getElementById('advogado'),
  saida: document.getElementById('saida'),
  saidaTitulo: document.getElementById('saidaTitulo'),
  saidaDescricao: document.getElementById('saidaDescricao'),
  textoResultado: document.getElementById('textoResultado')
};

function moeda(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0);
}

function normalizar(txt) {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderLista(categoria, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  artigos[categoria].forEach(item => {
    const div = document.createElement('div');
    div.className = 'crime-item';
    div.dataset.search = normalizar(`${item.artigo} ${item.nome}`);
    div.innerHTML = `
      <label>
        <input type="checkbox" value="${item.id}">
        <div>
          <strong>${item.artigo} ${item.nome}</strong>
          <div class="meta">
            <span>${item.servicos ? `Serviços: ${item.servicos}` : 'Sem serviços'}</span>
            <span>${item.multa ? `Multa: ${moeda(item.multa)}` : 'Sem multa'}</span>
            <span>${item.fianca ? `Fiança: ${moeda(item.fianca)}` : 'Sem fiança'}</span>
          </div>
        </div>
      </label>
    `;
    container.appendChild(div);
  });
}

function renderTudo() {
  renderLista('leves', 'lista-leves');
  renderLista('medios', 'lista-medios');
  renderLista('graves', 'lista-graves');
  renderLista('gravissimos', 'lista-gravissimos');
}

function selecionarMarcados() {
  const checks = document.querySelectorAll('.crime-item input:checked');
  checks.forEach(check => {
    const item = todasCategorias.find(a => a.id === check.value);
    if (item && !estado.selecionados.some(s => s.id === item.id)) {
      estado.selecionados.push(item);
    }
    check.checked = false;
  });
  atualizarResumo();
}

function atualizarResumo() {
  const artigosTexto = estado.selecionados.map(i => `${i.artigo} ${i.nome}`);
  const totalServicosBase = estado.selecionados.reduce((acc, item) => acc + (item.servicos || 0), 0);
  const totalMulta = estado.selecionados.reduce((acc, item) => acc + (item.multa || 0), 0);
  const totalFianca = estado.selecionados.reduce((acc, item) => acc + (item.fianca || 0), 0);
  const penaReduzida = calcularPenaReduzida(totalServicosBase);

  el.artigosSelecionados.innerHTML = artigosTexto.length
    ? artigosTexto.map((txt, idx) => `${idx + 1}. ${txt}`).join('<br>')
    : '<span class="marcador-aviso">Nenhum artigo adicionado.</span>';

  el.totalServicos.textContent = `${penaReduzida} meses`;
  el.totalMulta.textContent = moeda(totalMulta);
  el.totalFianca.textContent = moeda(totalFianca);
}

function calcularPenaReduzida(totalServicos) {
  let redutores = 0;

  if (el.reuPrimario.checked) redutores += 1;
  if (el.colaboracao.checked) redutores += 1;
  if (el.advogado.checked) redutores += 1;

  redutores = Math.min(redutores, 3);
  const fator = redutores * (1 / 6);

  return Math.max(0, Math.round(totalServicos * (1 - fator)));
}

function obterTotais() {
  const totalServicosBase = estado.selecionados.reduce((acc, item) => acc + (item.servicos || 0), 0);
  const totalMulta = estado.selecionados.reduce((acc, item) => acc + (item.multa || 0), 0);
  const totalFianca = estado.selecionados.reduce((acc, item) => acc + (item.fianca || 0), 0);
  const penaReduzida = calcularPenaReduzida(totalServicosBase);
  return { totalServicosBase, penaReduzida, totalMulta, totalFianca };
}

function gerarTexto(tipo) {
  const nome = el.nome.value.trim() || '-';
  const cpf = el.cpf.value.trim() || '-';
  const artigosTexto = estado.selecionados.length
    ? estado.selecionados.map(item => `${item.artigo} ${item.nome}`).join('; ')
    : '-';
  const { penaReduzida, totalMulta, totalFianca } = obterTotais();

  const modelos = {
    prisao: {
      titulo: 'PRISÃO',
      descricao: 'Indivíduo será encaminhado à prisão para cumprir sua pena.'
    },
    pena_parcial: {
      titulo: 'PENA PARCIAL',
      descricao: 'Indivíduo encaminhado à prisão com redução conforme parâmetros marcados e pagamento das partes afiançáveis.'
    },
    liberdade: {
      titulo: 'LIBERDADE',
      descricao: 'Indivíduo segue em liberdade por pagamento total da fiança.'
    },
    multar: {
      titulo: 'MULTAR',
      descricao: 'Indivíduo será autuado de acordo com suas infrações.'
    }
  };

  const m = modelos[tipo];
  return `${m.titulo}\n\n${m.descricao}\n\nNome: ${nome}\nCPF: ${cpf}\nArtigos: ${artigosTexto}\nPena (meses): ${penaReduzida}\nMulta: ${moeda(totalMulta)}\nFiança: ${moeda(totalFianca)}`;
}

function mostrarResultado(tipo) {
  if (!estado.selecionados.length) {
    el.saida.classList.remove('hidden');
    el.saidaTitulo.textContent = 'Erro';
    el.saidaDescricao.textContent = 'Adicione ao menos um artigo antes de gerar o resultado.';
    el.textoResultado.textContent = 'Nenhum artigo selecionado.';
    return;
  }
  const modelos = {
    prisao: 'Indivíduo será encaminhado à prisão para cumprir sua pena.',
    pena_parcial: 'Indivíduo encaminhado à prisão com redução conforme parâmetros marcados e pagamento das partes afiançáveis.',
    liberdade: 'Indivíduo segue em liberdade por pagamento total da fiança.',
    multar: 'Indivíduo será autuado de acordo com suas infrações.'
  };
  el.saida.classList.remove('hidden');
  el.saidaTitulo.textContent = tipo.replace('_', ' ').toUpperCase();
  el.saidaDescricao.textContent = modelos[tipo];
  el.textoResultado.textContent = gerarTexto(tipo);
}

function limparTudo() {
  estado.selecionados = [];
  el.nome.value = '';
  el.cpf.value = '';
  el.busca.value = '';
  el.reuPrimario.checked = false;
  el.colaboracao.checked = false;
  el.advogado.checked = false;
  document.querySelectorAll('.crime-item').forEach(item => item.style.display = 'block');
  document.querySelectorAll('.crime-item input').forEach(input => input.checked = false);
  el.saida.classList.add('hidden');
  atualizarResumo();
}

function filtrarLista() {
  const termo = normalizar(el.busca.value.trim());
  document.querySelectorAll('.crime-item').forEach(item => {
    item.style.display = item.dataset.search.includes(termo) ? 'block' : 'none';
  });
}

renderTudo();
atualizarResumo();

document.getElementById('btn-adicionar-selecionados').addEventListener('click', selecionarMarcados);
document.getElementById('btn-limpar').addEventListener('click', limparTudo);
document.querySelectorAll('[data-resultado]').forEach(btn => {
  btn.addEventListener('click', () => mostrarResultado(btn.dataset.resultado));
});
document.getElementById('btn-copiar').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(el.textoResultado.textContent);
    alert('Texto copiado.');
  } catch {
    alert('Não foi possível copiar automaticamente.');
  }
});
el.busca.addEventListener('input', filtrarLista);
[el.reuPrimario, el.colaboracao, el.advogado].forEach(cb => cb.addEventListener('change', atualizarResumo));
