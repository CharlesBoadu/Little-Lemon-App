import * as React from "react";
import { View } from "react-native";
import { ScrollView, Text, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

export default function WelcomeScreen() {
  const renderItem = ({ item }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20, color: "#F4CE14" }}>{item.name}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "#F4CE14" }}>{item.price}</Text>
      </View>
    </View>
  );

  const sectionHeader = ({ section: { title } }) => (
    <View style={{backgroundColor: "#F4CE14" }}>
      <Text style={{ fontSize: 30, color: "black" }}>{title}</Text>
    </View>
  );
  return (
    <>
      <View>
          {/* <SectionList sections={menuItemsToDisplay} keyExtractor={(item, index) => item + index} renderItem={renderItem} renderSectionHeader={sectionHeader} /> */}
      </View>
    </>
  );
}
