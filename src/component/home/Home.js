// import React, { useRef, useState, useEffect } from "react";
// import Carousel, {
//   ParallaxImage,
//   Pagination,
// } from "react-native-snap-carousel";
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
//   Image,
//   ImageBackgroundBase,
//   ImageBackground,
//   ScrollView,
//   StatusBar,
//   SafeAreaView,
//   TouchableHighlight,
// } from "react-native";
// import { color } from "react-native-elements/dist/helpers";
// import { Avatar } from "react-native-paper";
// const ENTRIES1 = [
//   {
//     key: "1",
//     category: "Regular maintenance",
//     title: "Beautiful and dramatic Antelope Canyon",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//     illustration:
//       "https://media.istockphoto.com/photos/mechanic-car-service-auto-garage-in-automotive-mobile-center-repair-picture-id1294266631?b=1&k=20&m=1294266631&s=170667a&w=0&h=jIJnGxDiNkFbw0pj8onWkVdUSsNfb1tb5B69PIMqAmk=",
//   },
//   {
//     key: "2",
//     category: "General Maintenance",
//     title: "Beautiful and dramatic Antelope Canyon",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//     illustration:
//       "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: "3",
//     category: "Car Body",
//     title: "Beautiful and dramatic Antelope Canyon",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//     illustration:
//       "https://di-uploads-pod2.dealerinspire.com/olathedodgechryslerjeepram/uploads/2019/12/Auto-body-repair_56693085.jpg",
//   },
// ];
// const { width: screenWidth } = Dimensions.get("window");

// const MyCarousel = ({navigation}) => {
//   const [entries, setEntries] = useState([]);
//   const carouselRef = useRef(null);

//   const goForward = () => {
//     carouselRef.current.snapToNext();
//   };

//   useEffect(() => {
//     setEntries(ENTRIES1);
//   }, []);

//   const renderItem = ({ item, index }, parallaxProps) => {
//     return (
//           <TouchableHighlight
//           underlayColor={null}
//           onPress={()=>navigation.navigate("category",{categoryName:item.category})} >
//       <View style={styles.item}>
//         <ParallaxImage
//           source={{ uri: item.illustration }}
//           containerStyle={styles.imageContainer}
//           style={styles.image}
//           parallaxFactor={0}
//           {...parallaxProps}
//         />
//         <Text style={styles.title} numberOfLines={2}>
//           {item.category}
//         </Text>
//       </View>
//         </TouchableHighlight>
//     );
//   };
//   const gear = require('../../../assets/icons/gear.png')
//   return (
//     <>
//         <Image
//           style={styles.backgroundImage}
//           source={{
//               uri: "https://we7s02xsfeo1fdoee1g3zn95-wpengine.netdna-ssl.com/wp-content/uploads/mechanics-examing-vehicle-for-auto-repairs-718x344.jpg",
//             }}         />
//       <View style={styles.container}>

//         <View style={{ display: "flex", flexDirection: "row",marginBottom:8, }}>
//         <Avatar.Icon color="grey"  icon={gear} style={{width:20,height:20,backgroundColor:null,marginLeft:20}}/>
//         <Text style={{fontSize:18,marginLeft:10}}>Our </Text><Text style={styles.texttitle}>Services</Text>
//         </View>
//         <TouchableOpacity onPress={goForward}></TouchableOpacity>
//         <Carousel
//           ref={carouselRef}
//           sliderWidth={screenWidth}
//           sliderHeight={screenWidth}
//           itemWidth={screenWidth - 60}
//           data={entries}
//           renderItem={renderItem}
//           hasParallaxImages={true}
//         />
       
//       </View>

//     </>
//   );
// };

// export default MyCarousel;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 10,
//       },
//   scrollView: {

//   },
//   item: {
//     width: screenWidth - 140,
//     height: screenWidth - 140,
//   },
//   imageContainer: {
//     flex: 1,
//     marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
//     backgroundColor: "white",
//     borderRadius: 8,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     resizeMode: "cover",
//   },
//   title: {
//     textAlign: "center",
//     paddingTop: 10,
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   backgroundImage: {
//        flex: 1

//     },
//   section: {
//     // #233EDE
//     backgroundColor: "#212122",
//     paddingTop: 50,
//     paddingBottom: 50,
//     marginBottom: 10,
//   },
//   containerSection: {
//     alignItems: "center",
//   },
//   text: {
//     color: "white",
//   },
//   button: {
//     backgroundColor: "#233EDE",
//     marginLeft: 45,
//     marginRight: 45,
//     marginTop: 40,
//     paddingLeft: 15,
//     paddingRight: 15,
//     paddingTop: 5,
//     paddingBottom: 5,
//     color: "white",
//   },
//   texttitle:{
//       color:"#ee8133",
//       fontWeight:"bold",
//       fontSize:20,
      
//     }
// });
