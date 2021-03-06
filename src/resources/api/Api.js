import AsyncStorage from '@react-native-async-storage/async-storage'
const BASE_API = "http://localhost:4000/api"
export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/usuarios/token`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },
    signIn: async (email, senha) => {
        const req = await fetch(`${BASE_API}/usuarios/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        })
        const json = await req.json()
        return json
    },
    logout: async () => {
        await AsyncStorage.removeItem('token')
        return null
    },
    signUp: async (nome, email, senha) => {
        const req = await fetch(`${BASE_API}/usuarios`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        })
        const json = await req.json()
        return json
    },
    adicionarCarro: async (marca, modelo, ano, cor, descricao) => {
        const req = await fetch(`${BASE_API}/usuarios/addcarros`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ marca, modelo, ano, cor, descricao })
        })
        const json = await req.json()
        return json
    }
}