import { launchApp, pressKey } from "@/api/ecp"
import { Device } from "@/app/types"
import { Dispatch, SetStateAction } from "react"
import { Button, StyleSheet, View } from "react-native"

interface RemoteControlProps {
  baseIp: string
  name: string
  setSelected: Dispatch<SetStateAction<Device | undefined>>
}

export default function RemoteControl({
  baseIp,
  name,
  setSelected,
}: RemoteControlProps) {
  function send(key: string) {
    pressKey(baseIp, key)
  }

  function launch(appId: number) {
    launchApp(baseIp, appId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Back" onPress={() => send("back")} />
        <Button title="Home" onPress={() => send("home")} />
      </View>
      <View style={styles.row}>
        <Button title="Up" onPress={() => send("Up")} />
      </View>
      <View style={styles.row}>
        <Button title="Left" onPress={() => send("Left")} />
        <Button title="OK" onPress={() => send("ok")} />
        <Button title="Right" onPress={() => send("Right")} />
      </View>
      <View style={styles.row}>
        <Button title="Down" onPress={() => send("Down")} />
      </View>
      <View style={styles.row}>
        <Button title="Hulu" onPress={() => launch(2285)} />
        <Button title="Netflix" onPress={() => launch(12)} />
        <Button title="Disney+" onPress={() => launch(291097)} />
        <Button title="Prime" onPress={() => launch(13)} />
        <Button title="Peleton" onPress={() => launch(592506)} />
        <Button title="Spotify" onPress={() => launch(22297)} />
      </View>
      <View style={styles.row}>
        <Button
          title={`Disconnect from ${name}`}
          onPress={() => setSelected(undefined)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginVertical: 12,
    gap: 12,
  },
})
