// navigation/EventDetailNavigator.js
import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { EventContext } from '../EventContext';

import PlayerListScreen from '../screens/Player/PlayerListScreen.js';
import MatchListScreen from '../screens/Match/MatchListScreen.js'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const EventDetailNavigator = ({navigation, route}) => {
  const {dayId, eventDayName} = route.params;
  const {eventName} = useContext(EventContext)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            {eventName}
          </Text>
          <Text style={styles.headerSubtitle} numberOfLines={1} ellipsizeMode="tail">
            {eventDayName}
          </Text>
        </View>
      ),
    });
  }, [navigation, eventName, eventDayName]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MatchList"
        component={MatchListScreen}
        options={{ title: 'Match List', headerShown: false }} // Menyembunyikan header Stack.Navigator
        initialParams={{ dayId }}
      />
      <Tab.Screen
        name="PlayerList"
        component={PlayerListScreen}
        options={{ title: 'Player List', headerShown: false  }}
        initialParams={{ dayId }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});

export default EventDetailNavigator;