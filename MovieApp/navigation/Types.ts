import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {movideDetailAPI} from '../redux/actions';

/////////////////////////      navigators Props       /////////////////////////
export type TabParamList = {
  Main: undefined;
  Trending: undefined;
  Favourites: undefined;
  Profile: undefined;
};

export type StackParamList = {
  Home: undefined;
  Detalis: {
    item: movideDetailAPI;
  };
};

/////////////////////////      navigators Props       /////////////////////////
export type DetailScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TabParamList, 'Main'>,
  BottomTabScreenProps<StackParamList>
>;

/////////////////////////      tabIcon Props      /////////////////////////
export type tabIconProps = {
  focused: boolean;
  size: number;
  color: string;
};