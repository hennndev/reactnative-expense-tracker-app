import React from 'react'
import { COLORS } from '../../constants/COLORS'
import TransactionItem from './TransactionItem'
import { View, StyleSheet, Text } from 'react-native'

type PropsTypes = {
    transactionType: string
    transactions: Array<TransactionTypes>
    isTransactionPage?: boolean
}

const TransactionList = ({transactionType, transactions, isTransactionPage}: PropsTypes) => {
    return (
        <View style={{gap: 20}} className={`${!isTransactionPage ? 'border-[1.5px] border-gray-100 p-5 rounded-md' : ''}`}>
            {transactions.length > 0 ? transactions.map((data) => (
                <TransactionItem key={data.id} data={data}/>
            )): (
                <Text style={{
                    color: COLORS.primary,
                    fontFamily: 'Inter_400Regular'
                }} className='mt-2 text-base'>You don't have any {transactionType} transaction</Text>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
})
export default TransactionList