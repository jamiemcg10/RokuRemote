import { IconButton } from "../ui/icon-button"

interface DownBtnProps {
  onPress: () => void
}
export default function DownBtn({ onPress }: DownBtnProps) {
  return (
    <IconButton
      onPress={onPress}
      name="chevron-right"
      size={60}
      style={{ transform: [{ rotate: "90deg" }] }}
    />
  )
}
