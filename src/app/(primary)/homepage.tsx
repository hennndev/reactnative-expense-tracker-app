import React, { useRef, useState } from 'react'
import { COLORS } from '../../constants/COLORS'
import { globalStyles } from '../../globalStyles'
import { useTransactions } from '../../store/store'
import Balance from '../../components/home/Balance'
import ProfileHeader from '../../components/home/ProfileHeader'
import TransactionList from '../../components/shared/TransactionList'
import TransactionPicker from '../../components/shared/TransactionPicker'
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native'

const Page = () => {
    const { transactions } = useTransactions()
    const [selectedTransaction, setSelectedTransaction] = useState<string>('')
    return (
        <ScrollView style={globalStyles.mainContainer}>
            <SafeAreaView>
                <ProfileHeader/>
                <Balance/>
                <View className='mt-6 mb-10'>
                    <View style={globalStyles.flexBetween} className='mb-1'>
                        <Text style={styles.title} className='text-red-500 text-xl'>Transactions</Text>
                        <TransactionPicker selectedTransaction={selectedTransaction} setSelectedTransaction={setSelectedTransaction}/>
                    </View>
                    {transactions.length > 0 ? (
                        <TransactionList 
                            transactionType={selectedTransaction} 
                            transactions={transactions.filter(obj => obj.type.includes(selectedTransaction)).sort((a, b) => {
                                return new Date(b.date).getTime() - new Date(a.date).getTime()
                            })}/>
                    ) : (
                        <Text style={{
                            color: COLORS.primary,
                            fontFamily: 'Inter_400Regular'
                        }} className='mt-2 text-base'>You don't have any transaction</Text>
                    )}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    selectedTransaction: {
        color: COLORS.disabled,
        fontFamily: 'Inter_500Medium'
    },
})
export default Page