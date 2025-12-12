import { IconButton } from "../ui/icon-button"

interface UpBtnProps {
  onPress: () => void
}
export default function UpBtn({ onPress }: UpBtnProps) {
  return (
    <IconButton
      onPress={onPress}
      name="chevron-right"
      size={60}
      style={{ transform: [{ rotate: "-90deg" }] }}
    />
  )
}
