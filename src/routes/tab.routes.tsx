import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feed from '../screens/Feed'
import New from '../screens/New'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />
        }}
      />

      <Screen
        name="new"
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus" size={size} color={color} />
        }}
      />
    </Navigator>
  )
}