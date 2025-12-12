import { useState } from "react"
import { Button, View } from "react-native"
import { ThemedText } from "./theme/themed-text"
import { ThemedTextInput } from "./theme/themed-text-input"

interface NewDeviceFormProps {
  addRoku: (args?: { name: string; ip: string }) => void
}

export default function NewDeviceForm({ addRoku }: NewDeviceFormProps) {
  const [name, setName] = useState("")
  const [ip, setIp] = useState("")

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
            addRoku({ name, ip })
          }}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Button title="Cancel" onPress={() => addRoku()} />
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
