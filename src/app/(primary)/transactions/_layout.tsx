import React from 'react'
import { Stack } from 'expo-router'
import { COLORS } from '../../../constants/COLORS'

const TransactionLayout = () => {
    return <Stack>
        <Stack.Screen
            name='index'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name='[transactionId]'
            options={{
                title: 'Transactions',
                headerShadowVisible: false,
                headerShown: true,
                headerTitleStyle: {
                    fontSize: 22,
                    fontFamily: 'Inter_700Bold',
                    color: COLORS.primary
                },
        }}/>
        <Stack.Screen
            name='edit-transaction'
            options={{
                title: 'Transactions',
                headerShadowVisible: false,
                headerShown: true,
                headerTitleStyle: {
                    fontSize: 22,
                    fontFamily: 'Inter_700Bold',
                    color: COLORS.primary
                },
        }}/>
    </Stack>
}
export default TransactionLayout