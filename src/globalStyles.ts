import { StyleSheet } from "react-native"
import { BACKGROUND_COLORS, COLORS } from "./constants/COLORS"

export const globalStyles = StyleSheet.create({
    flexx: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexBetween: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 25
    },
    btn: {
        backgroundColor: COLORS.primary,
        color: '#fff',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 22,
    },
    textBtn: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Inter_600SemiBold'
    },
    textBtnDisabled: {
        fontSize: 14,
        color: COLORS.primary,
        fontFamily: 'Inter_500Medium'
    },
    headerLeftBtn: {
        fontSize: 22,
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    tabBarLabel: {
        fontSize: 12,
        color: COLORS.primary,
        fontFamily: 'Inter_500Medium'
    },
    tabBarIcon: {
        fontSize: 22,
        color: COLORS.primary
    }
})