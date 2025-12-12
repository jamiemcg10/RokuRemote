import "react-native-reanimated"

import { pressKey } from "@/api/ecp"
import { IconButton } from "@/components/IconButton"
import NewDeviceForm from "@/components/NewDeviceForm"
import NoDevicesFound from "@/components/NoDevicesFound"
import RemoteControl from "@/components/RemoteControl"
import { ThemedText } from "@/components/theme/themed-text"
import { useColorScheme } from "@/hooks/use-color-scheme"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useState } from "react"
import { Button, FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Device } from "./types"

const DEFAULT_DEVICE = {
  ip: "192.168.12.185",
  name: "Zuko",
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme

  function addRoku(args?: { name: string; ip: string }) {
    if (args) {
      const { name, ip } = args
      setDevices([...devices, { ip, name }])
    }

    showAddNew(false)
  }

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
          backgroundColor: theme.colors.background,
        }}
      >
        {selected && (
          <>
            <View
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ThemedText
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  height: "100%",
                  fontWeight: 600,
                }}
              >
                Connected to {selected.name}
              </ThemedText>
              <View style={{ width: "auto" }}>
                <IconButton
                  name="search"
                  size={30}
                  onPress={() => pressKey(selected.ip, "FindRemote")}
                />
              </View>
            </View>

            <RemoteControl
              baseIp={selected.ip}
              name={selected.name}
              setSelected={setSelected}
            />
          </>
        )}
        {addNew && <NewDeviceForm addRoku={addRoku} />}
        {!selected && !addNew && (
          <>
            <ThemedText
              style={{
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Rokus
            </ThemedText>
            <FlatList
              data={devices}
              keyExtractor={(item) => item.ip}
              renderItem={({ item }) => (
                <View style={{ marginVertical: 5 }}>
                  <Button
                    title={`${item.name} (${item.ip})`}
                    onPress={() => setSelected(item)}
                  />
                </View>
              )}
            ></FlatList>

            {(true || !devices.length) && (
              <NoDevicesFound showAddNew={showAddNew} />
            )}
          </>
        )}
      </SafeAreaView>
    </ThemeProvider>
  )
}
