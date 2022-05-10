import React from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, Text } from 'react-native';
import ahmet from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {

    const { loading, data, error } = useFetch(ahmet.API_PRODUCT_URL);

    const handleProductSelect = id =>{
        navigation.navigate('DetailPage',{id});
    };
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>

    if (loading) {
        return <ActivityIndicator size='large' />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        
            <FlatList data={data} renderItem={renderProduct} />
        
    );
};

export default Products;