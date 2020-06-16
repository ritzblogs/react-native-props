import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChildComponent =(props)=>{
return(
<View >
<Text style={styles.textStlye}>
  {props.name + " "+props.rollno}</Text>
</View>
)
}

class ParentComponent extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <ChildComponent name = "Emp1" rollno = "1001"/>
      <ChildComponent name = "Emp2" rollno = "1002"/>
      <ChildComponent name = "Emp3" rollno = "1003"/>

    </View>
  );
  }
}

export default ParentComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStlye: {
fontSize:20,
margin:10,
color:"white",
  },
});