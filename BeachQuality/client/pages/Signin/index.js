import React, { useEffect, useCallback, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SIGNUP_BACKGROUND } from "../../constants";
import { Container, Content, Item, Input, Form, Button, H1 } from "native-base";
import { COLORS } from "../../constants";
import { useDispatch } from "react-redux";
import { userSelectors } from "react-redux";
import { userSelctors } from "../../store/selectors";
import { userActions } from "../../store/actions";
const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = useCallback(() => {
    console.log(email, password, cPassword);
    if (email && password) {
      dispatch(userActions.registerUser({ email, password }));
    } else {
      console.log("Can't have empty fields!");
    }
  }, [dispatch, email, password, cPassword]);
  return (
    <View style={styles.container}>
      <ImageBackground source={SIGNUP_BACKGROUND} style={styles.image}>
        <Text style={styles.title}>Signin</Text>
        <Form style={styles.form}>
          <Item style={styles.input}>
            <Input
              name="email"
              placeholder="Email"
              onChangeText={text => {
                console.log(text);
                setEmail(text);
              }}
            />
          </Item>
          <Item secureTextEntry={true} style={styles.input}>
            <Input
              name="password"
              placeholder="Password"
              onChangeText={text => {
                console.log(text);
                setPassword(text);
              }}
            />
          </Item>
          <Item secureTextEntry={true} style={styles.input}>
            <Input
              name="cPassword"
              placeholder="Confirm password"
              onChangeText={text => {
                console.log(text);
                setCPassword(text);
              }}
            />
          </Item>
          <Text style={[styles.text, styles.margin]}></Text>
          <Text style={styles.text}>
            Don't have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Signup")}
            >
              Signup
            </Text>
          </Text>

          <Button style={styles.button} rounded success onPress={handleSubmit}>
            <Text style={styles.buttonText}>Go</Text>
          </Button>
        </Form>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    width: "100%",
    height: "100%",

    resizeMode: "cover"
  },
  title: {
    marginTop: "15%",
    color: COLORS.WHITE,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "5%"
  },
  link: {
    color: "orange"
  },

  input: {
    marginTop: "3%",
    backgroundColor: COLORS.WHITE,
    minWidth: 300,
    maxWidth: 500,
    borderRadius: 50
  },
  form: {
    alignItems: "center"
  },

  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3%",
    width: 100
  },
  buttonText: {
    color: COLORS.WHITE
  },
  margin: {
    marginTop: 10
  },
  text: {
    color: COLORS.WHITE,
    fontWeight: "bold"
  }
});

export default Signin;
