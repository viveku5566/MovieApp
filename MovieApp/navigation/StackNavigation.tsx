import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './Types';
import Home from '../pages/Home/Home';
import Detalis from '../pages/Details/Detalis';

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detalis"
        component={Detalis}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};