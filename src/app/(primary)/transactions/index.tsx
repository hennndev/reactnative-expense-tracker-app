import React, { useState } from 'react'
import { COLORS } from '../../../constants/COLORS'
import { globalStyles } from '../../../globalStyles'
import { useTransactions } from '../../../store/store'
import TransactionList from '../../../components/shared/TransactionList'
import TransactionPicker from '../../../components/shared/TransactionPicker'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'

const Page = () => {
    const { transactions } = useTransactions()
    const [selectedTransaction, setSelectedTransaction] = useState<string>('')

    return (
        <ScrollView style={globalStyles.mainContainer}>         
            <SafeAreaView>
                <View>
                    <View style={globalStyles.flexBetween} className='mb-7'>
                        <Text style={styles.title} className='text-xl'>My Transactions</Text>
                        <TransactionPicker selectedTransaction={selectedTransaction} setSelectedTransaction={setSelectedTransaction}/>
                    </View>
                    {transactions.length > 0 ? (
                        <TransactionList 
                            transactionType={selectedTransaction} 
                            isTransactionPage 
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
    }
})
export default Page