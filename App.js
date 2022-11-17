// In App.js in a new project
import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ... other code from the previous section

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => {
					/* 1. Navigate to the Details route with params */
					navigation.navigate("Details", {
						itemId: 86,
						otherParam: "Teddy",
						size: "30cm",
					});
				}}
			/>
		</View>
	);
}

function DetailsScreen({ route, navigation }) {
	/* 2. Get the param */
	const { itemId, otherParam, size } = route.params;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>My name: {JSON.stringify(otherParam)}</Text>
			<Text>The long of my dick: {JSON.stringify(size)}</Text>
			<Button
				title="Go to Details... again"
				onPress={() =>
					navigation.push("Details", {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}

function SeeMeScreen({ navigation }) {
	return (
		<View>
			<Text>That is me bitch !</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button title="Go home" onPress={() => navigation.navigate("Home")} />
			<Button
				title="Go details"
				onPress={() => navigation.navigate("Details")}
			/>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Overview" }}
				/>
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen name="SeeMe" component={SeeMeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
