import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import Papa from 'papaparse';

export async function loadCorridasData() {
  try {
    const asset = Asset.fromModule(require('../assets/eventos_corrigidos.csv'));
    await asset.downloadAsync(); // Baixa o asset pro cache

    const fileUri = asset.localUri || asset.uri; // URI válida
    const conteudo = await FileSystem.readAsStringAsync(fileUri);

    const resultado = Papa.parse(conteudo, {
      header: true,
      skipEmptyLines: true,
    });

    console.log('🎯 Dados CSV:', resultado.data);
    return resultado.data;
  } catch (err) {
    console.error('❌ Falha ao carregar CSV:', err);
    return [];
  }
}
