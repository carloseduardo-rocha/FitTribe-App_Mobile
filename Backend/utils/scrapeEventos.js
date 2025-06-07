const axios = require('axios');
const cheerio = require('cheerio');

async function buscarEventosCorreCeara() {
  const url = 'https://correceara.com.br/';
  const { data: html } = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; FitTribeBot/1.0)' }
  });

  const $ = cheerio.load(html);

  const linhas = $('body')
    .text()
    .split('\n')
    .map(l => l.trim())
    .filter(l => /^\d{2}\/\d{2}\s*\|/.test(l));

  const eventos = linhas.map(raw => {
    const [dataStr, restoBruto] = raw.split('|').map(s => s.trim());
    const horarioMatch = restoBruto.match(/^(\d{1,2}h\d{2})/);
    if (!horarioMatch) return null;

    const horario = horarioMatch[1];
    let resto = restoBruto.slice(horario.length).trim();

    // Junta tudo: "7KM | KIDS | 2KM" → ["7KM", "KIDS", "2KM"]
    const partes = resto.split('|').map(p => p.trim()).filter(Boolean);

    // Busca onde tá a primeira distância (tipo 3KM, 4.5KM) ou KIDS
    const distRegex = /^(\d+(?:[.,]\d+)?\s?KM|KIDS)$/i;

    let nomePartes = [];
    let distancias = [];
    let local = '';
    let entrouDistancia = false;

    for (let i = 0; i < partes.length; i++) {
      const p = partes[i];

      if (distRegex.test(p)) {
        entrouDistancia = true;
        distancias.push(p.toUpperCase());
      } else if (!entrouDistancia) {
        nomePartes.push(p);
      } else {
        local += (local ? ' ' : '') + p;
      }
    }

    return {
      data: dataStr,
      horario,
      nome: nomePartes.join(' '),
      distancias: distancias.join(' | '),
      local: local.trim()
    };
  }).filter(Boolean);

  return eventos;
}

module.exports = buscarEventosCorreCeara;
