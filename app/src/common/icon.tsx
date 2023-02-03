import React from 'react';
import { Icon } from 'react-native-elements';

const IconComponent = Icon;

const TabBarIcon = ({ name, focused }) => {
  return (
    <IconComponent
      name={name}
      size={26}
      color={focused ? '#000' : '#999'}
    />
  );
};

export default TabBarIcon;