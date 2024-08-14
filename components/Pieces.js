



import React from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, TouchableOpacity, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageStyle from "../const/PageStyle";
import SubTabs from "../components/SubTabs";
import COLORS from '../const/colors';


const Pieces = () => {
    const navigationRoute = useNavigation();

    return (
        <View>
            <SubTabs />

            <View style={styles.bodyWrapper}>
                <View style={styles.addPieceOne}>
                    <Text style={styles.addPieceText}>+</Text>
                    <Text style={[styles.addPieceTextTwo, PageStyle.text]}>Add Piece</Text>
                    <Text style={[styles.addPieceTextThree, PageStyle.text]}>8/25 Free pieces</Text>
                </View>

                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item2.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item2.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item2.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item2.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPiece} onPress={() => navigationRoute.navigate("AddtoCloset")}>
                    <Image
                        source={require('../assets/images/Item.png')}
                        style={styles.pieceImage}
                    />
                </TouchableOpacity>
            </View>
        </View>


    );
};

export default Pieces;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    bodyWrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginTop: 20 },
    addPieceOne: { width: width * 0.27, marginBottom: 15, alignItems: 'center', justifyContent: 'center', borderStyle: 'dotted', borderWidth: 3, borderRadius: 10 },
    addPieceText: { fontSize: 50, fontWeight: '300', color: COLORS.ShadowDarkest, textAlign: "center" },
    addPieceTextTwo: { fontSize: 16, fontWeight: '700', color: COLORS.ShadowDarkest },
    addPieceTextThree: { fontSize: 12, fontWeight: '500', color: COLORS.ShadowDarkest, marginBottom: 5 },
    pieceImage: { height: 125, width: 110 },
});


