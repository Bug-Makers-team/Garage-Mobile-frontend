import { Alert } from "react-native";


const notSignedinAlert = (alert) =>
Alert.alert(
  `${alert.title}`,
  `${alert.text}`,
  
  [
    {
      text: "Cancel",
    //   onPress: () => Alert.alert("Cancel Pressed"),
      style: "cancel",
    },
  ],
  {
    cancelable: true,
    // onDismiss: () =>
    //   Alert.alert(
    //     "This alert was dismissed by tapping outside of the alert dialog."
    //   ),
  }
);




export{notSignedinAlert}