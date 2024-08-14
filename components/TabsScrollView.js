import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import COLORS from '../const/colors';
const TabsScrollView = ({ activeTab, setActiveTab, tabs }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.mainWrapperTwo}>
            {tabs.map(tab => (
                <TouchableOpacity
                    key={tab.key}
                    style={[styles.subTabsWrapper, activeTab === tab.key && styles.activeTab]}
                    onPress={() => setActiveTab(tab.key)}
                >
                    <Image
                        source={tab.icon}
                        style={styles.catImage}
                    />
                    <Text style={styles.wrapperText}>{tab.label}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default TabsScrollView;

const styles = StyleSheet.create({
    mainWrapperTwo: { paddingHorizontal: 20, height: 30 },
    subTabsWrapper: {
        flexDirection: "row", alignItems: "center", paddingVertical: 4,
        borderWidth: 1, borderColor: COLORS.ShadowDarkest, borderRadius: 25,
        paddingHorizontal: 15, marginRight: 15, height: 30,
    },
    activeTab: { backgroundColor: COLORS.Secondary, },
    wrapperText: { color: COLORS.ShadowDarkest, fontSize: 14, marginLeft: 4 },
    catImage: { width: 18, height: 18 },
});
