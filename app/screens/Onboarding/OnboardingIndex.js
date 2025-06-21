import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import OnboardingMap from './OnboardingMap';
import OnboardingClima from './OnboardingClima';
import OnboardingHeart from './OnboardingHeart';

export default function OnboardingIndex({ navigation }) {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <WelcomeScreen 
      key="welcome" 
      onNext={() => setCurrentScreen(1)} 
    />,
    <OnboardingMap 
      key="map" 
      onNext={() => setCurrentScreen(2)} 
      onBack={() => setCurrentScreen(0)} 
    />,
    <OnboardingClima
      key="clima"
      onNext={() => setCurrentScreen(3)}
      onBack={() => setCurrentScreen(1)}
    />,
    <OnboardingHeart
      key="heart"
      onNext={() => navigation.navigate('Login')} // Alterado para navigation.navigate
      onBack={() => setCurrentScreen(2)}
    />
  ];

  return screens[currentScreen];
}