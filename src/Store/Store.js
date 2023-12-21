

import {createStore , combineReducers } from 'redux';
import { v4  } from 'uuid';

let initialProducts = {
// orders: [],
searched : '',
 products :[
    {
      src: "https://www.elo.shopping/cdn/shop/files/vf_9e1b0994-d3da-40f7-9832-2fa8286da8c8.jpg?v=1701258671&width=360",
      category: "shoes",
      price: 3000,
      id:v4(),
    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/4189_ad3d7297-4304-4001-8e66-422c592a3653.jpg?v=1701261029&width=360",
      category: "shoes",
      price: 2500,
      id:v4(),

    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/DSC0264.jpg?v=1701164411&width=360",
      category: "shoes",
      price: 1500,
      id:v4(),

    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/02_58cee82f-2b33-48ef-ab2c-564343594653.jpg?v=1700830197&width=360",
      category: "shoes",
      price: 2000,
      id:v4(),

    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/365_1f8eda55-3376-4df2-bc7c-7fb63fd2ea2d.jpg?v=1701146883&width=360",
      category: "shoes",
      price: 3000,
      id:v4(),

    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/DSC9965.jpg?v=1700899030&width=360",
      category: "shoes",
      price: 2500,
      id:v4(),

    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/Untitled-14_0001_dw_008-23-85102-41-411_01.jpg?v=1700915308&width=360",
      category: "shoes",
      price: 4000,
      id:v4(),

    },
    {
      src: "https://www.elo.shopping/cdn/shop/files/Untitled-9_0002_dw_008-22-85207-29-001_03.jpg?v=1701063652&width=360",
      category: "shoes",
      price: 4500,
      id:v4(),

    },
    {
      src: "https://outfitters.com.pk/cdn/shop/files/F0819106227_2.jpg?v=1701081213",
      category: "shirts",
      price: 350,
      id:v4(),

    },
    {
      src: "https://outfitters.com.pk/cdn/shop/files/F0077125901_1.jpg?v=1699937321",
      category: "shirts",
      price: 500,
      id:v4(),

    },
    {
      src: "https://outfitters.com.pk/cdn/shop/files/F0077125414_2.jpg?v=1700201172",
      category: "shirts",
      price: 550,
      id:v4(),

    },
    {
      src: "https://outfitters.com.pk/cdn/shop/files/F0826106001_1.jpg?v=1701081046",
      category: "shirts",
      price: 600,
      id:v4(),

    },
    {
      src: "https://outfitters.com.pk/cdn/shop/files/F0807106112_1.jpg?v=1701079991",
      category: "shirts",
      price: 650,
      id:v4(),

    },
    {
      src: "https://deeds.pk/cdn/shop/files/Navy-Camo.jpg?v=1700068048&width=500",
      category: "jacket",
      price: 1500,
      id:v4(),

    },
    {
      src: "https://deeds.pk/cdn/shop/files/Jacket-Recovered.jpg?v=1700586393&width=500",
      category: "jacket",
      price: 5000,
      id:v4(),

    },
    {
      src: "https://deeds.pk/cdn/shop/files/Tigher-White.jpg?v=1698339891&width=500 ",
      price: 5000,
      category: "jacket",
      id:v4(),

    },
    {
      src: "https://deeds.pk/cdn/shop/files/Black_383bbfce-a50b-4668-9e79-ecfc68e3a21c.jpg?v=1699280382&width=500",
      category: "jacket",
      price: 4000,
      id:v4(),

    },
    {
      src: "https://deeds.pk/cdn/shop/files/Black_3c70172a-1fec-423a-8af9-8de6aeb32a05.jpg?v=1699290309&width=500",
      category: "jacket",
      price: 7000,
      id:v4(),
    },
  
    {
      src: "https://deeds.pk/cdn/shop/files/01_d66ab1ea-c405-42e2-b91f-ab5848247f4a.jpg?v=1699280061&width=500",
      category: "jacket",
      price: 9000,
      id:v4(),
    },
    {
      src: "https://deeds.pk/cdn/shop/files/Sa61e686a81644c0f96df2cad6a9c559e8.webp?v=1699279982&width=500",
      category: "jacket",
      price: 3300,
      id:v4(),
    },
    {
      src: "https://deeds.pk/cdn/shop/files/Mens-Double-Shaded-jacket-Back.jpg?v=1698167160&width=500",
      category: "jacket",
      price: 8000,
      id:v4(),
    },
    {
      src: "https://deeds.pk/cdn/shop/files/01_154cb4ac-aaba-4026-b77d-3aded7185c25.jpg?v=1698167151&width=500",
      category: "jacket",
      price: 1000,
      id:v4(),
    },
    {
      src: "https://deeds.pk/cdn/shop/files/02.webp?v=1698321101&width=500",
      category: "jacket",
      price: 6000,
      id:v4(),
    },
    {
      src: "https://deeds.pk/cdn/shop/files/Camel_67f2e1f0-e95c-4be2-9d81-db5bba50543e.jpg?v=1698167154&width=500",
      category: "jacket",
      price: 4400,
      id:v4(),
    },
    {
      src: "https://themothercare.pk/cdn/shop/files/BabyLotionNatural60ml_f3066472-f295-4b31-8588-8fe9982e8fe5.jpg?v=1683874416",
      category: "Mother & Baby",
      price: 1000,
      id:v4(),
    },
    {
      src: "https://themothercare.pk/cdn/shop/files/SanitizerSpecialOffer-Mineral.jpg?v=1697719398",
      category: "Mother & Baby",
      price: 1000,
      id:v4(),
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0560/8053/1620/files/Baby-Lotion-Soap-80gm_51626707-e517-4ee3-9113-5a70b4adc45a.jpg?v=1683874385",
      category: "Mother & Baby",
      price: 1000,
      id:v4(),
    },
    {
      src: "https://themothercare.pk/cdn/shop/files/3_15c24b94-2b20-4d93-9725-d0c2b239c91d.jpg?v=1700643378",
      category: "Mother & Baby",
      price: 500,
      id:v4(),
    },
    {
      src: "https://themothercare.pk/cdn/shop/files/5.jpg?v=1700643454",
      category: "Mother & Baby",
      price: 800,
      id:v4(),
    },
    {
      src: "https://themothercare.pk/cdn/shop/files/Ben-10-Gift-Bag_b0dc9bb8-8b53-4021-a3d6-7c7d340bc9e6.jpg?v=1683874404",
      category: "Mother & Baby",
      price: 1100,
      id:v4(),
    },
    {
      src: "https://m.media-amazon.com/images/I/51IR-UtjhWL._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),
    },
    {
      src: "https://m.media-amazon.com/images/I/815vZaQ9FXL._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),
      
    },
    {
      src: "https://m.media-amazon.com/images/I/71BJS+Tsu9L._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),

    },
    {
      src: "https://m.media-amazon.com/images/I/91x3mfnatML._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),

    },
    {
      src: "https://m.media-amazon.com/images/I/71CESXuBhuL._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),

    },
    {
      src: "https://m.media-amazon.com/images/I/713gP5t4HvL._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),
      
    },
    {
      src: "https://m.media-amazon.com/images/I/81FC5MjSO6L._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),

    },
    {
      src: "https://m.media-amazon.com/images/I/71n5liH+phL._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),
      
    },
    {
      src: "https://m.media-amazon.com/images/I/71DTJ31s80L._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),

    },
    {
      src: "https://m.media-amazon.com/images/I/61AZfCuN0oL._AC_UL320_.jpg",
      category: "Home & lifestyle",
      price: 1100,
      id:v4(),
    },

    ]
  }
      function productsSection( oldData = initialProducts , newData){
        oldData = {...oldData , products:[...oldData.products]};
        if(newData.type == 'SEARCH'){
          oldData.searched = newData.payload;
        }else if( newData.type =='ADD-NEW-PRODUCT'){
          oldData.products.push(newData.payload);
        }else if( newData.type == "TOGGLE_LIKE_BTN"){
         let item =  oldData.products.find((product)=>{
          if(product.id == newData.id){
            return true;
          }
         })
         item.abc = !item.abc;


        }else if(newData.type == "ADD_TO_CART"){
        let item =  oldData.products.find((product)=> product.id == newData.payload);
        item.addTocart = true;
        // oldData.orders.push(newData.payload)
      }else if(newData.type == "REMOVE_FROM_CART"){
        let item =  oldData.products.find((product)=> product.id == newData.payload);
        item.addTocart = !item.addTocart;
      }else if(newData.type == "DELETE_PRODUCT"){
        let item =  oldData.products.find((product)=> product.id == newData.payload);
        oldData.products.splice(item , 1);
        // item.type = !item.type;
      }

  
        return oldData;
      }

