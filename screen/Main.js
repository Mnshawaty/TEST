import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants"

const Main = ({ navigation }) => {

  const [selectedValue, setSelectedValue] = React.useState("Restaurant");
  const [restaurant, setRestaurant] = React.useState(dummyData.restaurant)

  return (
    <View
      style={{
        flex: 0,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.while,
        paddingHorizontal: SIZES.base
      }}
    >

      <Text
        style={{
          ...FONTS.h4,
          color: COLORS.black,
          marginLeft: SIZES.padding,
          marginTop: SIZES.padding
        }}
      >Place List</Text>

      <View style={{
        borderWidth: 3,
        borderColor: COLORS.default,
        borderRadius: 25,
        paddingHorizontal: 5,
        marginTop: SIZES.base
      }}>
        <Picker
          selectedValue={selectedValue}
          //style={{ justifyContent: 'center' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Restaurant" value="Restaurant" />
          <Picker.Item label="Bakery" value="Bakery" />
          <Picker.Item label="Cafe" value="Cafe" />
        </Picker>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          borderWidth: 3,
          borderColor: COLORS.default,
          borderRadius: 25,
          paddingHorizontal: 5
        }}
      >

        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            padding: 2,
            ...FONTS.body3
          }}
          placeholder="search name"
        />


        <Image
          source={icons.search}
          style={{
            flex: 0,
            height: 20,
            width: 20,
            tintColor: COLORS.black
          }}
        />

      </View>


      <FlatList
        data={restaurant}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                backgroundColor: COLORS.while,
                height: 400,
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                borderWidth: 1,
                borderColor: COLORS.gray
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <View style={{ borderRadius: SIZES.radius }}>
                  <Image source={item.image1}
                    style={{ height: 90, borderTopRightRadius: SIZES.radius, }} />
                </View>

                <Text style={{ marginTop: SIZES.radius, marginLeft: SIZES.base, ...FONTS.h5 }}>{item.name}</Text>
                <Text style={{ marginTop: 2, marginLeft: SIZES.base, marginBottom: SIZES.base, ...FONTS.h6 }}>{item.time}</Text>

                <Image source={item.image2} style={{ height: 220 }} />
              </TouchableOpacity>
            </View>
          )
        }}
      />


    </View>
  )
}

export default Main;
