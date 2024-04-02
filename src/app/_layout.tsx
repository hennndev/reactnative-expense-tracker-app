import React, { useEffect } from 'react'
import { Stack, usePathname } from 'expo-router'
import { COLORS } from '../constants/COLORS'
import { PaperProvider } from 'react-native-paper'
import * as SplashScreen from 'expo-splash-screen'
import HeaderLeftBtn from '../components/shared/HeaderLeftBtn'
import HeaderRightBtn from '../components/shared/HeaderRightBtn'
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const pathname = usePathname()
    const [fontsLoaded, fontError] = useFonts({
        Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
    })

    useEffect(() => {
        if(fontsLoaded || fontError) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if(!fontsLoaded && !fontError) {
        return null
    }
    const pathLn = pathname.split('/').length

    return (
        <PaperProvider>
            <Stack screenOptions={({route}) => ({
                statusBarColor: '#fff',
                headerShown: pathLn > 2 ? false : true
            })}>
                <Stack.Screen
                    name='index'
                    options={{
                        title: 'Financi',
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        headerTitleStyle: {
                            fontSize: 24,
                            fontFamily: 'Inter_700Bold',
                            color: COLORS.primary
                        },
                    }}
                />
                <Stack.Screen
                    name='(primary)'
                    options={{
                        title:'',
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <HeaderLeftBtn/>
                        ),
                        headerRight: () => (
                            <HeaderRightBtn/>
                        )
                    }}
                />
            </Stack>
        </PaperProvider>
    )
}
export default RootLayout