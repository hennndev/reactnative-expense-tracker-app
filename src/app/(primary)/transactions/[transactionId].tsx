import React, { useState } from 'react'
import moment from 'moment'
import { COLORS } from '../../../constants/COLORS'
import { Dialog, Portal } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles' 
import { useTransactions } from '../../../store/store'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Pressable } from 'react-native'

const TransactionDetail = () => {
    const router = useRouter()
    const { transactions, deleteTransaction, handleTransaction } = useTransactions()
    const { transactionId } = useLocalSearchParams()
    const [showModalRemove, setshowModalRemove] = useState<boolean>(false)
    const transaction = transactions.find(obj => obj.id === transactionId)

    const removeTransaction = () => {
        deleteTransaction(transaction?.id as string)
        setshowModalRemove(false)
        router.replace('/transactions')
    }

    const editTransaction = () => {
        handleTransaction(transaction as TransactionTypes)
        router.push('/transactions/edit-transaction')
    }

    return (
        <>
            <ScrollView style={globalStyles.mainContainer}>
                <SafeAreaView>
                    <View className='mb-4'>
                        <Text style={styles.date} className='text-base mb-1'>{moment(transaction?.date).format('dddd, DD MMM YYYY')}</Text>
                        <Text style={styles.name} className='text-3xl'>{transaction?.name}</Text>
                        <Text style={styles.category} className='text-base mb-2 text-gray-400'>{transaction?.category}</Text>
                        <Text style={styles.amount} className={`${transaction?.type === 'expense' ? 'text-red-600' : 'text-green-600'} text-xl mb-2`}>Amount: {transaction?.type === 'expense' ? '-' : '+'}${parseInt(String(transaction?.amount).replace('-', ''))}</Text>
                        <Text style={styles.description} className='text-base text-gray-500'>{transaction?.description}</Text>
                    </View>
                    <View style={globalStyles.flexx} className='w-full'>
                        <TouchableOpacity style={globalStyles.btn} className='mr-3 flex-1' onPress={editTransaction}>
                            <Text style={globalStyles.textBtn} className='text-center'>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.btn} className='flex-1' onPress={() => setshowModalRemove(true)}>
                            <Text style={globalStyles.textBtn} className='text-center'>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <Portal>
                <Dialog style={styles.dialog} visible={showModalRemove} onDismiss={() => setshowModalRemove(false)}>
                    <Dialog.Content>
                        <Text style={styles.dialogText} className='text-base'>Are you sure want to remove this transaction?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Pressable onPress={() => setshowModalRemove(false)}>
                            <Text style={styles.textBtnDialog}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={removeTransaction}>
                            <Text style={styles.textBtnDialog}>Delete</Text>
                        </Pressable>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    )
}

const styles = StyleSheet.create({
    date: {
        color: COLORS.primary,
        fontFamily: 'Inter_500Medium'
    },
    name: {
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    category: {
        fontFamily: 'Inter_400Regular'
    },
    amount: {
        fontFamily: 'Inter_700Bold'
    },
    description: {
        fontFamily: 'Inter_500Medium'
    },
    dialog: {
        backgroundColor: '#fff'
    },
    dialogText: {
        color: COLORS.primary,
        fontFamily: 'Inter_500Medium'
    },
    textBtnDialog: {
        color: COLORS.primary,
        fontFamily: 'Inter_400Regular'
    }
})
export default TransactionDetail