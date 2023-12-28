import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
        <Text style={styles.title}>Totals</Text>
          <View style ={{flexDirection: "row"}}>
           <Text style={styles.title1}>Month</Text>
              <Image style={styles.iC2}
              source={require("../../assets/images/d.png")} />
      </View>
      </View>
      <View style ={{flexDirection: "row"}}>
           <View style={styles.box}>  
              <Text style={styles.title2}>80</Text>
              <Text style={styles.title3}>Workouts</Text>
           </View>
           <View style={styles.box}>  
              <Text style={styles.title23}>80</Text>
              <Text style={styles.title3}>Minutes</Text>
           </View>
           <View style={styles.box}>  
              <Text style={styles.title234}>0</Text>
              <Text style={styles.title3}>Longest</Text>
      </View>
   </View>
   <View style={styles.container1}> 
   <Text style={styles.title7}>Today’s tasks: 0/3 completed</Text>
   </View>
      <View style ={{flexDirection: "row"}}>
        <Text style={styles.title}>Progress</Text>
        <View style ={{flexDirection: "row"}}>
        <Text style={styles.title4}>Today</Text>
              <Image style={styles.iC2}
              source={require("../../assets/images/d.png")} />
        </View>
    </View>  
    <View style ={{flexDirection: "row"}}>
      <View style={styles.box1}> 
        <Image style={styles.iC1}
              source={require("../../assets/images/g1.png")} />
        <Text style={styles.title5}>Kcal Burnt</Text>
        <View style ={{flexDirection: "row"}}>
           <Text style={styles.title5}>1121</Text>
           <Text style={styles.title6}>kcal</Text>
        </View>
        </View>
      <View style={styles.box1}> 
        <Image style={styles.iC1}
              source={require("../../assets/images/g2.png")} />
        <Text style={styles.title5}>Heart Rate</Text>
        <View style ={{flexDirection: "row"}}>
           <Text style={styles.title5}>80</Text>
           <Text style={styles.title6}>bpm</Text>
        </View> 
    </View> 
    </View> 
    
    <View style={styles.box2}> 
        <Image style={styles.iC1}
              source={require("../../assets/images/g3.png")} />
        <Text style={styles.title5}>Step</Text>
        <View style ={{flexDirection: "row"}}>
           <Text style={styles.title5}>1121</Text>
           <Text style={styles.title6}>kcal</Text>
        </View> 
        
    </View> 
    <Text style={styles.title}>Activities</Text>
      <View style={styles.container2}> 
      <Text style={styles.title8}>My Running course</Text>
      <Text style={styles.title10}>5km |  45 Minutes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  box: {
   
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
  },
  title8: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 20,
    color: "#D35400"
  },
  title1: {
    fontSize: 15,
    paddingTop: 25,
    paddingLeft: 250,
  },
  title3: {
    fontSize: 15,
    paddingTop: 5,
    paddingLeft:60,
    color: "#6C6C6C"
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 80,
  },
  title23: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 70,
  },
  title234: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 80,
  },
  title4: {
    fontSize: 15,
    paddingTop: 25,
    paddingLeft: 220,
  },
  title5: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 5,
  },
  title6: {
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 5,
  },
  title7: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight:'bold',
   color: "#1B4F72",
  },
  title9: {
    fontSize: 22,
    marginLeft: 20,
    marginHorizontal: 30,
    fontWeight: 'bold',
    color: "#D35400"
  },
  iC1: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 5,
  },
  iC2: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 25,
  },
  title10: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 20,
    color: "#873600"
  },
  box1: {
    marginLeft: 15,
    width: 150,
    borderColor:'#000000',
    backgroundColor: "#FAFAFA",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  box2: {
    marginLeft: 15,
    width: 150,
    borderColor:'#000000',
    backgroundColor: "#FAFAFA",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  container1: {
    width: 350,
    height: 50,
    paddingTop: 20,
    backgroundColor: '#D6EAF8',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 15,
  },
  container2: {
    width: 380,
    height: 200,
    paddingTop: 20,
    backgroundColor: '#F5CBA7',
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  
});
