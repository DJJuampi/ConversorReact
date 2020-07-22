import React, { Component, useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Picker } from 'react-native';


export default function App(props) {
    const [NumConvertir, setNumConvertir] = useState(0);
    const [Seleccion, setSeleccion] = useState(0);
    const [NumConvertido, setConvertido] = useState(0);
    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Numero"
                onChangeText={texto => setNumConvertir(texto)}
                defaultValue={NumConvertir}
            />
            <Picker
                selectedValue={Seleccion}
                style={{ height: 50, width: 150}}
                onValueChange={(itemValue) => setSeleccion(itemValue)}    
            >
                <Picker.item label="CM a MM" value={1}/>
                <Picker.item label="CM a KM" value={2}/>
                <Picker.item label="MM a CM" value={3}/>
                <Picker.item label="MM a KM" value={4}/>
                <Picker.item label="KM a CM" value={5}/>
                <Picker.item label="KM a MM" value={6}/>
            </Picker>
            <Button
                onPress={() => {
                    if (Seleccion === 1) {
                        setConvertido(NumConvertir * 10)
                    } else if (Seleccion === 2) {
                        setConvertido(NumConvertir / 100000)
                    } else if (Seleccion === 3) {
                        setConvertido(NumConvertir / 10)
                    } else if (Seleccion === 4) {
                        setConvertido(NumConvertir / 1e+6)
                    } else if (Seleccion === 5) {
                        setConvertido(NumConvertir * 100000)
                    } else if (Seleccion === 6) {
                        setConvertido(NumConvertir * 1e+6)
                    }
                }
                }
                title="Convertir"
            ></Button>
            <Text>{NumConvertido}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});