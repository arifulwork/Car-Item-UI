import React from "react";
import styles from "./style";
import { Pressable, StyleSheet, Text, View } from "react-native";

const StyledButton = (props) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={styles.button}
				onPress={() => {
					console.warn("Hey");
				}}>
				<Text style={styles.text}>Confirm Order</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;
