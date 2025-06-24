import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, SafeAreaView } from 'react-native';

const WelcomeScreen = ({ onNext }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // Alterado de 0.9 para 0.8 para um efeito mais perceptível
  const slideAnim = useRef(new Animated.Value(20)).current; // Novo efeito de deslize

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4, // Ajustado para um efeito mais suave
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        style={{ 
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: slideAnim }]
        }}
      >
        <Image
          source={require('../assets/logo-fit-tribe.png')}
          style={styles.icon}
        />

        <Text style={styles.logo}>
          <Text style={styles.logoWhite}>Fit</Text>
          <Text style={styles.logoRed}>Tribe</Text>
        </Text>

        <Text style={styles.subtitle}>Venha nos conhecer!</Text>
      </Animated.View>

      <Animated.View
        style={{ 
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          width: '100%',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity 
          style={styles.button} 
          onPress={onNext}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  logoWhite: {
    color: '#fff',
  },
  logoRed: {
    color: '#D43F59',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;