import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import {  setShopsOfCity, setUserData } from '../redux/userSlice'

function getShopsByCity() {
const dispatch=useDispatch()
const {city,userData}=useSelector(state=>state.user)
useEffect(()=>{
    if(userData?.role=="user"){
const fetchShops=async ()=>{
    const result=await axios.get(`${serverUrl}/api/shop/getshopsbycity/${city}`,{withCredentials:true})
     dispatch(setShopsOfCity(result.data))
 }
 fetchShops() 
    }
 
},[city,userData])
}

export default getShopsByCity

