import { StyleSheet } from "react-native";
import { font_size } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: font_size.XXL,
        fontWeight: 'bold',
    }
});