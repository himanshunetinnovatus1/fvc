import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ProfilePieces = () => {
    const navigationRoute = useNavigation();
  return (
    <View>
      
      <View style={styles.bodyWrapper}>
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <View key={index}>
                                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                                    <Image
                                        source={require('../../assets/images/Item.png')}
                                        style={styles.pieceImage}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                                    <Image
                                        source={require('../../assets/images/Item2.png')}
                                        style={styles.pieceImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
    </View>
  )
}

export default ProfilePieces

const styles = StyleSheet.create({
    bodyWrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginTop: 20 },

})