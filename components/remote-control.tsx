import { launchApp, pressKey } from "@/api/ecp"
import { Device } from "@/app/types"
import { Dispatch, SetStateAction } from "react"
import { Button, StyleSheet, View } from "react-native"
import { IconButton } from "./IconButton"
import PowerControl from "./power-control"

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
      <View
        style={{
          ...styles.row,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <PowerControl />
      </View>
      <View
        style={{
          ...styles.row,
          marginVertical: 10,
          marginBottom: 20,
          paddingHorizontal: 30,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton onPress={() => send("back")} size={40} name="arrow-back" />
        <IconButton onPress={() => send("home")} size={40} name="home" />
      </View>
      <View style={styles.row}>
        <IconButton
          onPress={() => send("Up")}
          name="chevron-right"
          size={60}
          style={{ transform: [{ rotate: "-90deg" }] }}
        />
      </View>
      <View style={{ ...styles.row, columnGap: 20, marginVertical: 8 }}>
        <IconButton
          onPress={() => send("Left")}
          name="chevron-right"
          size={60}
          style={{ transform: [{ rotate: "180deg" }] }}
        />

        <IconButton onPress={() => send("Select")} text="OK" size={70} />

        <IconButton
          onPress={() => send("Right")}
          name="chevron-right"
          size={60}
        />
      </View>
      <View style={styles.row}>
        <IconButton
          onPress={() => send("Down")}
          name="chevron-right"
          size={60}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </View>

      <View style={styles.grid}>
        <Button title="Hulu" color="#1ce783" onPress={() => launch(2285)} />
        <Button title="Netflix" color="red" onPress={() => launch(12)} />
        <Button
          title="Disney+"
          color="#0a1225"
          onPress={() => launch(291097)}
        />
        <Button title="Prime" color="#0072f9" onPress={() => launch(13)} />
        <Button title="Peleton" color="black" onPress={() => launch(592506)} />
        <Button title="Spotify" color="green" onPress={() => launch(22297)} />
      </View>
      <View style={{ ...styles.row, marginTop: "auto" }}>
        <Button
          title={`Disconnect from ${name}`}
          color="gray"
          onPress={() => setSelected(undefined)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    alignItems: "center",
    flexGrow: 1,
    display: "flex",
  },
  row: {
    flexDirection: "row",
    marginVertical: 12,
    gap: 12,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "20%",
    columnGap: 50,
    rowGap: 25,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
})
