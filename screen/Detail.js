import React from 'react';
import {
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants"


const Detail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: COLORS.while,
        paddingHorizontal: SIZES.base,
        paddingVertical: SIZES.base
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.default,
          height: 40,
          width: 80,
          borderRadius: 20
        }}
        onPress={() => navigation.goBack()}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text
            style={{
              ...FONTS.h6,
              color: COLORS.while,
            }}>Back</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.radius,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white
        }}
      >
        
      </View>


    </View>
  )
}

export default Detail;
