import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import  { StyleSheet, Platform } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
  Col,
  Button,
  Content,
  Container,
  Header,
  Title,
  Drawer,
  Row
} from "native-base";
import { View, Text } from "react-native";

const Favorites = ({ navigation }) => {
  return (
    <React.Fragment>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <MaterialIcons style = {styles.uiIcon} name="keyboard-arrow-left" size={32} />
          </Button>
        </Left>
        <Body>
          <Title>Favorites</Title>
        </Body>
        <Right />
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Favorites Screen</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  uiIcon: {
    color: Platform.OS === 'ios' ? "#000000" : "#ffffff"
  }
});
export default Favorites;
