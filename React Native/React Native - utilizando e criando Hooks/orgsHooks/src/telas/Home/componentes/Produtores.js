import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";


export default function Produtores( { topo: Topo } ) {


    /* Hook autoral */
    const [titulo, lista] = useProdutores();


    /* Hook padrão */
    /* const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(()=> {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]) */


    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo} >{ titulo } </Text>
        </>
    }


    return <FlatList 
        data={lista}
        renderItem={({ item })=> <Produtor {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={ TopoLista }
    />
    
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 16,
        color: '#464646',
    }
});