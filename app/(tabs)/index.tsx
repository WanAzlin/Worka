import { StyleSheet, Image } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
        <Image style={styles.iC1}
        source={require("../../assets/images/av12.png")} />
         <View style={styles.box1}>
           <Text style={styles.tC1}>Hi, Khaled </Text>
           <Text style={styles.tC2}>Start Your Schedule !</Text>
        </View>
        <Image style={styles.iC2}
        source={require("../../assets/images/bell.png")} />
         <Image style={styles.iC2C}
        source={require("../../assets/images/search1.png")} />
      </View>
      <View style={styles.box2}>
      <View style ={{flexDirection: "row", backgroundColor: "#F4F3F3",}}>
        <View style={styles.box2}> 
          <Text style={styles.tB1}>New User</Text>
          <Text style={styles.tB2}>Shape your body</Text>
          <Text style={styles.tB3}>30 Days</Text>
           <View style={styles.box3}> 
             <Text style={styles.tB2t}>free trial</Text>
           </View>
      </View>
        <Image style={styles.iB1}
         source={require("../../assets/images/b1.png")} />
      </View>
      </View>
      <View style ={{flexDirection: "row",}}> 
      
        <Text style={styles.tit1}>Categories</Text>
        <Text style={styles.tit2}>See All</Text>
      </View>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.box2t1}> 
      <Image style={styles.iC3}
           source={require("../../assets/images/workour.png")} />
      <Text style={styles.titt}>Workout</Text>
      <Text style={styles.tit}>2 hour</Text>
      </View> 
      <View style={styles.box2t2}> 
      <Image style={styles.iC3}
           source={require("../../assets/images/running.png")} />
      <Text style={styles.titt}>Running</Text>
      <Text style={styles.tit}>1 hour</Text>
      </View> 
      <View style={styles.box2t2}> 
      <Image style={styles.iC3}
           source={require("../../assets/images/diet.png")} />
      <Text style={styles.titt}>Dietary</Text>
      <Text style={styles.tit}>1238kcl</Text>
      </View> 
     </View>
     <View style ={{flexDirection: "row",}}> 
      
        <Text style={styles.tit1}>Focus Area</Text>
        <Text style={styles.tit2}>See All</Text>
      </View>
      <Image style={styles.iC4}
           source={require("../../assets/images/img.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box1: {
    
  },
  box3: {
    borderColor:'#000000',
    backgroundColor: "#EEEBFF",
    borderRadius: 10,
    elevation: 1,
    paddingVertical: 10,
    width: 100,
    marginTop: 10,
  },
  tC1: {
    fontSize: 15,
    color: "#7F8C8D",
    marginTop: 30,
    marginLeft: 10,
  },
  tC2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
  iC1: {
    width: 60,
    height:60,
    borderRadius: 50,
    marginLeft: 22,
    marginTop: 20,
  },
  iC2: {
    width: 30,
    height: 30,
    marginLeft: 72,
    marginTop: 35,
  },
  iC2C: {
    width: 30,
    height: 30,
    marginLeft: 13,
    marginTop: 35,
  },
  box2: {
    borderColor:'#000000',
    backgroundColor: "#F4F3F3",
    borderRadius: 20,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    
  },
  box2t1: {
    borderColor:'#000000',
    backgroundColor: "#F4F3F3",
    borderRadius: 20,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginLeft: 10,
    
  },
  box2t2: {
    borderColor:'#000000',
    backgroundColor: "#F4F3F3",
    borderRadius: 20,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  tB1: {
    fontSize: 18,
    color: "#7F8C8D",
    
    marginLeft: 5
  },
  tB2t: {
    fontSize: 18,
    color: "#8A74FC",
    fontWeight: 'bold',
    marginLeft: 12
  },
  iB1: {
    width: 200,
    height: 180,
    marginLeft:1,
    
  },
  tB2: {
    fontSize: 25,
    color: "#000000",
    marginTop: 5,
    marginLeft: 5, 
    fontWeight: 'bold'
  },
  tB3: {
    fontSize: 20,
    color: "#DD7B7B",
    marginTop: 2,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  tit1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25,
    marginTop: 12,
  },
  tit2: {
    color: "#DD7B7B",
    fontSize: 16,
    marginLeft: 200,
    marginTop: 15,
  },
  titt: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
    marginTop: 12,
  },
  tit: {
    color: "#DD7B7B",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 8,
  },
  
  iC3: {
    width: 70,
    height: 70,
    marginLeft: 8,
    marginTop: 15,
  },
  iC4: {
    width: 400,
    height: 170,
    marginLeft: 8,
    borderRadius: 10,
    marginTop: 10,
  },
});
