import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image   
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemText2}>{item.text2}</Text>

    </View>
  );
};

export default function AboutUs()  {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Our Great Team',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Essam Omar',
        uri:"https://ca.slack-edge.com/TNGRRLUMA-U024VGF87GT-4947950c1839-72",
        text2: "Full stack developer with a bachelor's degree in Mechanical engineering"
      },
      {
        key: '2',
        text: 'Rami Zregat',
        uri: 'https://ca.slack-edge.com/TNGRRLUMA-U02431BSFT2-9a737a019ef1-512',
        text2: "Full stack developer with a bachelor's degree in Civil engineering"

      },

      {
        key: '3',
        text: 'Omar Humamah ',
        uri: 'https://ca.slack-edge.com/TNGRRLUMA-U023KC2NMGC-2f52906d66ce-512',
        text2: "Full stack developer with a bachelor's degree in English language and literature"

      },
      {
        key: '4',
        text: 'Dima Alabsi',
        uri: 'https://ca.slack-edge.com/TNGRRLUMA-U026G5R398U-f741a0634fac-512',
        text2: "Full stack developer with a bachelor's degree in English language and literature"

      },
      {
        key: '5',
        text: 'Aseel Alasaad',
        uri: 'https://ca.slack-edge.com/TNGRRLUMA-U024NGP17PG-fd823aa862fd-512',
        text2: "Full stack developer with a bachelor's degree in Computer science "

      },
    ],
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 100,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 300,
    height: 350,
  },
  itemText: {
    color: 'orange',
    fontSize: 20,
    marginTop: 17,
  },
  itemText2: {
    color: 'gray',
  fontSize:9,
    marginTop: 22
  },
});
 