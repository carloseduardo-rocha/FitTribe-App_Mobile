import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

const MapScreen = () => {
  const initialRegion = {
    latitude: -3.71722, // Fortaleza
    longitude: -38.5433,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={[]}
        showsUserLocation={true}
        showsCompass={true}
        showsScale={true}
        loadingEnabled={true}
        // OpenStreetMap (tiles padrão no Android, mas se quiser custom usar "urlTemplate")
        // Exemplo abaixo seria se você quiser mudar o visual com tiles:
        tileOverlay={{
            urlTemplate: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zIndex: 1,
        }}
      >
        <Marker
          coordinate={{
            latitude: -3.71722,
            longitude: -38.5433,
          }}
          title="Evento Exemplo"
          description="Praça da Imprensa"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;