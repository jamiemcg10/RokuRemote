import { pressKey } from "@/api/ecp"
import { Device } from "@/app/types"
import { Dispatch, SetStateAction } from "react"
import { View } from "react-native"
import RemoteControl from "./remote-control"
import { ThemedText } from "./theme/themed-text"
import { IconButton } from "./ui/icon-button"

interface RemoteViewProps {
  selected: Device
  setSelected: Dispatch<SetStateAction<Device | undefined>>
}

export default function RemoteView({ selected, setSelected }: RemoteViewProps) {
  return (
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
  )
}
