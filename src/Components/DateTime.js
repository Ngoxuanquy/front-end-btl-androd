// import React, { useState } from "react";
// import { Button, View, TextInput, TouchableOpacity, Text } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { MaterialIcons } from '@expo/vector-icons';
// const DateTime = () => {
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//     const [day, setDay] = useState('11')

//     const showDatePicker = () => {
//         setDatePickerVisibility(true);
//     };

//     const hideDatePicker = () => {
//         setDatePickerVisibility(false);
//     };

//     const handleConfirm = (date) => {
//         setDay(date.toString())
//         hideDatePicker();
//     };


//     return (
//         <View>
//             <View style={{
//                 flexDirection: 'row',
//                 width: '90%',
//             }}>

//                 <TextInput style={{
//                     width: '100%',
//                     height: 40,
//                     borderColor: 'gray',
//                     borderWidth: 1,
//                     backgroundColor: 'white',
//                     borderRadius: 6
//                 }}
//                     value={day}
//                 />
//                 {/* <Button title="Show Date Picker"  /> */}
//                 <View style={{
//                     position: 'absolute',
//                     right: 10,
//                     top: 7
//                 }}>
//                     <TouchableOpacity
//                         onPress={showDatePicker}
//                     >
//                         <MaterialIcons name="date-range" size={24} color="black" />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <DateTimePickerModal
//                 isVisible={isDatePickerVisible}
//                 mode="date"
//                 onConfirm={handleConfirm}
//                 onCancel={hideDatePicker}
//             />
//         </View>
//     );
// };

// export default DateTime;