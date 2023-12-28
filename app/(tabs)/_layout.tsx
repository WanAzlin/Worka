import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={30} color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="toy-brick-search" size={30} color={color} />,
          headerTitle: "Programs",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="black" />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="dingding-o" size={35} color="#8A74FC" />,
        }}
      />
      <Tabs.Screen
        name="trend"
        options={{
          title: '',
          
          tabBarIcon: ({ color }) => <FontAwesome name="qq" size={30} color={color} />,
          headerTitle: "Trending",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="black" />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-reactivate" size={30} color={color}  />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
