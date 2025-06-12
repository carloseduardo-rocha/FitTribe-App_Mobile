import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FitTribeLoginScreen from '../screens/authentication/login';
import SignupScreen from '../screens/authentication/cadastro';
import ForgotPasswordScreen from '../screens/authentication/esqueceu-senha';
import VerificationCodeScreen from '../screens/authentication/codigo-de-validação';
import ResetPasswordScreen from '../screens/authentication/nova-senha';
import HomeScreen from '../screens/Home/HomeScreen'; 
import MapScreen from '../screens/Map/MapScreen';
import OnboardingIndex from '../screens/Onboarding/OnboardingIndex';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingIndex} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={FitTribeLoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}