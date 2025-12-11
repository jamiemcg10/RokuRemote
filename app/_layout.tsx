import "react-native-reanimated"

import RemoteControl from "@/components/RemoteControl"
import { useColorScheme } from "@/hooks/use-color-scheme"
import { useState } from "react"
import { Button, FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Device } from "./types"

export const unstable_settings = {
  anchor: "(tabs)",
}

const DEFAULT_DEVICE = {
  ip: "192.168.12.185",
  name: "Zuko",
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [devices, setDevices] = useState([DEFAULT_DEVICE])
  const [selected, setSelected] = useState<Device>()

  if (selected) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Connected to {selected.name}`
        </Text>
        <RemoteControl
          baseIp={selected.ip}
          name={selected.name}
          setSelected={setSelected}
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.ip}
        renderItem={({ item }) => (
          <Button
            title={`${item.name} (${item.ip})`}
            onPress={() => setSelected(item)}
          />
        )}
      ></FlatList>

      {(true || !devices.length) && (
        <>
          <Text style={{ marginTop: 20, textAlign: "center" }}>
            No devices found
          </Text>
          <Button title="Add device manually" onPress={() => {}} />
        </>
      )}
    </SafeAreaView>
  )

  // return (
  //   <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //       <Stack.Screen
  //         name="modal"
  //         options={{ presentation: "modal", title: "Modal" }}
  //       />
  //     </Stack>
  //     <StatusBar style="auto" />
  //   </ThemeProvider>
  // );
}
