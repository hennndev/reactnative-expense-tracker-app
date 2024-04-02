import React, { useRef, useState, useEffect } from 'react'
import moment from 'moment'
import { COLORS } from '../../constants/COLORS'
import { globalStyles } from '../../globalStyles'
import { Picker } from '@react-native-picker/picker'
import { useTransactions } from '../../store/store'
import { useForm, Controller } from 'react-hook-form'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { View, Text, StyleSheet, TextInput, Pressable, ToastAndroid, TouchableOpacity } from 'react-native'

type FormTypes = {
    name: string
    description: string
    category: string
    type: string
    amount: number | string
    date: Date
}

const TransactionForm = ({isEdit}: {isEdit?: boolean}) => {
    const pickerTypeRef = useRef<any>(null)
    const pickerCategoryRef = useRef<any>(null)
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    
    const  { addNewTransaction, transaction, editTransaction } = useTransactions()
    const { control, formState: {errors}, setValue, handleSubmit, watch, reset } = useForm<FormTypes>({
        defaultValues: {
            name: '',
            description: '',
            category: '',
            type: '',
            amount: '',
            date: new Date()
        }   
    })
    const handleDate = (event: DateTimePickerEvent, date: Date | undefined, onChange: (val: Date) => void) => {
        if(event.type === 'dismissed') {
            setShowDatePicker(false)
        }
        if(event.type === 'set') {
            setShowDatePicker(false)
            onChange(date as Date)
        }
    }
    const onSubmit = (values: FormTypes) => {
        if(!isEdit) {
            addNewTransaction({
                ...values,
                id: String(new Date().getTime()),
                amount: +values.amount,
            })
        } else {
            editTransaction({
                ...values,
                id: transaction?.id as string,
                amount: +values.amount,
            })
        }
        ToastAndroid.showWithGravity(`New transaction has ${isEdit ? 'edited' : 'added'}`, ToastAndroid.LONG, ToastAndroid.TOP)
        reset()
    }

    useEffect(() => {
        if(transaction && isEdit) {
            setValue('name', transaction.name)
            setValue('category', transaction.category)
            setValue('type', transaction.type)
            setValue('amount', transaction.amount)
            setValue('description', transaction.description)
            setValue('date', new Date(transaction.date))
        }
    }, [transaction])
    

    return (
        <View className='mb-10'>
            <Text style={styles.title} className='text-xl mb-7'>{isEdit ? 'Edit' : 'Add'} Transaction</Text>
            {/* Name */}
            <View style={styles.inputControl}>
                <Text style={styles.label} className='text-base mb-2'>Transaction name</Text>
                <Controller
                    name='name'
                    control={control}
                    rules={{
                        required: 'This field is required'
                    }}
                    render={({field: {onBlur, onChange, value}}) => (
                        <TextInput
                            textContentType='name'
                            value={value}
                            onBlur={onBlur}
                            autoComplete='off'
                            style={styles.input}
                            onChangeText={onChange}   
                            placeholder='Type your transaction title here...'
                            className={`${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} border-[1.5px] rounded-md px-6 py-5 text-base`} 
                        />
                    )}
                />
                {errors.name && <Text style={styles.textErrorInput} className='text-red-400 mt-1'>{errors.name.message}</Text>}
            </View>
            
            {/* Category */}
            <View style={styles.inputControl}>
                <Text style={styles.label} className='text-base mb-2'>Transaction category</Text>
                <Pressable 
                    style={globalStyles.flexBetween} 
                    onPress={() => pickerCategoryRef.current.focus()} 
                    className={`${errors.category ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} border-[1.5px] rounded-md px-4 py-2 text-base`}>
                    <Text style={{
                        color: COLORS.primary,
                        fontFamily: 'Inter_400Regular'
                    }} className='text-base capitalize'>{watch('category') || 'Choose transaction category'}</Text>
                    <Controller
                        name='category'
                        control={control}
                        rules={{
                            required: 'This field is required'
                        }}
                        render={({field: {onChange, value}}) => (
                            <Picker 
                                ref={pickerCategoryRef} 
                                selectedValue={value} 
                                onValueChange={(value) => onChange(value)}>
                                    <Picker.Item label='Choose transaction category :'/>
                                    <Picker.Item label='Shop' value='shop'/>
                                    <Picker.Item label='Financial' value='financial'/>
                                    <Picker.Item label='Transportation' value='transportation'/>
                            </Picker>
                        )}
                        />
                </Pressable>
                {errors.category && <Text style={styles.textErrorInput} className='text-red-400 mt-1'>{errors.category.message}</Text>}
            </View>

            {/* Type */}
            <View style={styles.inputControl}>
                <Text style={styles.label} className='text-base mb-2'>Transaction type</Text>
                <Pressable 
                    style={globalStyles.flexBetween} 
                    onPress={() => pickerTypeRef.current.focus()} 
                    className={`${errors.type ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} border-[1.5px] rounded-md px-4 py-2 text-base`}>
                    <Text style={{
                        color: COLORS.primary,
                        fontFamily: 'Inter_400Regular'
                    }} className='text-base capitalize'>{watch('type') || 'Choose transaction type'}</Text>
                    <Controller
                        name='type'
                        control={control}
                        rules={{
                            required: 'This field is required'
                        }}
                        render={({field: {onChange, value}}) => (
                            <Picker 
                                ref={pickerTypeRef} 
                                selectedValue={value} 
                                onValueChange={(value) => onChange(value)}>
                                    <Picker.Item label='Choose transaction type :'/>
                                    <Picker.Item label='Expense' value='expense'/>
                                    <Picker.Item label='Income' value='income'/>
                            </Picker>
                        )}
                    />
                </Pressable>
                {errors.type && <Text style={styles.textErrorInput} className='text-red-400 mt-1'>{errors.type.message}</Text>}
            </View>

            {/* Amount */}
            <View style={styles.inputControl}>
                <Text style={styles.label} className='text-base mb-2'>Transaction amount</Text>
                <Controller
                    name='amount'
                    control={control}
                    rules={{
                        required: 'This field is required'
                    }}
                    render={({field: {onBlur, onChange, value}}) => (
                        <TextInput
                            inputMode='numeric'
                            textContentType='name'
                            value={String(value)}
                            onBlur={onBlur}
                            autoComplete='off'
                            style={styles.input}
                            onChangeText={onChange}   
                            placeholder='Type your transaction amount here...'
                            className={`${errors.amount ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} border-[1.5px] rounded-md px-6 py-5 text-base`}  
                        />
                    )}
                />
                {errors.amount && <Text style={styles.textErrorInput} className='text-red-400 mt-1'>{errors.amount.message}</Text>}
            </View>

            {/* Description */}
            <View style={styles.inputControl}>
                <Text style={styles.label} className='text-base mb-2'>Transaction description</Text>
                <Controller
                    name='description'
                    control={control}
                    rules={{
                        required: 'This field is required'
                    }}
                    render={({field: {onBlur, onChange, value}}) => (
                        <TextInput
                            textContentType='name'
                            value={value}
                            onBlur={onBlur}
                            multiline={true}
                            numberOfLines={8}
                            autoComplete='off'
                            style={{...styles.input, textAlignVertical: 'top'}}
                            onChangeText={onChange}   
                            placeholder='Type your transaction description here...'
                            className={`${errors.description ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} border-[1.5px] rounded-md px-6 py-5 text-base`}  
                        />
                    )}
                />
                {errors.description && <Text style={styles.textErrorInput} className='text-red-400 mt-1'>{errors.description.message}</Text>}
            </View>
            
            {/* Date */}
            <View style={styles.inputControl}>
                <Text style={styles.label} className='text-base mb-2'>Transaction date</Text>
                <Pressable 
                    style={globalStyles.flexBetween} 
                    onPress={() => setShowDatePicker(true)} 
                    className={`${errors.date ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} border-[1.5px] rounded-md px-6 py-5 text-base`}>
                    <Text style={{
                        color: COLORS.primary,
                        fontFamily: 'Inter_400Regular'
                    }} className='text-base capitalize'>{moment(watch('date')).format('dddd, DD MMM YYYY') || 'Choose transaction type'}</Text>
                    {showDatePicker && <Controller
                        name='date'
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <DateTimePicker 
                                mode='date' 
                                value={value} 
                                minimumDate={new Date()}
                                onChange={(event: DateTimePickerEvent, date: Date | undefined) => handleDate(event, date, onChange)}/>
                        )}
                    />}
                </Pressable>
            </View>
            
            <TouchableOpacity style={globalStyles.btn} className='py-4' onPress={handleSubmit(onSubmit)}>
                <Text style={globalStyles.textBtn} className='text-center'>{isEdit ? 'Edit' : 'Add new'} transaction</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.primary,
        fontFamily: 'Inter_700Bold'
    },
    inputControl: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },
    label: {
        color: COLORS.primary,
        fontFamily: 'Inter_500Medium'
    },
    input: {
        color: COLORS.primary,
        fontFamily: 'Inter_400Regular'
    },
    textErrorInput: {
        fontFamily: 'Inter_500Medium',
    }
})

export default TransactionForm