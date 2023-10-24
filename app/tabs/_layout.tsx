import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="tab-1"
        options={{
          title: "Home",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="home"
                {...props}
                size={30}
                top={5}
              />
            );
          }
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
      <Tabs.Screen
        name="tab0"
        options={{
          title: "Calorie",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="food-apple"
                {...props}
                size={30}
                top={5}
              />
            );
          }
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
      <Tabs.Screen
        name="tab1"
        options={{
          title: "Vision",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="camera"
                {...props}
                size={30}
                top={5}
              />
            );
          }
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Training",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="dumbbell"
                {...props}
                size={30}
                top={5}
              />
            );
          }

          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
    </Tabs>
  );
}
