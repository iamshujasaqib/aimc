import React, {useCallback, useState} from 'react';
import {StudentAPI} from 'src/business/api/student';
import {StudentResponse} from 'src/business/responses/StudentResponse';
import {Text} from 'src/core/Text';
import {View} from 'src/core/View';
import {StudentItem} from './Components/StudentItem';
import {FlatList, ListRenderItem} from 'react-native';
import {ScreenHeader} from 'src/core/ScreenHeader';
import {Colors} from 'src/constants/colors';
import {Margin} from 'src/core/Margin';

export const HomeScreen = () => {
  const [students, setStudents] = useState<StudentResponse[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setRefreshing(true);
    const data = await StudentAPI.all().finally(() => setRefreshing(false));
    if (data.data) {
      setStudents(data.data);
    }
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  const renderItems: ListRenderItem<StudentResponse> = useCallback(
    ({item, index}) => {
      return <StudentItem key={index} student={item} />;
    },
    [],
  );

  return (
    <View style={{backgroundColor: Colors.boneWhite}} flex>
      <ScreenHeader title="Students" noBackButton />
      <Margin top={30} />
      <View style={{width: '90%'}}>
        <FlatList
          style={{width: '100%'}}
          data={students}
          renderItem={renderItems}
          refreshing={refreshing}
          onRefresh={getData}
        />
      </View>
    </View>
  );
};
