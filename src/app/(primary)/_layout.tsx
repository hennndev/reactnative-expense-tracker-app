import React from 'react'
import { Tabs } from 'expo-router'
import { globalStyles } from '../../globalStyles'
import Icon from '@expo/vector-icons/FontAwesome5'

const PrimaryLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarStyle: {
                    height: 75,
                    paddingBottom: 10
                },
                tabBarShowLabel: false,
                tabBarIconStyle: {
                    marginBottom: -14
                },
                tabBarLabelStyle: globalStyles.tabBarLabel
            }}>
            <Tabs.Screen
                name='homepage'
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon name='home' style={globalStyles.tabBarIcon}/>
                    )
                }}
            />
            <Tabs.Screen
                name='create-transaction'
                options={{
                    tabBarLabel: 'Create',
                    href: '/create-transaction',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon name='pen' style={globalStyles.tabBarIcon}/>
                    )
                }}
            />
            <Tabs.Screen
                name='transactions'
                options={{
                    href: '/transactions',
                    tabBarLabel: 'Transactions',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon name='clipboard-list' style={globalStyles.tabBarIcon}/>
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon name='user-alt' style={globalStyles.tabBarIcon}/>
                    )
                }}
            />
        </Tabs>
    )
}
export default PrimaryLayout