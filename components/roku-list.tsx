import { DevicesContext } from "@/contexts/devices-context"
import { useRouter } from "expo-router"
import { useContext } from "react"
import { Button, FlatList, View } from "react-native"
import AddDevice from "./add-device"
import { ThemedText } from "./theme/themed-text"

export default function RokuList() {
  const { devices, setSelected } = useContext(DevicesContext)
  const router = useRouter()

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
              onPress={() => {
                setSelected(item)
                router.push("/remote")
              }}
            />
          </View>
        )}
      ></FlatList>
      <AddDevice />
    </>
  )
}
