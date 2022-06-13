import axios from 'axios'

export const registration = async (email,password) => {
    try{
        const responce = await axios.post('http://localhost:5000/api/auth/registration',{})
        console.log(responce)
        alert(1)
    }catch (e){
        console.log(JSON.parse(e.request.response))
        alert(e)
    }
}