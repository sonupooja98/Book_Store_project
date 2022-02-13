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
export const getTheCard = async()=>{
  let response =await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",headerConfig)
  return response;

}
export const cartItemQuantity = async (d1,d2) =>{
  let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${d1}`,d2,headerConfig)
  return response;
}
export const addwishlist=async(data)=>{
  let response =await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${data}`,data,headerConfig)
  return response;
}
export const getwishlist=async()=>{
  let response = await axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`,headerConfig)
  return response;
}
export const deleteBookss = async(id)=>{
  let response  = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`,headerConfig)
  return response;
}

export const editCustomerDetailsApi = async(data)=>{
  let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,data,headerConfig)
  return response;
}
export const deletcart = async(id)=>{
  let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerConfig)
  return response;
}
export const orderDetails =async (data)=>{
  let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,data,headerConfig)
  return response;
}

