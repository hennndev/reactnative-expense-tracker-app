import React from 'react'
import { globalStyles } from '../../../globalStyles'
import TransactionForm from '../../../components/create-transaction/TransactionForm'
import { ScrollView, SafeAreaView } from 'react-native'

const Page = () => {
    return (
        <ScrollView style={globalStyles.mainContainer}>
            <SafeAreaView>
                <TransactionForm isEdit/>
            </SafeAreaView>
        </ScrollView>
    )
}
export default Page