// rscp

import React from "react";
import styles from "./styles";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledButton from "../Styled-Button";

const CarItem = (props) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/images/ModelX.jpeg")}
				style={styles.image}
			/>

			<View style={styles.titles}>
				<Text style={styles.title}>Model S </Text>
				<Text style={styles.subtitle}>Starting at $72,420</Text>
			</View>
			<StyledButton> </StyledButton>
		</View>
	);
};

export default CarItem;
