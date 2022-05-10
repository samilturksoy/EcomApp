import React from 'react';
import { SafeAreaView, Text, Image, View, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
const Detail = ({ route }) => {
    const { id } = route.params;

    const { loading, error, data } = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

    if (loading) {
        return <ActivityIndicator size='large' />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    );
}

export default Detail;