function categoriesSection(){
    return [
        "Groceries & Pets",
        "Health & Beauty",
        "Men's Fashion",
        "Women's Fashion",
        "Mother & Baby",
        "Home & lifestyle",
        "Electronic Devices",
        "Electronic Accessories",
        "TV & Home Appliances",
        "sports & out door",
        "watches Bags & Jewellery",
        "Automotive & Motorbike",
        "shoes",
        "shirts",
        "jacket",
      ];
}


// let initialCartProducts=[];
// function cartSection(oldData = initialCartProducts , newData ){
// oldData = [...oldData];
// if(newData.type == "ADD_TO_CART"){
//     oldData.push(newData.payload);
// }
// return oldData;
// }



// signup users k liy
let initialUser={
  users:[],
  userLoggedin : null,
}
function UsersSection(oldData = initialUser , newData ){
  oldData = {...oldData }
     if(newData.type ==  "ADD_USER"){
      oldData.users.push(newData.payload);
     }else if( newData.type =='DELETE_USER'){
      let item = oldData.users.find((user)=>{
        if(user.id == newData.payload){
          return true;
        }
      })
      oldData.users.splice(item , 1);
    }else if(newData.type == 'USER_LOGGEDIN' ){
      oldData.userLoggedin = newData.payload;
    }else if(newData.type == 'USER_LOGGED_OUT' ){
      oldData.userLoggedin = null;
    }
     return oldData;
}


let allSections = combineReducers({productsSection , categoriesSection  , UsersSection})
let store = createStore(allSections);

export default store;
