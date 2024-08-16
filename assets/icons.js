import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export const icons = {
  index: (props) => <AntDesign name="home" size={26} {...props} />,
  explore: (props) => <Feather name="compass" size={26} {...props} />,
  create: (props) => <AntDesign name="pluscircleo" size={26} {...props} />,
  profile: (props) => <AntDesign name="user" size={26} {...props} />,
}

