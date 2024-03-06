import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Video from "react-native-video";

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    StatusBar.setHidden(false);
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <View style={styles.fullScreen}>
        <Video
          source={require("./src/assets/splash/splash_video.mp4")}
          style={styles.fullScreenVideo}
          muted={true}
          repeat={false}
          resizeMode="cover"
          onLoad={() => StatusBar.setHidden(true)}
          onEnd={handleSplashFinish}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#131416" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>1234</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
