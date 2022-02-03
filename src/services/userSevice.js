import axios from "axios";



export const userAxios = async(data)=>{
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",data)
    return response;

    
}
export const login = async (obj) => {
    let response = await axios.post(
      "https://new-bookstore-backend.herokuapp.com/bookstore_user/login",
      obj
    );
    return response;
  };

