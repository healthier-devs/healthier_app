import React from "react";
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./index.style";
import Button from "../../components/Button";
import { convertToRelativeSize } from "../../utils";
import TextDivider from "../../components/TextDivider";
import KakaoIconSvg from "../../assets/image/logo/kakao_logo.svg";
import AppleIconSvg from "../../assets/image/logo/apple_logo.svg";

const MidArea = () => {
  return (
    <View
      style={[
        styles.midArea,
        {
          marginTop: convertToRelativeSize()(118),
        },
      ]}>
      <Image
        style={{
          width: convertToRelativeSize()(245),
          height: convertToRelativeSize()(42),
          resizeMode: "contain",
        }}
        source={require("../../assets/image/logo/header_logo.png")}
      />
      <Text style={styles.midAreaText}>
        현대인을 위한 온라인 증상감별 및{"\n"}
        건강관리 서비스
      </Text>
    </View>
  );
};

const BottomArea = () => {
  const DEFAULT_LOGIN_BUTTON_HEIGHT = convertToRelativeSize()(52);

  const handleLogin = () => {
    console.log("login");
  };
  return (
    <View style={styles.btmArea}>
      <Button
        onClick={handleLogin}
        height={DEFAULT_LOGIN_BUTTON_HEIGHT}
        backgroundColor="#5464F2"
        borderRadius={30}>
        이메일로 로그인하기
      </Button>
      <TextDivider text="또는 SNS 계정으로 시작하기" color="#787c83" />
      <View style={styles.loginIcons}>
        <TouchableOpacity style={styles.kakaoIcon}>
          <KakaoIconSvg
            width={convertToRelativeSize()(30)}
            height={convertToRelativeSize()(30)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleIcon}>
          <AppleIconSvg
            width={convertToRelativeSize()(30)}
            height={convertToRelativeSize()(30)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.registerArea}>
        <Text style={styles.text}>계정이 없으신가요?</Text>
        <TouchableOpacity
          style={{
            borderColor: "#d2fa64",
            borderBottomWidth: 1,
            paddingHorizontal: 2,
            paddingVertical: 2,
          }}>
          <Text
            style={[
              styles.text,
              {
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 14,
              },
            ]}>
            회원가입하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Login() {
  return (
    <SafeAreaView style={styles.topbar}>
      <View style={styles.container}>
        <View>
          <Text style={styles.topArea}>홈 둘러보기</Text>
          <MidArea />
        </View>
        <BottomArea />
      </View>
    </SafeAreaView>
  );
}

export default Login;
