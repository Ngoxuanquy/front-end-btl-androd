// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import CheckBox from 'react-native-check-box';

// const options = [
//     { label: 'Option 1', value: 1 },
//     { label: 'Option 2', value: 2 },
//     { label: 'Option 3', value: 3 },
//     { label: 'Option 4', value: 4 },
//     { label: 'Option 5', value: 5 },
//     { label: 'Option 6', value: 6 },
//     { label: 'Option 7', value: 7 },
// ];

// const CheckBoxs = () => {
//     const [checked, setChecked] = useState(false);
//     const [values, setValues] = useState([]);

//     const onChangeCheckbox = () => {
//         const isChecked = !checked;
//         setChecked(isChecked);
//         setValues(isChecked ? options : []);
//     };

//     const onChange = (item) => {
//         const allOptionsSelected = item.length === options.length;
//         setChecked(allOptionsSelected);
//         setValues(item);
//     };

//     return (
//         <View style={{ padding: 16 }}>
//             <DropDownPicker
//                 items={options.map((option) => ({
//                     label: option.label,
//                     value: option.value,
//                 }))}
//                 defaultValue={null}
//                 placeholder="Select..."
//                 containerStyle={{ height: 40, marginBottom: 10 }}
//                 multiple={true}
//                 multipleText="%d items have been selected."
//                 min={0}
//                 max={options.length}
//                 onChangeItem={onChange}
//             />
//             <View
//                 style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     marginTop: 10,
//                 }}
//             >
//                 <CheckBox isChecked={checked} onClick={onChangeCheckbox} />
//                 <Text>Select all</Text>
//             </View>
//         </View>
//     );
// };

// export default CheckBoxs;
