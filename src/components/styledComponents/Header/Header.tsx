import React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { CustomText, Icon, IconNames } from 'components';
import { h1M } from 'theme';
import { goBack } from 'navigation';
import styles from './styles';
import { colors } from 'utils';

interface HeaderProps {
  title: string;
  containerStyle?: ViewStyle;
  textStyle: TextStyle;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon.component
        name={IconNames.bIcon}
        size={Icon.iconSizes.LARGE}
        onPress={() => goBack()}
      />
      <CustomText.TextComponent
        typographyStyle={h1M}
        customStyle={[styles.title, textStyle]}
      >
        {title}
      </CustomText.TextComponent>
    </View>
  );
};
