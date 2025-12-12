import { TextInput, type TextInputProps } from "react-native"

import { useThemeColor } from "@/hooks/use-theme-color"

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedTextInputProps) {
  const color = useThemeColor({ light: darkColor, dark: lightColor }, "text")

  return (
    <TextInput
      style={[{ color, borderColor: color, borderWidth: 1 }, style]}
      {...otherProps}
    />
  )
}
