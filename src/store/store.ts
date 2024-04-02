import { create } from "zustand"

type TransactionsTypes = {
    transactions: Array<TransactionTypes>
    transaction: TransactionTypes | null
    addNewTransaction: (transaction: TransactionTypes) => void
    editTransaction: (transaction: TransactionTypes) => void
    deleteTransaction: (id: string) => void
    handleTransaction: (value: TransactionTypes | null) => void
}

export const useTransactions = create<TransactionsTypes>()((set) => ({
    transactions: [],
    transaction: null,
    addNewTransaction: (transaction: TransactionTypes) => set((state) => ({transactions: [...state.transactions, transaction]})),
    editTransaction: (transaction: TransactionTypes) => set((state) => {
        return {
            transactions: state.transactions.map(obj => {
                if(obj.id === transaction.id) {
                    return {
                        ...obj,
                        ...transaction
                    }
                } else {
                    return obj
                }
            })
        }
    }),
    deleteTransaction: (id: string) => set((state) => {
        return {
            transactions: state.transactions.filter(obj => obj.id !== id)
        }
    }),
    handleTransaction: (value: TransactionTypes | null) => set((state) => ({transaction: value}))
}))