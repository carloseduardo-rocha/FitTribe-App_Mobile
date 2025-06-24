import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';

// Caminho destino no dispositivo (sandbox)
const LOCAL_PATH = FileSystem.documentDirectory + 'eventos_corrigidos.csv';

export async function loadCorridasData() {
  try {
    // Copia o arquivo do bundle (assets) para a pasta local
    await FileSystem.copyAsync({
      from: FileSystem.asset('assets/eventos_corrigidos.csv'),
      to: LOCAL_PATH,
    });

    // Lê o arquivo local em seguida
    const conteudo = await FileSystem.readAsStringAsync(LOCAL_PATH);

    const resultado = Papa.parse(conteudo, {
      header: true,
      skipEmptyLines: true,
    });

    console.log('🎯 Dados CSV (PLANO B):', resultado.data);
    return resultado.data;
  } catch (err) {
    console.error('❌ Falha no Plano B ao carregar CSV:', err);
    return [];
  }
}
