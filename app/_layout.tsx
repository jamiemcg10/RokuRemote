import "react-native-reanimated"

import NewDeviceForm from "@/components/new-device-form"
import RemoteView from "@/components/remote-view"
import RokuList from "@/components/roku-list"
import { Colors, DEFAULT_DEVICE } from "@/constants"
import { useColorScheme } from "@/hooks/use-color-scheme"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Device } from "../types"

export default function RootLayout() {
  const colorScheme = useColorScheme() || "dark"
  const theme = colorScheme === "light" ? DefaultTheme : DarkTheme

  const [devices, setDevices] = useState([DEFAULT_DEVICE])
  const [addNew, showAddNew] = useState(false)
  const [selected, setSelected] = useState<Device>()

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingVertical: 35,
          paddingHorizontal: 20,
          backgroundColor: Colors[colorScheme].background,
        }}
      >
        {selected && (
          <RemoteView selected={selected} setSelected={setSelected} />
        )}
        {addNew && (
          <NewDeviceForm
            devices={devices}
            setDevices={setDevices}
            showAddNew={showAddNew}
          />
        )}
        {!selected && !addNew && (
          <RokuList
            devices={devices}
            setSelected={setSelected}
            showAddNew={showAddNew}
          />
        )}
      </SafeAreaView>
    </ThemeProvider>
  )
}
