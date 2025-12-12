import { IconButton } from "../ui/icon-button"

interface LeftBtnProps {
  onPress: () => void
}
export default function LeftBtn({ onPress }: LeftBtnProps) {
  return (
    <IconButton
      onPress={onPress}
      name="chevron-right"
      size={60}
      style={{ transform: [{ rotate: "180deg" }] }}
    />
  )
}
