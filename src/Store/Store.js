

import {createStore , combineReducers } from 'redux';
import { v4  } from 'uuid';

let initialProducts = {
orders: [],
searched : '',
 products :[
    
    ]
  }
      function productsSection( oldData = initialProducts , newData){
        oldData = {...oldData , products:[...oldData.products] , orders:[...oldData.orders]};


        if(newData.type == 'SEARCH'){
          oldData.searched = newData.payload;
        }else if( newData.type =='ALL_PRODUCTS'){
          // oldData.products.push(newData.payload);
        }
      
        else if( newData.type == "TOGGLE_LIKE_BTN"){
         let item =  oldData.products.find((product)=>{
          if(product.id == newData.payload){
            return true;
          }
         })
      //   oldData.products.push(newData.payload);
      //  item.abc = !item.abc;
           
    }
      else if(newData.type == "ADD_TO_CART"){
        oldData.orders.push(newData.payload) ;
       

      }else if(newData.type == "REMOVE_FROM_CART"){
        let itemindex =  oldData.orders.findIndex(ad=> ad._id == newData.payload);
      oldData.orders.splice(itemindex , 1);
      oldData={ ...oldData , orders:[...oldData.orders]}
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
