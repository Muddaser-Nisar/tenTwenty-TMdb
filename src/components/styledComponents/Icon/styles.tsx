import React from 'react';
import { View, ViewStyle } from 'react-native';
import { scale } from 'utils';

// Define the icon size variants as a TypeScript enum
export enum ICON_SIZE_VARIANTS {
    X_SMALL = 'xs',
    V_X_SMALL = 'vxs',

    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
    X_LARGE = 'xlg',
    HUGE = 'huge',
    MEGA = 'mega',
}

// Define the icon sizes with the appropriate scaling
export const ICON_SIZE: Record<ICON_SIZE_VARIANTS, number> = {
    [ICON_SIZE_VARIANTS.X_SMALL]: scale(12),
    [ICON_SIZE_VARIANTS.SMALL]: scale(18),
    [ICON_SIZE_VARIANTS.MEDIUM]: scale(20),
    [ICON_SIZE_VARIANTS.LARGE]: scale(28),
    [ICON_SIZE_VARIANTS.X_LARGE]: scale(72),
    [ICON_SIZE_VARIANTS.HUGE]: scale(96),
    [ICON_SIZE_VARIANTS.MEGA]: scale(144),
    [ICON_SIZE_VARIANTS.V_X_SMALL]: scale(8),
};

// Define the props interface for IconWrapper
interface IconWrapperProps {
    size: ICON_SIZE_VARIANTS;
    height?: number;
    width?: number;
    marginLeft?: number;
    marginRight?: number;
    children?: React.ReactNode; // Optional: if you want to nest other components inside
}

// Create the IconWrapper component
export const IconWrapper: React.FC<IconWrapperProps> = ({ size, height, width, marginLeft, marginRight, children }) => {
    // Style object for the View component
    const style = {
        height: height ?? ICON_SIZE[size],
        width: width ?? ICON_SIZE[size],
        marginLeft: marginLeft ?? 0,
        marginRight: marginRight ?? 0,
    };

    // Return a properly typed ReactNode (which is the View component with children)
    return (
        <View style={[style, { alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }]}>{children}</View>
    );
};
