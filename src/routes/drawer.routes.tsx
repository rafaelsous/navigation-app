import { Feather } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { TabRoutes } from './tab.routes'
import { StackRoutes } from './stack.routes'

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes() {
  return (
    <Navigator
      screenOptions={{
        title: '',
      }}
    >
      <Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          drawerLabel: 'Início'
        }}
      />

      <Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          drawerLabel: 'Meu Perfil'
        }}
      />
    </Navigator>
  )
}