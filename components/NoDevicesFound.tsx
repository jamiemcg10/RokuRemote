import { Dispatch, SetStateAction } from "react"
import { Button } from "react-native"
import { ThemedText } from "./theme/themed-text"

interface NoDevicesFoundProps {
  showAddNew: Dispatch<SetStateAction<boolean>>
}

export default function NoDevicesFound({ showAddNew }: NoDevicesFoundProps) {
  return (
    <>
      <ThemedText style={{ marginVertical: 20, textAlign: "center" }}>
        No devices found
      </ThemedText>
      <Button
        title="Add device manually"
        onPress={() => {
          showAddNew(true)
        }}
      />
    </>
  )
}
