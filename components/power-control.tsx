import { Colors } from "@/constants"
import { useThemeColor } from "@/hooks/use-theme-color"
import Slider from "@react-native-community/slider"
import { useState } from "react"
import { useColorScheme } from "react-native"
import { IconSymbol } from "./ui/icon-symbol"

export default function PowerControl() {
  const powerOffColor = useThemeColor("text")
  const [power, setPower] = useState(0.5)

  const colorScheme = useColorScheme() || "dark"

  return (
    <>
      <IconSymbol name="power" color={powerOffColor} />
      <Slider
        style={{ width: 200, height: 20 }}
        thumbTintColor={Colors[colorScheme].icon}
        minimumValue={0}
        value={power}
        maximumValue={1}
        step={0.5}
        minimumTrackTintColor="gray"
        maximumTrackTintColor="lightgray"
        onValueChange={(e) => {
          setPower(e)
        }}
        onSlidingComplete={() => {
          setPower(0.5)
        }}
      />
      <IconSymbol name="power" color="red" />
    </>
  )
}
