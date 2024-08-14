
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import NotifiyChatHeader from '../../components/headers/NotifiyChatHeader';
import lens from "../../assets/images/lens.png";
import diaTriangle from "../../assets/images/diaTriangle.png";
import taddy from "../../assets/images/taddy.png";
import COLORS from '../../const/colors';
import PageStyle from '../../const/PageStyle';
import ProfileCard from '../../components/ProfileCard';
import { useNavigation } from '@react-navigation/native';
import ThemeStyle from '../../const/ThemeStyle';

const Search = () => {
    const navigationRoute = useNavigation();
    const [text, onChangeText] = useState('explore fitted');
    const [activeTab, setActiveTab] = useState("Top")

    const setTab = (item) => {
        setActiveTab(item);
    }


    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <NotifiyChatHeader />
            <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.footerWrapper}>
                    <View style={styles.inputTextWrapper}>
                        <Image
                            source={lens}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>
                </View>

                <View style={styles.tabFilters}>

                    <TouchableOpacity style={{ borderRightWidth: 1, width: "15%", alignItems: "center", justifyContent: "center", }} onPress={() => setTab("Top")}>
                        <Text style={activeTab === "Top" ? styles.tabTextTwo : styles.tabText}>Top</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRightWidth: 1, width: "20%", alignItems: "center", justifyContent: "center", }} onPress={() => setTab("People")}>
                        <Text style={activeTab === "People" ? styles.tabTextTwo : styles.tabText}>People</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRightWidth: 1, width: "20%", alignItems: "center", justifyContent: "center", }} onPress={() => setTab("Pieces")}>
                        <Text style={activeTab === "Pieces" ? styles.tabTextTwo : styles.tabText}>Pieces</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRightWidth: 1, width: "15%", alignItems: "center", justifyContent: "center", }} onPress={() => setTab("Fits")}>
                        <Text style={activeTab === "Fits" ? styles.tabTextTwo : styles.tabText}>Fits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "30%", alignItems: "center", justifyContent: "center", textAlign: "center" }} onPress={() => setTab("Collections")}>
                        <Text style={activeTab === "Collections" ? styles.tabTextTwo : styles.tabText}>Collections</Text>
                    </TouchableOpacity>
                </View>


                {activeTab === "Top" &&
                    <>
                        <View>
                            <Text style={[styles.headingOne, PageStyle.text]}>Explore the Clothesline</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: "row", marginTop: 12, marginBottom: 18 }}>
                                    <View style={[styles.jortsWrapper]}>
                                        <Text style={[styles.jortsText, PageStyle.text]}>Jorts </Text>
                                        <Image source={diaTriangle} style={styles.jortsArrow} />
                                    </View>
                                    <View style={[styles.jortsWrapper]}>
                                        <Text style={[styles.jortsText, PageStyle.text]}>Jorts </Text>
                                        <Image source={diaTriangle} style={styles.jortsArrow} />
                                    </View>
                                    <View style={[styles.jortsWrapper]}>
                                        <Text style={[styles.jortsText, PageStyle.text]}>Jorts </Text>
                                        <Image source={diaTriangle} style={styles.jortsArrow} />
                                    </View>
                                    <View style={[styles.jortsWrapper]}>
                                        <Text style={[styles.jortsText, PageStyle.text]}>Jorts </Text>
                                        <Image source={diaTriangle} style={styles.jortsArrow} />
                                    </View>
                                    <View style={[styles.jortsWrapper]}>
                                        <Text style={[styles.jortsText, PageStyle.text]}>Jorts </Text>
                                        <Image source={diaTriangle} style={styles.jortsArrow} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <Text style={[styles.headingOne, PageStyle.text]}>Recommended Follows</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: "row", marginTop: 12, }}>
                                    <ProfileCard />
                                    <ProfileCard />
                                    <ProfileCard />
                                    <ProfileCard />
                                </View>
                            </ScrollView>
                        </View>

                        <View>
                            <Text style={[styles.headingOne, PageStyle.text]}>Discover Styles</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: "row", marginTop: 12, }}>
                                    <ProfileCard />
                                    <ProfileCard />
                                    <ProfileCard />
                                    <ProfileCard />
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.tabWrapperBody}>

                            <View>
                                <Text style={[styles.headingOne, PageStyle.text, { marginBottom: 10 }]}>Fits</Text>
                                <ScrollView horizontal={true} style={styles.horizontalScrollView} showsHorizontalScrollIndicator={false}>
                                    <View style={styles.bodyWrapperTwo}>
                                        <View style={styles.CollectionBoxes}></View>
                                        <View style={styles.CollectionBoxes}></View>
                                        <View style={styles.CollectionBoxes}></View>
                                        <View style={styles.CollectionBoxes}></View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </>
                }

                {activeTab === "People" &&
                    <>
                        <TouchableOpacity style={styles.peopleWrapper} onPress={() => navigationRoute.navigate("PeopleProfile")}>
                            <View >
                                <Image
                                    style={styles.profileImage}
                                    source={taddy}
                                />
                            </View>
                            <View style={styles.detailsWrapper}>
                                <Text style={styles.peopleWrapperText}>@finnbags</Text>
                                <View style={styles.subDetailsWrapper} >
                                    <Text style={styles.subDetailsText}>Ogden inBetweeners</Text>
                                    <Text style={styles.subDetailsText}>Folllowing</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.peopleWrapper} onPress={() => navigationRoute.navigate("PeopleProfile")}>
                            <View >
                                <Image
                                    style={styles.profileImage}
                                    source={taddy}
                                />
                            </View>
                            <View style={styles.detailsWrapper}>
                                <Text style={styles.peopleWrapperText}>@finnbags</Text>
                                <View style={styles.subDetailsWrapper} >
                                    <Text style={styles.subDetailsText}>Ogden inBetweeners</Text>
                                    <Text style={styles.subDetailsText}>Folllowing</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.peopleWrapper} onPress={() => navigationRoute.navigate("PeopleProfile")}>
                            <View >
                                <Image
                                    style={styles.profileImage}
                                    source={taddy}
                                />
                            </View>
                            <View style={styles.detailsWrapper}>
                                <Text style={styles.peopleWrapperText}>@finnbags</Text>
                                <View style={styles.subDetailsWrapper} >
                                    <Text style={styles.subDetailsText}>Ogden inBetweeners</Text>
                                    <Text style={styles.subDetailsText}>Folllowing</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.peopleWrapper} onPress={() => navigationRoute.navigate("PeopleProfile")}>
                            <View >
                                <Image
                                    style={styles.profileImage}
                                    source={taddy}
                                />
                            </View>
                            <View style={styles.detailsWrapper}>
                                <Text style={styles.peopleWrapperText}>@finnbags</Text>
                                <View style={styles.subDetailsWrapper} >
                                    <Text style={styles.subDetailsText}>Ogden inBetweeners</Text>
                                    <Text style={styles.subDetailsText}>Folllowing</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </>
                }




            </ScrollView>
        </SafeAreaView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },
    mainWrapper: { marginHorizontal: width * 0.05, flex: 1 },
    DP: { width: 40, height: 40, },
    footerWrapper: { flexDirection: "row", backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center" },
    inputTextWrapper: {
        flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 20,
        width: width * 0.9, paddingRight: 20, paddingLeft: 10
    },
    backArrow: { width: 23, height: 23, },
    jortsArrow: { width: 15, height: 15, marginLeft: 5 },
    input: { height: 40, padding: 10, width: "100%", fontSize: 14 },
    tabFilters: {
        flexDirection: "row", justifyContent: "center", borderRadius: 6, borderWidth: 1,
        paddingVertical: 5, marginTop: 10
    },
    tabText: { fontSize: 16, },
    tabTextTwo: { fontSize: 16, fontWeight: '700' },
    headingOne: { color: 'black', fontSize: 20, fontWeight: '700', paddingTop: 12 },
    jortsWrapper: {
        borderWidth: 3, borderColor: COLORS.Secondary, borderRadius: 3, paddingHorizontal: 12, alignItems: "center",
        justifyContent: "center", paddingVertical: 2, marginRight: 12, flexDirection: "row"
    },
    jortsText: { fontSize: 20, fontWeight: '700', color: COLORS.Secondary, },

    profileImage: { width: 70, height: 70, marginRight: 20 },
    peopleWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 20, },
    detailsWrapper: { width: "70%" },
    peopleWrapperText: { fontWeight: '700', fontSize: 18, marginBottom: 5 },
    subDetailsWrapper: { flexDirection: "row", justifyContent: "space-between", },
    subDetailsText: { fontSize: 15, },
    CollectionBoxes: { width: 120, height: 120, borderWidth: 1, borderRadius: 8, marginRight: 15, marginBottom: 20, backgroundColor: COLORS.lightGray },
    bodyWrapperTwo: { flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", },
});

export default Search;
