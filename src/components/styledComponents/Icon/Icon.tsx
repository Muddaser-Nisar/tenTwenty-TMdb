/**
 * `IconComponent` is a versatile SVG icon renderer that supports various configurations.
 * Features:
 * - Renders SVG icons based on the `name` prop by selecting from `IconLibrary`.
 * - Supports dynamic sizing, rotation, and margin adjustments.
 * - Uses `IconWrapper` for additional styling and layout adjustments.
 *
 * `Icon` is an object that provides:
 * - `component`: The `IconComponent` for rendering icons.
 * - `iconNames`: A set of available icon names.
 * - `iconSizes`: Available size variants for icons.
 */

import React from 'react';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { IconLibrary, IconNames } from './availableIcons';
import { ICON_SIZE, ICON_SIZE_VARIANTS, IconWrapper } from './styles';

const IconComponent = ({
  height,
  marginLeft,
  marginRight,
  name,
  rotation,
  size = ICON_SIZE_VARIANTS.MEDIUM,
  style,
  width,
  testID,
  ...rest
}: Partial<SvgProps> & {
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  name: string;
  rotation?: number;
  size: ICON_SIZE_VARIANTS;
  style?: ViewStyle;
  testID?: string;
  width?: number;
}): JSX.Element => {
  const IconSvg = IconLibrary[name];
  const dimensions = {
    height: height ?? ICON_SIZE[size],
    width: width ?? ICON_SIZE[size],
  };

  return (
    <IconWrapper
      size={size}
      height={dimensions.height}
      marginLeft={marginLeft}
      marginRight={marginRight}
      style={[{ transform: [{ rotate: `${rotation || 0}deg` }] }, style]}
      testID={testID}
      width={dimensions.width}
    >
      <IconSvg {...rest} width="100%" height="100%" />
    </IconWrapper>
  );
};

export const Icon: {
  component: typeof IconComponent;
  iconNames: typeof IconNames;
  iconSizes: typeof ICON_SIZE_VARIANTS;
} = {
  component: IconComponent,
  iconNames: IconNames,
  iconSizes: ICON_SIZE_VARIANTS,
};
