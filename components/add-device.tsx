import { DevicesContext } from "@/contexts/devices-context"
import { useRouter } from "expo-router"
import { useContext } from "react"
import { Button } from "react-native"
import { ThemedText } from "./theme/themed-text"

export default function AddDevice() {
  const router = useRouter()
  const { devices } = useContext(DevicesContext)

  return (
    <>
      {!devices.length && (
        <ThemedText style={{ marginVertical: 20, textAlign: "center" }}>
          No devices found
        </ThemedText>
      )}
      <Button
        title="Add device manually"
        onPress={() => {
          router.push("/add-roku")
        }}
      />
    </>
  )
}
