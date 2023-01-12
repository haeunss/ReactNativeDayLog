import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHeader from '../components/SearchHeader';
import CalendarScreen from './CalendarScreen';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#0081C9',
        inactiveTintColor: '#ddd',
      }}>
      <Tab.Screen
        name="피드"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopColor: '#eee',
            borderTopWidth: 1,
        }
        }}
      />
      <Tab.Screen
        name="캘린더"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopColor: '#eee',
            borderTopWidth: 1,
        }
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
            tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopColor: '#eee',
            borderTopWidth: 1,
        }
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;