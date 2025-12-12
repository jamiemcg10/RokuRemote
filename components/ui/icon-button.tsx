import { Pressable, StyleSheet } from "react-native"
import { ThemedText } from "../theme/themed-text"
import { IconSymbol, IconSymbolName } from "./icon-symbol"

interface IconButtonProps {
  onPress: () => void
  name?: IconSymbolName
  text?: string
  size?: number
  style?: any
}

export function IconButton({
  onPress,
  name,
  style = {},
  size = 50,
  text,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.base, pressed && styles.pressed]}
    >
      {name ? (
        <IconSymbol
          name={name}
          size={size}
          weight="medium"
          color="white"
          style={{ backgroundColor: "#3b0773", borderRadius: 8, ...style }}
        />
      ) : (
        text && (
          <ThemedText
            style={{
              backgroundColor: "#3b0773",
              height: size,
              width: size,
              fontWeight: 700,
              textAlignVertical: "center",
              textAlign: "center",
              borderRadius: 8,
              ...style,
            }}
          >
            {text}
          </ThemedText>
        )
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
})
