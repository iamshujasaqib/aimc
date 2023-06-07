import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from 'src/constants/images';
import {View} from 'src/core/View';

export interface AvatarProps {
  source?: ImageSourcePropType;
  onPress?(): void;
  size?: number;
  loader?: boolean;
}
export const Avatar = (props: AvatarProps) => {
  const {source = IMAGES.user, onPress, size = 50, loader = false} = props;
  const sizeStyle = {
    height: size,
    width: size,
    borderRadius: size,
  };
  return (
    <View>
      <TouchableOpacity
        disabled={!onPress}
        onPress={onPress}
        style={[styles.main, size !== 0 && sizeStyle]}>
        <Image source={source} style={[styles.img, sizeStyle]} />
      </TouchableOpacity>
      {loader && (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )}
    </View>
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
  loader: {
    position: 'absolute',
    top: '50%',
  },
});
