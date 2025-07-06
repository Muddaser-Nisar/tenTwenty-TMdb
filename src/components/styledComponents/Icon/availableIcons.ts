import { SvgProps } from 'react-native-svg';
// Add other imports here
import Dashboard from 'assets/images/svg/dashBoardTab.svg';
import Watch from 'assets/images/svg/watchTab.svg';
import Media from 'assets/images/svg/mediaTab.svg';
import More from 'assets/images/svg/moreTab.svg';
import searchIcon from 'assets/images/svg/SearchIcon.svg';
import bacKIcon from 'assets/images/svg/backIcon.svg';
import crossIcon from 'assets/images/svg/crossIcon.svg';
import menuIcon from 'assets/images/svg/menuIcon.svg';
import bIcon from 'assets/images/svg/bIcon.svg';

import { Routes_Names } from 'navigation';

export const IconLibrary: { [key: string]: React.FC<SvgProps> } = {
  // Add other icons here

  //for tabs
  [Routes_Names.MainScreens.Dashboard]: Dashboard,
  [Routes_Names.MovieBookingScreens.Watch]: Watch,
  [Routes_Names.MainScreens.Media]: Media,
  [Routes_Names.MainScreens.More]: More,
  searchIcon,
  bacKIcon,
  crossIcon,
  menuIcon,
  bIcon,
};

export const IconNames = {
  // Use dynamic route names from Routes_Names
  Dashboard: Routes_Names.MainScreens.Dashboard,
  Watch: Routes_Names.MovieBookingScreens.Watch,
  Media: Routes_Names.MainScreens.Media,
  More: Routes_Names.MainScreens.More,
  searchIcon: 'searchIcon',
  bacKIcon: 'bacKIcon',
  crossIcon: 'crossIcon',
  menuIcon: 'menuIcon',
  bIcon: 'bIcon',
} as const;

export type IconName = keyof typeof IconLibrary;
