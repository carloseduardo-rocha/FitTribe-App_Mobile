import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';

export async function loadCorridasData() {
  try {
    const asset = Asset.fromModule(require('../../assets/eventos_corrigidos.csv'));
    await asset.downloadAsync();

    const fileUri = asset.localUri || asset.uri;

    const conteudo = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    const resultado = Papa.parse(conteudo, {
      header: true,
      skipEmptyLines: true,
    });

    console.log(`🎯 Total de eventos lidos: ${resultado.data.length}`);
    if (resultado.data.length > 0) {
      console.log('👀 Exemplo de evento:', resultado.data[0]);
    } else {
      console.log('🎯 Nenhum evento encontrado no CSV.');
    }

    return resultado.data;
  } catch (err) {
    console.error('❌ Erro ao ler o CSV:', err);
    return [];
  }
}
