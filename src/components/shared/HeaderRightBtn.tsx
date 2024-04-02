import React from 'react'
import { COLORS } from '../../constants/COLORS'
import Icon from '@expo/vector-icons/FontAwesome5' 
import { Pressable, StyleSheet } from 'react-native'

const HeaderRightBtn = () => {
    return (
        <Pressable style={{marginRight: 10}}>
            <Icon name='search' style={styles.iconSearch}/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    iconSearch: {
        fontSize: 20,
        color: COLORS.primary
    }
})
export default HeaderRightBtn