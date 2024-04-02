import React from 'react'
import { COLORS } from '../../constants/COLORS'
import { globalStyles } from '../../globalStyles'
import { useTransactions } from '../../store/store'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Balance = () => {
    const { transactions } = useTransactions()

    const balance = transactions.reduce((acc, obj) => {
        return obj.type === 'expense' ? acc -= obj.amount : acc += obj.amount
    }, 0)

    return (
        <View className='p-6 rounded-md bg-blue-500'>
            <View style={globalStyles.flexBetween}>
                <Text style={{fontFamily: 'Inter_500Medium'}} className='text-base text-white mr-1'>My Balance</Text>
                <Pressable className='bg-gray-100 rounded-full p-1'>
                    <MaterialIcons name='more-horiz' style={{fontSize: 20}}/>
                </Pressable>
            </View>
            <Text style={{fontFamily: 'Inter_800ExtraBold'}} className={`text-[40px] ${balance < 0 ? 'text-red-300' : 'text-white'}`}>
                {balance < 0 ? '-' : ''}${parseInt(String(balance).replace('-', ''))}
            </Text>
            <View style={{...globalStyles.flexx,  marginTop: 10,}}>
                <View style={globalStyles.flexx} className='px-2 py-1.5 rounded-md self-start bg-green-100'>
                    <MaterialCommunityIcons name='chevron-double-up' style={styles.balanceInfoIcon}/>
                    <Text style={{fontFamily: 'Inter_600SemiBold'}} className='text-green-600 text-sm'>$100</Text>
                </View>
                <Text style={{fontFamily: 'Inter_400Regular'}} className='ml-2 text-white'>than yesterday</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    balanceInfoIcon: {
        fontSize: 20,
        marginRight: 1,
        color: COLORS.green_semibold,
    },
})
export default Balance