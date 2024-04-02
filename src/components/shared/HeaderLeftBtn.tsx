import React from 'react'
import { useRouter } from 'expo-router'
import { globalStyles } from '../../globalStyles'
import { Text, Pressable } from 'react-native'

const HeaderLeftBtn = () => {
    const router = useRouter()
    return (
        <Pressable style={{marginLeft: 10}} onPress={() => router.push('/homepage')}>
            <Text style={globalStyles.headerLeftBtn}>
                Financi
            </Text>
        </Pressable>
    )
}
export default HeaderLeftBtn