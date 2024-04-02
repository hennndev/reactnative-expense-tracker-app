import React from 'react'
import { useRouter } from 'expo-router'
import { COLORS } from '../constants/COLORS'
import { globalStyles } from '../globalStyles'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

// Onboarding page

const Page = () => {
    const router = useRouter()
    return (
        <View style={globalStyles.mainContainer}>
            <View style={styles.subContainer}>
                <Image source={require('../../assets/payment.jpg')} style={styles.img}/>
                <View style={[globalStyles.flexCenter, styles.detailsContainer]}>
                    <Text style={styles.title}>Easy way to monitor your expenses</Text>
                    <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, totam.</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <Pressable style={globalStyles.btn} onPress={() => router.push('/(primary)/homepage')}>
                        <Text style={globalStyles.textBtn}>Explore Now</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    img: {
        width: 450,
        height: 450,
        resizeMode: 'contain',
    },
    detailsContainer: {
        marginTop: -10,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        lineHeight: 34,
        textAlign: 'center',
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    description: {
        fontSize: 16,
        marginTop: 12,
        lineHeight: 22,
        textAlign: 'center',
        color: COLORS.disabled,
        fontFamily: 'Inter_500Medium',
    }
})

export default Page