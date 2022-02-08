import axios from "axios";

let headerConfig = {
  headers: {

    "x-access-token": localStorage.getItem("token")
  },
}




export const userAxios = async(data)=>{
  console.log(data);
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",data)
    return response;

    
}
export const login = async (obj) => {
    let response = await axios.post(
      "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
      obj
    );
    return response;
  };
  export const getBooks =async()=>{
    let response =await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return response;
}

export const addToCart = async(data)=>{
  let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data}`,data,headerConfig)
  return response;
}

