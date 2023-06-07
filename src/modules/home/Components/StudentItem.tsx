import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {StudentResponse} from 'src/business/responses/StudentResponse';
import {Avatar} from 'src/components/Avatar';
import {Colors} from 'src/constants/colors';
import {Text} from 'src/core/Text';
import {View} from 'src/core/View';
import {CommonService} from 'src/services/Common';

interface StudentItemProps {
  student: StudentResponse;
  onPress?(): void;
}

export const StudentItem = memo((props: StudentItemProps) => {
  const {student, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View flex row style={styles.main}>
        <Avatar />
        <View style={styles.inner}>
          <Text style={styles.name}>{CommonService.getFullName(student)}</Text>
          <Text style={styles.email}>{student.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  main: {
    minHeight: 100,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '500',
  },
  email: {
    color: Colors.grey,
  },
  inner: {
    height: '90%',
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
