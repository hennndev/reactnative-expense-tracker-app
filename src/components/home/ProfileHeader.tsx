import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { globalStyles } from '../../globalStyles'
import { COLORS } from '../../constants/COLORS'

const ProfileHeader = () => {
    return (
        <View style={globalStyles.flexBetween} className='mb-5'>
            <View style={globalStyles.flexx}>
                <View className='w-11 h-11 rounded-full mr-2'>
                    <Image 
                        source={{uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'}}
                        resizeMode='cover'
                        style={styles.img}/>
                </View>
                <View>
                    <Text style={styles.name}>Hendra</Text>
                    <Text style={styles.location}>Purbalingga</Text>
                </View>
            </View>
            <Pressable className='px-5 py-2 bg-gray-100 rounded-md'>
                <Text style={globalStyles.textBtnDisabled}>Details</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 999
    },
    name: {
        fontSize: 18,
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    location: {
        fontSize: 14,
        color: COLORS.disabled,
        fontFamily: 'Inter_500Medium'
    }
})

export default ProfileHeader