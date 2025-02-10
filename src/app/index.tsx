import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() { 
    return <Redirect href="/(tabs)" />;
}
