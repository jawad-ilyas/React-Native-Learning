import React from 'react'

import { View , Text , SafeAreaView , StyleSheet ,  useColorScheme, Appearance } from 'react-native'


const App = ()=>{
  const themeMode = useColorScheme() === "dark"

  const apperenceChecker = Appearance.getColorScheme();

  return (

    <View style={themeMode ? appStyle.textColor: appStyle.container}>
      <Text>{apperenceChecker == "light" ? "light mode is active " : "dark mode is active now "}</Text>
      <Text style={appStyle.textColor}>  {themeMode ? "darkMode" : "lightMode"} </Text>
    </View>
  )
}


const appStyle = StyleSheet.create({

  container : {
    flex : 1 , 
    alignItems:'center',
    backgroundColor:"red",
    color : "black"
  },
  textColor :{
    backgroundColor : "white",
    color : "#2cd8f2",
  }

})
export default App;