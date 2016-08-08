import { StyleSheet } from 'react-native';
import { color, fontSize, fontWeight, borderRadius, styles } from './shared';


export default StyleSheet.create({
    disabled: styles.disabled,
    container: styles.container,
    navbar: {
        height: 64,
        alignSelf: 'stretch',
        backgroundColor: color.dark2
    },
    navbarButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 44,
        paddingHorizontal: 14,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    navbarButtonText: styles.textBody,
    title: {
        ...styles.textSubtitle,
        marginTop: 26
    },
    instructions: {
        ...styles.textBody,
        marginTop: 15,
        width: 300,
        textAlign: 'center'
    },
    buttonGroup: {
        marginTop: 58,
    },
    button: {
        ...styles.button,
        width: 210,
        marginBottom: 15
    },
    buttonText: styles.textButton,
    feedbackText: {
        ...styles.textBody,
        width: 240,
        marginTop: 26,
        textAlign: 'center'
    }
});
