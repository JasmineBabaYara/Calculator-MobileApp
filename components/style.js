import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  displaycontainer: {
    margin: 30,
    height: "30%",
  },

  input: {
    fontSize: 20,
    textAlign: "right",
    marginTop: 120,
    letterSpacing: 1.5,
  },

  result: {
    fontSize: 50,
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 20,
  },

  keyboard: {
    position: "absolute",
    top: "38%",
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    elevation: 1,
    backgroundColor: "#f5f5f5",
  },

  sections: {
    margin: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  graybtn: {
    backgroundColor: "#4E505F",
    width: 82,
    height: 82,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  violetbtn: {
    backgroundColor: "#8a2be2",
    width: 82,
    height: 82,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  whitebtn: {
    backgroundColor: "#fff",
    width: 82,
    height: 82,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 30,
    color: "#fff",
  },

  text2: {
    fontSize: 30,
    color: "#000",
  },
});

export default styles;
