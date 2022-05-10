import React from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import Input from '../../components/Input';
import styles from './Login.style';
import Button from '../../components/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost/';
import Config from 'react-native-config';



const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();

    function handleLogin(values) {
        post(Config.API_AUTH_URL + '/login', values);
    }
    if (error) {
        Alert.alert("Bir hata oluştu");
    }
    if (data) {
        if (data.status === 'Error') {
            Alert.alert("Kullanıcı bulunamadı");
        }
        else {
            navigation.navigate("ProductsPage");
        }
        console.log(data);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../asstes/login_logo.png')} />
            </View>

            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (<View style={styles.body_container} >
                    <Input
                        placeholder="Email"
                        value={values.username}
                        onType={handleChange('username')}
                        iconName="account"
                    />

                    <Input
                        placeholder="Şifrenizi giriniz"
                        value={values.password}
                        onType={handleChange('password')}
                        iconName="key"
                        isSecure={true}
                    />
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                </View>)}
            </Formik>
        </SafeAreaView>
    );
};

export default Login;