import { SvgProps } from 'react-native-svg';
// Add other imports here
import Dashboard from 'assets/images/svg/dashBoardTab.svg';
import Watch from 'assets/images/svg/watchTab.svg';
import Media from 'assets/images/svg/mediaTab.svg';
import More from 'assets/images/svg/moreTab.svg';

import { Routes_Names } from 'navigation';

export const IconLibrary: { [key: string]: React.FC<SvgProps> } = {
  // Add other icons here

  //for tabs
  [Routes_Names.MainScreens.Dashboard]: Dashboard,
  [Routes_Names.MovieBookingScreens.Watch]: Watch,
  [Routes_Names.MainScreens.Media]: Media,
  [Routes_Names.MainScreens.More]: More,
};

export const IconNames = {
  // Use dynamic route names from Routes_Names
  Dashboard: Routes_Names.MainScreens.Dashboard,
  Watch: Routes_Names.MovieBookingScreens.Watch,
  Media: Routes_Names.MainScreens.Media,
  More: Routes_Names.MainScreens.More,
} as const;

export type IconName = keyof typeof IconLibrary;
