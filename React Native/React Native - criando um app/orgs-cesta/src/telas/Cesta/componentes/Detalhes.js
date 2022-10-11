import React from 'react';
import { View, Image, StyleSheet } from 'react-native'

import Texto from "../../../componentes/Texto";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return <>
        <Texto style={estilos.nome}> { nome } </Texto>
            <View style={estilos.fazenda}>
                <Image source={ logoFazenda } style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
            </View>

            <Texto style={estilos.descricao}> { descricao } </Texto>
            <Texto style={estilos.preco}>{ preco }</Texto>
    </>
}   

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        paddingVertical: 12,
        flexDirection: "row"
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});