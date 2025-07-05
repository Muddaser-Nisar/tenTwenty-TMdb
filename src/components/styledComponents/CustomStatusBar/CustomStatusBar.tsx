import React from 'react';
import { StatusBar, View, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Define props types
interface CustomStatusBarProps {
    backgroundColor: string;
    barStyle?: StatusBarStyle;
    transition?: 'fade' | 'slide';
    hidden?: boolean;
}

export const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
    backgroundColor,
    barStyle = 'default',
    transition = 'fade',
    hidden = false,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={barStyle}
                showHideTransition={transition}
                hidden={hidden}
            />
        </View>
    );
};
