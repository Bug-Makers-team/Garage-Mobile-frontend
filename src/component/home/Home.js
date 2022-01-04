import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../../context/login';
import AddServices from '../addservices/AddServices';
import NavBar from "../navbar/navBar";
import { LoginContext } from '../../context/context';
import ChatApp from '../chatApp/emergency';
import Category from "../category/category"
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from './HomeAnimation';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [
  {
    key: '1',
    category:"Regular maintenance",
    uri:"https://www.ridetime.ca/wp-content/uploads/2018/04/shutterstock_590265665.jpg",
    description: "  "
  },
  {
    key: '2',
    category:"General Maintenance",
    uri:"https://www.ridetime.ca/wp-content/uploads/2018/04/shutterstock_590265665.jpg",
    description: "  "

  },
  {
    key: '3',
    category:"Car Body",
    uri:"https://www.ridetime.ca/wp-content/uploads/2018/04/shutterstock_590265665.jpg",
    description: "  "

  }
];
// for (let i = 0; i < 3; i++) {
//   DATA.push(i)
// }

export default function Home({navigation}) {
    // [index,setIndex]=Use
    const ListItem = ({ item }) => {
        return (
          <View  style={styles.item}>
              <TouchableOpacity onPress={()=>navigation.navigate("category",{categoryName:item.category})} >
            <Image    
              source={{
                uri: item.uri,
              }}
              style={styles.itemPhoto}
              resizeMode="cover"
            />
            <Text  style={styles.itemText}>{item.category}</Text>
            <Text style={styles.itemText2}>{item.description}</Text>
            </TouchableOpacity>
          </View>
        );
      };
    return (
        <>
    
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
        </>
    )
}
const SECTIONS = [
    {
      title: 'Our services',
      horizontal: true,
      data: [
        {
          key: '1',
          category:"Regular maintenance",
          uri:"https://www.ridetime.ca/wp-content/uploads/2018/04/shutterstock_590265665.jpg",
          description: "  "
        },
        {
          key: '2',
          category:"General Maintenance",
          uri:"https://www.ridetime.ca/wp-content/uploads/2018/04/shutterstock_590265665.jpg",
          description: "  "
  
        },
        {
          key: '3',
          category:"Car Body",
          uri:"https://www.ridetime.ca/wp-content/uploads/2018/04/shutterstock_590265665.jpg",
          description: "  "
  
        }
      ],
    }
  ];
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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