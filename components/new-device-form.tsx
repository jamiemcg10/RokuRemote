import { DevicesContext } from "@/contexts/devices-context"
import { useRouter } from "expo-router"
import { useContext, useState } from "react"
import { Button, View } from "react-native"
import { ThemedText } from "./theme/themed-text"
import { ThemedTextInput } from "./theme/themed-text-input"

export default function NewDeviceForm() {
  const { devices, setDevices } = useContext(DevicesContext)
  const router = useRouter()

  const [name, setName] = useState("")
  const [ip, setIp] = useState("")

  function addRoku() {
    if (name && ip) {
      setDevices([...devices, { ip, name }])
    }
  }

  return (
    <>
      <ThemedText style={{ marginBottom: 20 }}>
        Input Roku device info:
      </ThemedText>
      <ThemedText>Name</ThemedText>
      <ThemedTextInput
        value={name}
        onChangeText={setName}
        style={{ borderStyle: "solid", borderWidth: 1 }}
      />
      <ThemedText style={{ marginTop: 10 }}>IP Address</ThemedText>
      <ThemedTextInput
        value={ip}
        onChangeText={setIp}
        style={{ borderStyle: "solid", borderWidth: 1, marginBottom: 10 }}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Add Roku"
          onPress={() => {
            addRoku()
            router.back()
          }}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Button
          title="Cancel"
          onPress={() => {
            addRoku()
            router.back()
          }}
        />
      </View>
      <ThemedText style={{ marginTop: 40 }}>
        To find the IP Address, go to:
      </ThemedText>
      <ThemedText style={{ fontWeight: 700 }}>
        Settings &gt; System &gt; About
      </ThemedText>
    </>
  )
}
