import { IconButton } from "../ui/icon-button"

interface RightBtnProps {
  onPress: () => void
}
export default function RightBtn({ onPress }: RightBtnProps) {
  return <IconButton onPress={onPress} name="chevron-right" size={60} />
}
