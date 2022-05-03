import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {fetchDataQuery} from 'src/utils/graphQL/queries';
import {COLORS} from 'src/constants/colors';
import {TLaunchesData, TLaunch, TScreenProps} from 'src/types';
import {Button, Input, Typography, Item, ModalLoader} from 'src/components';
import {scaling} from 'src/styles/scaling';
import {ROUTES} from 'src/constants/routes';

const STEP = 20;

const Home = ({navigation}: TScreenProps) => {
  // const [searchedData, setSearchedData] = useState<Array<TLaunch>>();
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState<string>();
  const {data, loading, error} = useQuery<TLaunchesData>(fetchDataQuery, {
    variables: {
      offset,
    },
  });

  const buttonPreviousDisabled = offset === 0;
  const buttonNextDisabled = !data?.launchesPast.length;

  const handleSetSearch = (newStr: string) => setSearch(newStr);

  const handleSetOffsetNext = () => {
    setOffset(value => value + STEP);
  };

  const handleSetOffsetPrevious = () =>
    setOffset(value => (value > 0 ? value - STEP : value));

  const handleNavigateToDetails = (launchData: TLaunch) => () =>
    navigation.navigate(ROUTES.DETAILS, {launchData});

  // useEffect(() => {
  //   if (search) {
  //     setSearchedData(
  //       data?.launchesPast.filter(item =>
  //         item.mission_name.toLowerCase().includes(search.toLowerCase()),
  //       ),
  //     );
  //   } else {
  //     setSearchedData(undefined);
  //     setSearch(undefined);
  //   }
  // }, [data?.launchesPast, search]);

  if (loading) {
    return <ModalLoader />;
  }
  if (error) {
    navigation.navigate(ROUTES.ERROR);
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper} testID="homeScreen">
      <Input
        placeholder="Search"
        value={search || ''}
        setValue={handleSetSearch}
        type="search"
      />
      <ScrollView>
        {data?.launchesPast?.length ? (
          data.launchesPast.map(item => (
            <Item
              data={item}
              key={item.id}
              onPress={handleNavigateToDetails(item)}
            />
          ))
        ) : (
          <Typography style={styles.noData} size="32" type="bold">
            No Data
          </Typography>
        )}
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <Button
          onPress={handleSetOffsetPrevious}
          style={styles.button}
          disabled={buttonPreviousDisabled}
          testID="buttonPrevious">
          Previous
        </Button>
        <Button
          onPress={handleSetOffsetNext}
          type="outline"
          disabled={buttonNextDisabled}
          testID="buttonNext">
          Next
        </Button>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: scaling.vs(15),
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: scaling.vs(25),
  },
  button: {
    marginRight: scaling.hs(20),
  },
  noData: {
    textAlign: 'center',
    marginTop: '50%',
  },
});
