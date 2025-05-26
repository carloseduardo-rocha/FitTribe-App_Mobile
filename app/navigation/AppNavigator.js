import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FitTribeLoginScreen from '../login';
import SignupScreen from '../cadastro';
import ForgotPasswordScreen from '../esqueceu-senha';
import VerificationCodeScreen from '../codigo-de-validação';
import ResetPasswordScreen from '../nova-senha';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={FitTribeLoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}