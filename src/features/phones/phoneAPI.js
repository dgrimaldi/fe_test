import axios from "axios";

const basicAPI = 'localhost:3001'
const getAll = async () => {
    let result
    try {
         result = await axios
            .get(`${basicAPI}/api/v1/phones/getALl`)
    } catch (e) {
        throw new Error(e)
    }
    return result.data
}

const update = async ({id, phoneData}) => {
    let result
    try {
        result = await axios.put(`${basicAPI}/api/v1/phones/edit/:${id}`, {
            ...phoneData
        })
    } catch (e) {
        throw new Error(e)
    }
    return result
}

const post = async ({phoneData}) => {
    let result
    try {
        result = await axios.post(`${basicAPI}/api/v1/phones/`, {
            ...phoneData
        })
    } catch (e) {
        throw new Error(e)
    }
    return result
}

const updateField = async ({id, field, data}) => {
    let result
    try {
        result = await axios.patch(`${basicAPI}/api/v1/phones/edit-field/:${id}`, {
            [field]: data
        })
    } catch (e) {
        throw new Error(e)
    }
    return result
}

const phoneAPI = {
    getAll,
    updateField,
    update,
    post

}

export default phoneAPI