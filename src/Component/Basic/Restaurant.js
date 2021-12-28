import React, { useState } from 'react'
import './Style.css'
import Menu from './MenuAPI'
import MenuCard from './MenuCard'
import Navbar from './Navbar'



// iski help se ab ham API file me vesi hi same list or jode to vo apne aap cart me ban  jayegi 
// is uniq list me ab sare API list aa chuki he 
const uniqueList = [
    ... new Set(
        Menu.map((curElem)=>{
      return(
          curElem.category
      )
    })
    ),
    "All",
];
console.log(uniqueList)

const Restaurant = () => {
    const [menuData,setMenuData]=useState(Menu)

    
    const [menuList,setMenuList]=useState(uniqueList)
    




    // ye hamne isiliye chalaya taki ham breakfast ke cart ko breakfast me la skte ese, hi sbme hamne yhi use kiya
    const filterItem = (category)=>{

        if (category === "All"){
             setMenuData(Menu);
             return
        }




       const updatedList = Menu.filter((curElem)=>{
           return(
               curElem.category === category
           )
       });
       setMenuData(updatedList)
    };




    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList} />
           <MenuCard menuData={menuData}/>
        </>
    );
};

export default Restaurant
