import { StyleSheet, Image } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
     
       <View style ={{flexDirection: "row"}}> 
        <View style={styles.box3}>
          <Text style={styles.title}>Beginner</Text>
        </View>
          <Text style={styles.title1}>Intermediate</Text>
          <Text style={styles.title1}>Advanced</Text>
        </View>
        <View style={styles.box5}>
          <Image style={styles.iC2}
          source={require("../../assets/images/search2x.png")} /> 
        </View>
        <Image style={styles.iC4}
           source={require("../../assets/images/img.png")} />
        <Image style={styles.iC4}
           source={require("../../assets/images/img3.png")} />
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#FFFFFF"
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#9DA5AC",
    marginLeft: 15,
    marginTop: 55
  },
  box3: {
    borderColor:'#3A3434',
    backgroundColor: "#7B61FF",
    borderRadius: 30,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 40,
    width: 115,
    height: 50,
    marginLeft: 30,
    
   
  },
 
  box5: {
    borderColor:'#F2F3F4',
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    paddingHorizontal: 1,
    marginTop: 15,
    width: 350,
    height: 45,
    marginLeft: 30,
    borderWidth: 2,
  },
  iC2: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 8,
    backgroundColor: "#FFFFFF",
  },
  iC4: {
    width: 390,
    height: 200,
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
