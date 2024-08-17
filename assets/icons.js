// https://icons.expo.fyi/Index

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const icons = {
  index: (props) => <AntDesign name="home" size={26} {...props} />,
  report: (props) => <MaterialCommunityIcons name="home-analytics" size={26} {...props} />,
  tip: (props) => <MaterialIcons name="lightbulb-outline" size={26} {...props} />,
  profile: (props) => <AntDesign name="user" size={26} {...props} />,
}