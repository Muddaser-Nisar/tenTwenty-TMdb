import { CustomText, Icon, IconNames } from 'components';
import { ICON_SIZE_VARIANTS } from 'components/styledComponents/Icon/styles';
import { goBack } from 'navigation';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { h1M } from 'theme';
import { images } from 'utils';
import styles from './styles';

const SeatMapingScreen = () => {
  const selectedDate = '5 Mar';
  const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon.component
            name={IconNames.bacKIcon}
            size={ICON_SIZE_VARIANTS.MEDIUM}
          />
        </TouchableOpacity>
        <CustomText.TextComponent
          typographyStyle={h1M}
          customStyle={styles.title}
        >
          The King’s Man
        </CustomText.TextComponent>
        <View style={styles.symmetry} />
      </View>
      <Text style={styles.subtitle}>In Theaters December 22, 2021</Text>

      <View style={styles.secondaryContainer}>
        {/* Date Selector */}
        <Text style={styles.dateLabel}>Date</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dateScroll}
        >
          {dates.map(date => (
            <TouchableOpacity
              key={date}
              style={[
                styles.dateItem,
                selectedDate === date && styles.dateItemSelected,
              ]}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === date && styles.dateTextSelected,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.cardTop}>
          <Text style={styles.time}>12:30 </Text>
          <Text style={styles.hall}>Cinetech + Hall 1</Text>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <View style={styles.seatMap}>
              <Image source={images.seatMap} style={styles.image} />
            </View>
          </View>
        </View>
        <Text style={styles.price}>
          From <Text style={styles.bold}>50$</Text> or{' '}
          <Text style={styles.bold}>2500 bonus</Text>
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Select Seats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SeatMapingScreen;
