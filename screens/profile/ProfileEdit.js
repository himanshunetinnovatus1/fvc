

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import backArrow from "../../assets/images/backArrow.png";
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../const/colors';
import ThemeStyle from '../../const/ThemeStyle';
import Button from '../../components/Button';
import Feather from 'react-native-vector-icons/Feather';


const MyProfile = ({ navigation, route }) => {
    const navigationRoute = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [showEditThings, setShowEditThings] = useState({
        editPiece: false,

    });

    const [formData, setFormData] = useState({
        name: "Sara Smith",
        userName: "auroraangle",
        email: "Smith.sara@gmail.com",
        password: "123456789",
    })

    const editHandler = () => {
        setShowEditThings({
            editPiece: true,
        });
    };


    const doneEditing = () => {
        setShowEditThings({
            editPiece: false,

        });
    };

    return (
        <View style={[styles.container, ThemeStyle.iosClass]}>

            <View style={ThemeStyle.mainWrapper}>
                <TouchableOpacity style={ThemeStyle.backArrowWrapper} onPress={() => navigationRoute.goBack()}>
                    <Image
                        source={backArrow}
                        style={ThemeStyle.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View>
                    <Text style={[ThemeStyle.nameText]}>My Profile</Text>
                </View>
            </View>
            <View style={styles.imageWrapper}>
                <View style={styles.profileImageWrappper}>
                    <Image
                        source={require("../../assets/images/UserPFP.png")}
                        style={styles.profileDp}
                        resizeMode="contain"
                    />
                    <Text style={[ThemeStyle.BoldKeyword, styles.profileText]}>Change Photo</Text>
                </View>
                <View style={styles.profileImageWrappper}>
                    <Image
                        source={require("../../assets/images/BadgePFP.png")}
                        style={styles.profileDp}
                        resizeMode="contain"
                    />
                    <Text style={[ThemeStyle.BoldKeyword, styles.profileText]}
                        onPress={() => { navigationRoute.navigate('EditBadge') }}>Change Badge</Text>
                </View>
            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Name</Text>
                </View>

                {showEditThings.editPiece ?
                    <View>
                        <TextInput
                            style={[styles.subDescriptionTextTwo, styles.input]}
                            value={formData.name}
                            onChangeText={text => setFormData({ ...formData, name: text })}
                        />
                    </View> :
                    <View style={styles.innerDse}>
                        <Text style={ThemeStyle.BoldKeyword}>{formData.name}</Text>
                    </View>
                }
            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Username</Text>
                </View>

                {showEditThings.editPiece ?
                    <View>
                        <TextInput
                            style={[styles.subDescriptionTextTwo, styles.input]}
                            value={formData.userName}
                            onChangeText={text => setFormData({ ...formData, userName: text })}
                        />
                    </View> :
                    <View style={styles.innerDse}>
                        <Text style={ThemeStyle.BoldKeyword}>{formData.userName}</Text>
                    </View>
                }
            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Email</Text>
                </View>
                {showEditThings.editPiece ?
                    <View>
                        <TextInput
                            style={[styles.subDescriptionTextTwo, styles.input]}
                            value={formData.email}
                            onChangeText={text => setFormData({ ...formData, email: text })}
                        />
                    </View> :
                    <View style={styles.innerDse}>
                        <Text style={ThemeStyle.BoldKeyword}>{formData.email}</Text>
                    </View>
                }
            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Change Password</Text>
                </View>

                {showEditThings.editPiece ?
                    <View>
                        <TextInput
                            style={[styles.subDescriptionTextTwo, styles.input]}
                            value={formData.password}
                            onChangeText={text => setFormData({ ...formData, password: text })}
                        />
                    </View> :
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        {passwordVisible ?
                            <Text style={ThemeStyle.BoldKeyword}>{formData.password}  </Text>
                            :
                            <Text style={ThemeStyle.BoldKeyword}>••••••••  </Text>
                        }
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Feather
                                name={!passwordVisible ? "eye" : "eye-off"}
                                style={{
                                    fontSize: 18,
                                    color: COLORS.ShadowDarkest,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                }

            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Terms & Conditions</Text>
                </View>
                <View>
                    <Text style={ThemeStyle.UnderlineKeywordBold}>View</Text>
                </View>
            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Privacy Policy</Text>
                </View>
                <View>
                    <Text style={ThemeStyle.UnderlineKeywordBold}>View</Text>
                </View>
            </View>
            <View style={[styles.mainWrapperTwo, ThemeStyle.bottomBorder]}>
                <View>
                    <Text style={ThemeStyle.Keyword}>Permissions</Text>
                </View>
                <View>
                    <Text style={ThemeStyle.UnderlineKeywordBold}
                        onPress={() => navigationRoute.navigate('Permissions')}
                    >Modify</Text>
                </View>
            </View>

            <Button
                title="Log Out"
                btnTextColor={COLORS.Crimson}
            />

            {showEditThings.editPiece ?
                <Button
                    title="Save Changes"
                    buttonType
                    bgColor={COLORS.btnColor}
                    btnTextColor={COLORS.ShadowDarkest}
                    stylesCss={ThemeStyle.stylesCssOne}
                    btnwidth="100%"
                    onPress={doneEditing}
                />
                :
                <Button
                    title="Edit Profile"
                    buttonType
                    bgColor={COLORS.btnColor}
                    btnTextColor={COLORS.ShadowDarkest}
                    stylesCss={ThemeStyle.stylesCssOne}
                    btnwidth="100%"
                    onPress={editHandler}
                />
            }

        </View>
    );
};

export default MyProfile;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white, flex: 1, width: width, height: height, paddingHorizontal: width * 0.05,
    },
    mainWrapperTwo: {
        flexDirection: 'row', paddingVertical: 15, height: 60,
        justifyContent: 'space-between', alignItems: "center",
    },
    profileImageWrappper: {
        justifyContent: "center", alignItems: "center", alignContent: 'center', paddingHorizontal: 5, paddingVertical: 10
    },
    profileDp: { width: width * 0.3, height: height * 0.12 },
    profileText: { paddingTop: 10 },
    imageWrapper: { display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", },
    subDescriptionTextTwo: { fontSize: 17, fontWeight: "700", color: COLORS.ShadowDarkest, },
    input: {
        height: 40, width: width * 0.4,
        borderWidth: 1, borderRadius: 5, borderColor: COLORS.TextTertiart,
    },
});
