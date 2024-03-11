import React, { useState } from "react";
import Video from "react-native-video";

import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import HealthierNavigation from "./navigation";

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
    <>
      <StatusBar backgroundColor="#131416" barStyle="light-content" />
      <HealthierNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "#131416",
  },
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
