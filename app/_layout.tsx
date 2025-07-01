import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: "#fff",
          paddingTop: 20,
          
        },
        drawerActiveBackgroundColor: "#3b3dbf",
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: "#121212",
        
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerItemStyle: {
            marginBottom: 10,
          },
        }}
      />
      <Drawer.Screen
        name="forms"
        options={{
          drawerLabel: 'Cadastrar Jogadores',
          title: 'Cadastrar Jogadores',
          drawerItemStyle: {
            marginBottom: 10,
          },
        }}
      />
      <Drawer.Screen
        name="merge"
        options={{
          drawerLabel: 'Montar Times',
          title: 'Montar Times',
          drawerItemStyle: {
            marginBottom: 10,
          },
        }}
      />
    </Drawer>
  );
}
