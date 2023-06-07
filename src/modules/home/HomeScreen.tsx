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
import {Button} from 'src/core/Button';
import {Screens} from 'src/constants/screens';

export const HomeScreen = ({navigation}: any) => {
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
      <Margin top={15} />
      <View style={{width: '20%', alignSelf: 'flex-end', marginRight: 15}}>
        <Button
          title="Add"
          style={{height: 30}}
          textStyle={{fontSize: 12}}
          secondary
          onPress={() =>
            navigation.navigate(Screens.home.modules.main.modules.addStudent)
          }
        />
      </View>
      <Margin top={15} />
      <FlatList
        style={{width: '90%'}}
        data={students}
        renderItem={renderItems}
        refreshing={refreshing}
        onRefresh={getData}
      />
    </View>
  );
};
