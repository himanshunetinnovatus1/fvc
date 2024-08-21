
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
                    <Text style={styles.addPieceText}>Closet’s Full</Text>
                    <Text style={[styles.addPieceTextThree]}>25/25 Free pieces</Text>
                    <TouchableOpacity style={styles.upgradeWrapper} onPress={()=>navigationRoute.navigate("")}>
                        <Text style={styles.upgradeText}>Upgrade</Text>
                        <Image
                            source={require('../assets/images/blackThunder.png')}
                            style={styles.upgradeBtnIMG}
                        />
                    </TouchableOpacity>
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
    addPieceOne: {
        width: width * 0.27, marginBottom: 15, alignItems: 'center', justifyContent: 'center',
        borderStyle: 'dashed', borderWidth: 2, borderRadius: 10, borderColor: COLORS.btnColor,
    },
    addPieceText: { fontSize: 14, fontWeight: '700', color: COLORS.ShadowDarkest, textAlign: "center" },
    addPieceTextThree: { fontSize: 11, fontWeight: '400', color: COLORS.ShadowDarkest, marginHorizontal: 5 },
    pieceImage: { height: 125, width: 110 },
    upgradeWrapper: {
        flexDirection: "row", backgroundColor: COLORS.btnColor, paddingVertical: 5, paddingHorizontal: 8,
        marginTop: 10, borderRadius: 6, justifyContent: "center", alignItems: "center",
    },
    upgradeBtnIMG: { width: 10, height: 15 },
    upgradeText: { fontSize: 14, fontWeight: "700", marginRight: 5 }
});


