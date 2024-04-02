import React from 'react'
import moment from 'moment'
import { useRouter } from 'expo-router'
import { COLORS } from '../../constants/COLORS'
import { globalStyles } from '../../globalStyles'
import Icon from '@expo/vector-icons/FontAwesome5'
import { TR_ICONS } from '../../constants/TR_ICONS'
import { View, Text, StyleSheet, Pressable } from 'react-native'

type PropsTypes = {
    data: TransactionTypes
}

const TransactionItem = ({data}: PropsTypes) => {
    const router = useRouter()
    
    return (
        <Pressable onPress={() => router.push(`/transactions/${data.id}`)}>
            <View key={data.id} style={globalStyles.flexBetween}>
                <View style={{...globalStyles.flexx}}>
                    <View className={`p-4 flex items-center justify-center w-[50px] rounded-md mr-3 ${data.type === 'expense' ? 'bg-red-100' : 'bg-green-100'}`}>
                        <Icon name={TR_ICONS[data.category]} style={styles.transactionIcon}/>
                    </View>
                    <View>
                        <Text style={styles.transactionTitle} className='text-base max-w-[180px]'>{data.name}</Text>
                        <Text style={styles.transactionCategory} className='text-sm'>{data.category}</Text>
                    </View>
                </View>
                <View className='flex flex-col items-end'>
                    <Text style={styles.transactionAmount} className={`text-base ${data.type === 'expense' ? 'text-red-600' : 'text-green-600'}`}>
                        {data.type === 'expense' ? '-' : '+'} ${data.amount}
                    </Text>
                    <Text style={styles.transactionDate}>
                        {moment(data.date).format('DD/MM/YYYY')}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    transactionListTitle: {
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    transactionIcon: {
        fontSize: 16,
        color: COLORS.primary
    },
    transactionTitle: {
        color: COLORS.primary,
        fontFamily: 'Inter_600SemiBold'
    },
    transactionCategory: {
        color: COLORS.disabled,
        fontFamily: 'Inter_500Medium'
    },
    transactionAmount: {
        fontFamily: 'Inter_600SemiBold',
    },
    transactionDate: {
        fontSize: 12,
        color: COLORS.disabled,
        fontFamily: 'Inter_500Medium'
    }
})

export default TransactionItem