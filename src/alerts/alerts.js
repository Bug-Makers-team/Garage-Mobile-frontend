import { Alert } from "react-native";


const Alertschema = (alert) =>
Alert.alert(
  `${alert.title}`,
  `${alert.text}`,
  
  [
    {
      text: "Ok",
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
const AlertschemaApprove = (alert,fn,id) =>
Alert.alert(
  `${alert.title}`,
  `Are you sure you want to ${alert.process}`,
[
  { text: "Yes", onPress: () => fn(id) },
    {
      text: "No",
      // onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    }
  ],
  {
    cancelable: true,
  }
);
// Alert.alert(
//   `${alert.title}`,
//   `Are you sure you want to ${alert.process}`,
  
//   [
//     {
//       text: "ok",
//       onPress: () => fn(),
//       style: "cancel",
//     },
//     {
//       text: "Cancel",
//     //   onPress: () => Alert.alert("Cancel Pressed"),
//       style: "cancel",
      
//     },
//   ],
//   {
//     cancelable: true,
//     // onDismiss: () =>
//     //   Alert.alert(
//     //     "This alert was dismissed by tapping outside of the alert dialog."
//     //   ),
//   }
// );




export{Alertschema,AlertschemaApprove}