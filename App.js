import { StatusBar } from "expo-status-bar";
import React from "react";
import CarItem from "./view/Car-Item";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<CarItem></CarItem>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
