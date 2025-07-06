/**
 * `TextComponent` is a customizable text display component.
 *
 * Props:
 * - `typographyStyle` (optional): Style object for typography (e.g., font size, weight).
 * - `customStyle` (optional): Additional custom style object to override or add styles.
 * - `children`: The text content to display within the component.
 *
 * Features:
 * - Combines `typographyStyle` and `customStyle` to apply multiple styles to the text.
 * - Renders text with the ability to customize both standard typography and additional styles.
 */
import React from 'react';
import { Text, TextStyle } from 'react-native';
interface TextComponentProps extends React.ComponentProps<typeof Text> {
  typographyStyle?: TextStyle; // Typography styles
  customStyle?: TextStyle | TextStyle[];
  children: React.ReactNode;
}
export const TextComponent: React.FC<TextComponentProps> = ({
  typographyStyle,
  customStyle,
  children,

  ...rest // Collect any additional props
}) => {
  return (
    <Text style={[typographyStyle, customStyle]} {...rest}>
      {children}
    </Text>
  );
};
