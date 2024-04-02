import React from 'react'
import { COLORS } from '../../constants/COLORS'
import { globalStyles } from '../../globalStyles'
import { View, Text, StyleSheet } from 'react-native'
import { dummyData } from '../../constants/dummyData'

const Transactions = () => {
    return (
        <View>
            <Text style={styles.title} className='text-xl mb-3'>Transactions</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    }
})

export default Transactions