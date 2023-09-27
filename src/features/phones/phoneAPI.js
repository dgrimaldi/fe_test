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


// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});


export default phoneAPI
