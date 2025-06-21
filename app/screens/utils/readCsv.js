import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export const loadCorridasData = async () => {
  try {
    const asset = Asset.fromModule(require('../../assets/corridas_ce.csv'));
    await asset.downloadAsync();

    const fileUri = asset.localUri || asset.uri;
    const contents = await FileSystem.readAsStringAsync(fileUri);

    console.log('📄 CSV LIDO (100 primeiros chars):', contents.slice(0, 100));

    const linhas = contents.split(/\r?\n/).filter(Boolean);
    const headers = linhas[0].split(',').map(h => h.trim());

    const eventos = linhas.slice(1).map((linha) => {
      const colunas = linha.split(',').map(c => c.trim());
      const evento = {};
      headers.forEach((header, index) => {
        evento[header] = colunas[index] || '';
      });
      return evento;
    });

    console.log('✅ Eventos carregados:', eventos.length);
    return eventos;
  } catch (error) {
    console.error('❌ Erro ao carregar CSV:', error);
    return [];
  }
};
