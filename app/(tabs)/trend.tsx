import { StyleSheet, Image } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
       <View style ={{flexDirection: "row"}}> 
        <View style={styles.box3}>
          <Text style={styles.title}>ALL</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.title1}>Popular</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.title2}>My Playlist</Text>
        </View>
        </View>
        <View style ={{flexDirection: "row"}}> 
        <View style={styles.box4}>
          <Text style={styles.title1}>Collection</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.title3}>Recent</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.title3}>Other</Text>
        </View>
        </View>
        <Text style={styles.title5}>Latest</Text>
        <Image style={styles.iC4}
           source={require("../../assets/images/img.png")} />
        <View style ={{flexDirection: "row",}}> 
          <Text style={styles.tit1}>New Article</Text>
          <Text style={styles.tit2}>See All</Text>
        </View>
        <View style ={{flexDirection: "row"}}> 
        <View style={styles.box1}> 
          <Text style={styles.tit3}>The Advantages of workout..</Text>
          <Text style={styles.tit4}>Lorem ipsum, or lipsum as it is </Text>
          <Text style={styles.tit5}>known, is dummy text used in layin  </Text>
          <Text style={styles.tit5}>out print, graphic or web designs.   </Text>
          <Text style={styles.tit5}>The passage is attributed to The    </Text>
        </View>
          <Image style={styles.iC5}
           source={require("../../assets/images/img4.png")} />
        </View>
        <View style ={{flexDirection: "row"}}> 
        <View style={styles.box1}> 
          <Text style={styles.tit3}>Get Your Blood Pumping</Text>
          <Text style={styles.tit4}>Lorem ipsum, or lipsum as it is </Text>
          <Text style={styles.tit5}>known, is dummy text used in layin  </Text>
          <Text style={styles.tit5}>out print, graphic or web designs.   </Text>
          <Text style={styles.tit5}>The passage is attributed to The    </Text>
        </View>
          <Image style={styles.iC6}
           source={require("../../assets/images/img5.png")} />
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  box1: {
    
   
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#8D77FE",
    marginLeft: 15,
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#9DA5AC",
    marginLeft: 10,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#9DA5AC",
    marginLeft: 5,
  },
  title3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#9DA5AC",
    marginLeft: 15,
  },
  title4: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#9DA5AC",
    marginLeft: 15,
  },
  title5: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#17202A",
    marginLeft: 25,
    marginTop: 20,
  },
  box3: {
    borderColor:'#3A3434',
    backgroundColor: "#ECE9FE",
    borderRadius: 20,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    width: 110,
    height: 50,
    marginLeft: 10,
  },
  box4: {
    
    backgroundColor: "#EDF3F5",
    borderRadius: 20,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    width: 135,
    height: 50,
    marginLeft: 5,
    
  },
  box5: {
    
    backgroundColor: "#EDF3F5",
    borderRadius: 20,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    width: 120,
    height: 50,
    marginLeft: 10,
    
  },
  iC4: {
    width: 380,
    height: 200,
    marginLeft:10,
    borderRadius: 10,
    marginTop: 10,
  },
  iC5: {
    width: 170,
    height: 140,
    marginLeft:10,
    borderRadius: 10,
    marginTop: 15,
  },
  iC6: {
    width: 170,
    height: 140,
    marginLeft:15,
    borderRadius: 10,
    marginTop: 15,
  },
  tit1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25,
    marginTop: 12,
  },
  tit3: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 18,
    marginTop: 13,
  },
  tit4: {
    
    fontSize: 12,
    marginLeft: 18,
    marginTop: 13,
  },
  tit5: {
    
    fontSize: 12,
    marginLeft: 18,
    marginTop: 1,
  },
  tit2: {
    color: "#DD7B7B",
    fontSize: 16,
    marginLeft: 200,
    marginTop: 15,
  },
});
