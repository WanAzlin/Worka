import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Me</Text>
      <View style={styles.container1}>
         <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',}}>
         <Image style={styles.iC1}
            source={require("../../assets/images/av12.png")} />
            <Text style={styles.tC1}>Khaled Mohammed </Text>
         </View>
         <View style ={{flexDirection: "row"}}>
         <View style={styles.container2}>
            <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',}}>
            <View style={styles.box}> 
            <Text style={styles.tC2}>Health Community </Text>
            <Text style={styles.tC3}>Lorem ipsum, or lipsum </Text>
            <Text style={styles.tC3}>as it is, or lipsum is it</Text>
            <Text style={styles.tC3}>as it is, or lipsum is it is </Text>
            </View>
            <Image style={styles.iC3}
            source={require("../../assets/images/h3.png")} />
            </View>
         </View>
         <View style={styles.container3}>
         <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',}}>
            <View style={styles.box}> 
            <Text style={styles.tC2}>Weekly/Month </Text>
            <Text style={styles.tC3}>Lorem ipsum, or lipsum </Text>
            <Text style={styles.tC3}>as it is, or lipsum is it</Text>
            <Text style={styles.tC3}>as it is, or lipsum is it is </Text>
            </View>
            <Image style={styles.iC3}
            source={require("../../assets/images/notes.png")} />
            </View>
         </View>
         </View>
         <View style={styles.container4}>
         <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',}}>
              <Text style={styles.tC4}>My Month </Text>
              <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',}}>
                 <Image style={styles.iC4}
                 source={require("../../assets/images/gq.png")} />
                 <Image style={styles.iC4}
                 source={require("../../assets/images/gq.png")} />
                 <Image style={styles.iC4}
                 source={require("../../assets/images/gq.png")} />
              </View>
          </View>
            <View style={styles.container5}>
                <Text style={styles.tC4}>Health Data</Text>
                <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',}}>
                      <Image style={styles.iC5}
                       source={require("../../assets/images/roll.png")} />
                       <Text style={styles.tC6}>My Achievements </Text>
                       <Image style={styles.iC6}
                       source={require("../../assets/images/right.png")} />
                </View>
                
                <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF', paddingTop: 10,}}>
                      <Image style={styles.iC5}
                       source={require("../../assets/images/Order1.png")} />
                       <Text style={styles.tC6}>My Data </Text>
                       <Image style={styles.iC7}
                       source={require("../../assets/images/right.png")} />
                </View>
                <View style ={{flexDirection: "row",backgroundColor: '#EEEBFF',paddingTop: 10,}}>
                      <Image style={styles.iC5}
                       source={require("../../assets/images/book.png")} />
                       <Text style={styles.tC6}>My Plans </Text>
                       <Image style={styles.iC8}
                       source={require("../../assets/images/right.png")} />
                </View>
                
            </View>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box: {
    backgroundColor: '#EEEBFF'
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25
  },
  container1: {
    width: 380,
    height: 100,
    paddingTop: 20,
    backgroundColor: '#EEEBFF',
    borderRadius: 0,
    marginLeft: 20,
    marginTop: 10,
  },
  container2: {
    width: 190,
    height: 100,
    paddingTop: 20,
    backgroundColor: '#EEEBFF',
    borderRadius: 10,
   
    marginTop: 10,
  },
  container3: {
    width: 180,
    height: 100,
    paddingTop: 20,
    backgroundColor: '#EEEBFF',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  container4: {
    width: 380,
    height: 120,
    paddingTop: 20,
    backgroundColor: '#EEEBFF',
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 10,
  },
  container5: {
    width: 380,
    height: 250,
    paddingTop: 20,
    backgroundColor: '#EEEBFF',
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 20,
  },
  iC1: {
    width: 60,
    height:60,
    borderRadius: 50,
    marginLeft: 20,
    marginBottom: 15,
  },
  iC3: {
    width: 45,
    height:45,
    marginLeft: 5,
    marginTop: 10,
  },
  iC4: {
    width: 85,
    height:85,
    marginTop: 10,
    
  },
  iC5: {
    width: 40,
    height:40,
    marginLeft: 15,
    marginTop: 10,
  },
  iC6: {
    width: 30,
    height:30,
    marginLeft: 110,
    marginTop: 13,
  },
  iC7: {
    width: 30,
    height:30,
    marginLeft: 190,
    marginTop: 13,
  },
  iC8: {
    width: 30,
    height:30,
    marginLeft: 183,
    marginTop: 13,
  },
  tC1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  tC2: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 10,
  },
  tC3: {
    fontSize: 10,
    color: "#767979", 
    marginBottom: 2,
    marginLeft: 10,
  },
  tC4: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 10,
  },
  tC5: {
    fontSize: 12,
    color: "#767979", 
    marginBottom: 2,
    marginLeft: 200,
  },
  tC6: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  
});
