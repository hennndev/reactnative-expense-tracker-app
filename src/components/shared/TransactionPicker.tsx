import React, { useRef } from 'react'
import { COLORS } from '../../constants/COLORS'
import { Picker } from '@react-native-picker/picker'
import { Pressable, StyleSheet, Text } from 'react-native'

type PropsTypes = {
    selectedTransaction: string
    setSelectedTransaction: (value: string) => void
}

const TransactionPicker = ({ selectedTransaction, setSelectedTransaction}: PropsTypes) => {
    const pickerRef = useRef<any>(null)
    return (
        <>
            <Pressable className='flex items-center flex-row' onPress={() => pickerRef.current.focus()}>
                <Text style={styles.selectedTransaction} className='capitalize text-sm'>{selectedTransaction === '' ? 'Show All' : selectedTransaction}</Text>
            </Pressable>
            <Picker style={{display: 'none', opacity: 0}} ref={pickerRef} selectedValue={selectedTransaction} onValueChange={(value) => setSelectedTransaction(value)}>
                <Picker.Item label='Show All' value=''/>
                <Picker.Item label='Income' value='income'/>
                <Picker.Item label='Expense' value='expense'/>
            </Picker>
        </>
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
export default TransactionPicker