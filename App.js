import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/bigs/home";
import coffee from "./components/image/coffee-img.png";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "yellow",
		alignItems: "center",
		justifyContent: "center",
		backgroundImage: coffee,
	},
	font: {
		fontWeight: "bold",
	},
});
