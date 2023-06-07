import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from 'src/constants/images';

export interface AvatarProps {
  source?: ImageSourcePropType;
  onPress?(): void;
  size?: number;
}
export const Avatar = (props: AvatarProps) => {
  const {source = IMAGES.user, onPress, size = 50} = props;
  const sizeStyle = {
    height: size,
    width: size,
    borderRadius: size,
  };
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={[styles.main, size !== 0 && sizeStyle]}>
      <Image source={source} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
