import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';
import TabBarButton from './TabBarButton';

const TabBar = ({ state, descriptors, navigation }) => {
  
  // 탭 바를 표시할 화면의 이름
  const visibleRoutes = ['index', 'report', 'tip', 'profile'];
  // 현재 활성화된 화면의 이름
  const currentRoute = state.routes[state.index].name;

  return (
    <View style={[styles.tabbar, { display: visibleRoutes.includes(currentRoute) ? 'flex' : 'none' }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // 화면 이름 가져오기
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        // 화면이 visibleRoutes에 포함되지 않는 경우 렌더링하지 않음
        if (!visibleRoutes.includes(route.name)) {
          return null;
        }

        const isFocused = state.index === index;

        // 탭 버튼 클릭 시 이벤트 처리
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            style={styles.tabbarItem}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? Colors.primary.tabIconSelected : Colors.primary.tabIconDefault}
            label={label}
          />
        )

    
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  }
})

export default TabBar