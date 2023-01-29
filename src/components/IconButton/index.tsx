import React from 'react';
import {GestureResponderEvent, PressableProps, ViewStyle} from 'react-native';
import Pressable from '../Pressable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ItemContainer} from './styled';

type Props = PressableProps & {
  name: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

export default function IconButton(props: Props) {
  const {name, color, style, onPress, ...otherProps} = props;

  return (
    <Pressable onPress={onPress} {...otherProps}>
      <ItemContainer style={style}>
        <Icon name={name} size={25} color={'blue'} />
      </ItemContainer>
    </Pressable>
  );
}
