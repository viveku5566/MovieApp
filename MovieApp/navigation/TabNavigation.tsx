import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../pages/Profile/Profile';
import Favourites from '../pages/Favourites/Favourites';
import Trending from '../pages/Trending/Trending';
import {Image} from 'react-native';
import {ReactNode} from 'react';
import {TabParamList, tabIconProps} from './Types';
import {IMAGES} from '../constants/Images';
import {HomeStack} from './StackNavigation';

const Tab = createBottomTabNavigator<TabParamList>();

export default () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Main"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color, size}: tabIconProps): ReactNode => {
            return (
              <Image
                source={IMAGES.home}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarIcon: ({focused, color, size}: tabIconProps): ReactNode => {
            return (
              <Image
                source={IMAGES.trending}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({focused, color, size}: tabIconProps): ReactNode => {
            return (
              <Image
                source={IMAGES.favourites}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}: tabIconProps): ReactNode => {
            return (
              <Image
                source={IMAGES.profile}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};