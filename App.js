import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import PlaceCard from './PlaceCard';

export default function App() {

  return (

    <SafeAreaView style={estilo.safeArea}>

      <ScrollView contentContainerStyle={estilo.scrollContent}>

        <View style={estilo.principal}>

          <PlaceCard
            title="Niladri Reservoir"
            image={require("./assets/img1.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$459/Person"
          />

          <PlaceCard
            title="Casa Las Tirtugas"
            image={require("./assets/img2.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$894/Person"
          />

          <PlaceCard
            title="Aonang Villa Resort"
            image={require("./assets/img3.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$761/Person"
          />

          <PlaceCard
            title="Rangauti Resort"
            image={require("./assets/img4.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$857/Person"
          />

          <PlaceCard
            title="Azure Bay"
            image={require("./assets/img5.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$977/Person"
          />

          <PlaceCard
            title="Whispering Pines"
            image={require("./assets/img6.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$889/Person"
          />

          <PlaceCard
            title="Crystal Shores"
            image={require("./assets/img7.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price="$928/Person"
          />

          <PlaceCard
            title="Sunset Lagoon"
            image={require("./assets/img8.jpg")}
            location="Lorem ipsum dolor"
            rating="4.5"
            price=""
          />

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

const estilo = StyleSheet.create({

  safeArea: {
    flex: 1,
    paddingTop: 60,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  principal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "center",
    gap: 20,
  },

  negrito: {
    fontWeight: 'bold'
  },

});