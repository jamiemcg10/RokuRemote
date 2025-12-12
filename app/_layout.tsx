import "react-native-reanimated"

import { Colors, DEFAULT_DEVICE } from "@/constants"
import { DevicesContext } from "@/contexts/devices-context"
import { useColorScheme } from "@/hooks/use-color-scheme"
import { Device } from "@/types"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { Slot } from "expo-router"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

export default function RootLayout() {
  const colorScheme = useColorScheme() || "dark"
  const theme = colorScheme === "light" ? DefaultTheme : DarkTheme

  const [devices, setDevices] = useState([DEFAULT_DEVICE])
  const [selected, setSelected] = useState<Device>()

  return (
    <ThemeProvider value={theme}>
      <DevicesContext.Provider
        value={{ devices, setDevices, selected, setSelected }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            paddingVertical: 35,
            paddingHorizontal: 20,
            backgroundColor: Colors[colorScheme].background,
          }}
        >
          <Slot />
        </SafeAreaView>
      </DevicesContext.Provider>
    </ThemeProvider>
  )
}
