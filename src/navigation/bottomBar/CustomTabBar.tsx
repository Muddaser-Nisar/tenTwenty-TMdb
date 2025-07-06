import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { CustomText, Icon } from 'components';
import { colors, scale } from 'utils';
import { h1Style, h2Style } from 'theme';
const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : typeof options.title === 'string'
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab]}
          >
            <View style={isFocused ? styles.focusedTab : styles.UnfocusedTab}>
              <Icon.component
                name={label}
                size={Icon.iconSizes.MEDIUM}
                fill={isFocused ? colors.white : colors.InActiveColor}
              />
            </View>
            <CustomText.TextComponent
              customStyle={{
                color: isFocused ? colors.white : colors.InActiveColor,
                marginTop: scale(3),
                letterSpacing: 0.01 * scale(12),
              }}
              typographyStyle={isFocused ? h1Style : h2Style}
            >
              {label}
            </CustomText.TextComponent>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: scale(75),
    backgroundColor: colors.tabColor,
    paddingHorizontal: scale(10),
    borderTopLeftRadius: scale(27),
    borderTopRightRadius: scale(27),
  },
  safeArea: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedTab: {
    width: scale(64),
    height: scale(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(17),
  },
  UnfocusedTab: {
    backgroundColor: 'transparent',
    width: scale(64),
    height: scale(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(17),
  },
});

export default CustomTabBar;
