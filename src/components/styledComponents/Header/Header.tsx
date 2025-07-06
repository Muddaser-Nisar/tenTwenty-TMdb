// import React from 'react';
// import { View, ViewStyle, TextStyle } from 'react-native';
// import { CustomText, Icon, IconNames } from 'components';
// import { h1M } from 'theme';
// import { goBack } from 'navigation';
// import styles from './styles';

// interface HeaderProps {
//   title: string;
//   containerStyle?: ViewStyle;
//   textStyle: TextStyle;
// }

// export const Header: React.FC<HeaderProps> = ({
//   title,
//   containerStyle,
//   textStyle,
// }) => {
//   return (
//     <View style={[styles.container, containerStyle]}>
//       <Icon.component
//         name={IconNames.bacKIcon}
//         size={Icon.iconSizes.SMALL}
//         onPress={() => goBack()}
//       />
//       <CustomText.TextComponent
//         typographyStyle={h1M}
//         customStyle={[styles.title, textStyle]}
//       >
//         {title}
//       </CustomText.TextComponent>
//     </View>
//   );
// };

import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { colors, scale } from 'utils';

type Props = {
  query: string;
  resultCount: number;
};

export const Header: React.FC<Props> = ({ query, resultCount }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const getTitle = () => {
    if (query.length === 0) return '';
    return resultCount > 0 ? `${resultCount} Results Found` : 'Top Results';
  };

  const title = getTitle();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: title ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [title]);

  if (!title) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(14),
    paddingTop: scale(8),
    paddingBottom: scale(6),
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
});
