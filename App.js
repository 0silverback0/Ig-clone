
import { StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import  Header  from './components/Header';
import Stories from './components/Stories';
import Buttons from './components/Buttons';
import Posts from './components/Posts';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='black'
        barStyle="light-content"
        translucent={Platform.OS === 'ios'} 
        />
     {/* <Header /> */}
     {/* <Stories /> */}
     <Posts />
     <Buttons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
 
});
