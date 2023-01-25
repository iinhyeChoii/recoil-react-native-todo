import React from 'react';
import {GestureResponderEvent, ViewStyle} from 'react-native';
import Pressable from '../Pressable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ItemContainer} from './styled';

type Props = {
  name: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

export default function IconButton(props: Props) {
  const {name, color, style, onPress} = props;

  return (
    <Pressable onPress={onPress}>
      <ItemContainer style={style}>
        <Icon name={name} size={25} color={'blue'} />
      </ItemContainer>
    </Pressable>
  );
}
