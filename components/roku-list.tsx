import { Device } from "@/app/types"
import { Dispatch, SetStateAction } from "react"
import { Button, FlatList, View } from "react-native"
import NoDevicesFound from "./no-devices-found"
import { ThemedText } from "./theme/themed-text"

interface RokuListProps {
  devices: Device[]
  setSelected: Dispatch<SetStateAction<Device | undefined>>
  showAddNew: Dispatch<SetStateAction<boolean>>
}
export default function RokuList({
  devices,
  setSelected,
  showAddNew,
}: RokuListProps) {
  return (
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
      {(true || !devices.length) && <NoDevicesFound showAddNew={showAddNew} />}
    </>
  )
}
