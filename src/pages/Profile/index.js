import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import {dummy1} from '../../assets/Dummy/index';
import {ProfileTabSection} from '../../components/molecules/index';
import { API_HOST } from '../../config';
import { getData, showMessage } from '../../utils';


const Profile = () => {
    const [userProfile, setUserProfile] = useState({})
    useEffect(() => {
        getData('userProfile').then(res => {
            setUserProfile(res)
        })
    }, [])
    const updatePhoto = () => {
        launchImageLibrary.apply({
            quality: 0.7,
            maxWidth: 200,
            maxHeight: 200,
        }, (response) => {
            if (response.didCancel || response.error) {
                showMessage('Anda tidak memilih photo')
            } else {
                const source = {uri: response.uri}
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                }

                const photoForUpload = new FormData();
                photoForUpload.append('file', dataImage)
                getData('token').then((resToken) => {
                    Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                        headers: {
                            Authorization: resToken.value,
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                        .then((res) => {
                            getData('userProfile').then((resUser) => {
                            showMessage('Update Photo Berhasil', 'success');
                            resUser.profile_photo_url = `${API_HOST.urlLocalStorage}/${res.data.data[0]}`;
                            storeData('userProfile', resUser).then(() => {
                                updateUserProfile();
                            });
                            });
                        })
                        .catch((err) => {
                            showMessage(
                            `${err?.response?.data?.message} on Update Photo API` ||
                                'Terjadi kesalahan di Server Update Photo',
                            );
                        });
                    });
                    }
                },
                );
            };
    return (
        <View style={styles.page}>
            <View style={styles.profileDetail}>
                {/* <View style={styles.photo}>
                    <TouchableOpacity onPress={updatePhoto}>
                    <View style={styles.borderPhoto}>
                    <Image source={{ uir: userProfile.profile_photo_url }} style={styles.photoContainer}/>
                </View>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.photo}>
                    {/* <Image source={dumm}/> */}
                </View>
                <Text style={styles.name}>{userProfile.name}</Text>
                <Text style={styles.email}>{userProfile.email}</Text>
            </View>
                <View style={styles.content}>
                    <ProfileTabSection/>
                </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    name: {
        fontSize: 18,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#020202',
        textAlign: 'center'
    },
    email: {
        fontSize: 13,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#8D92A3',
        textAlign: 'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 24,
        // textAlign: 'center',

    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    page: {
        flex: 1
    },
    content: {
        flex:1,
        marginTop: 24
    },
    profileDetail: {
        backgroundColor: 'white',
        paddingBottom: 26
    }
})
