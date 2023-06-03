import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../screens/Profile'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="home"
        component={Profile}
      />
    </Navigator>
  )
}