"use client"

import React, { useState, useEffect } from 'react'
import styles from "./page.module.scss";
import { useWindowSize } from './../hooks/useWindowSize';
import { FormatMoney } from '@/util';
import { apiClient } from './../services';
import axios from 'axios';


type UsersFake = {
    accountLogin: string
    availableQuantity: number
    createdAt: string
    loyaltyProgram: string
    offerId: string
    offerStatus: "Ativa" | "Inativo" | "Em Utilizacao";
    offerType: string
}


type Products = {
      productId: number,
      quantity: number
}

type Carts = {
  id: number,
  userId: number,
  date: string | Date,
  products: Products[],
  __v: number
}


type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}


export default function Home() {

  // const [data, setData] = useState<UsersFake[]>([]);
  // const [data, setData] = useState<Carts[]>([]);  

  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const { width, height } = useWindowSize();
    
  // useEffect(() => {
  //     const url = 'https://fakestoreapi.com/carts';
  //     const fetchData = async () => {
  //       try {
  //         const res = await fetch(`${url}`, { cache: "no-store" })
  //         if (!res.ok) {
  //           throw new Error(`HTTP error! status: ${res.status}`)
  //         }
  //         const result = await res.json()  
  //         setData(result)
  //       } catch (err) {
  //         console.error('Fetch error:', err)
  //         setError('Failed to load ranking simulation')
  //       } finally {
  //         setLoading(false)
  //       }
  //     }
  //     fetchData()
  //   }, [])

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/products', {
          signal: controller.signal,
        })
        setData(response.data)

      } catch (err: any) {
        if (err.name === 'AbortError' || axios.isCancel(err)) {
          console.log('Fetch aborted');
          return;
        }
        setError('Failed to load ranking simulation');
      } finally {
        setLoading(false)
      }
    }
    fetchData()
     return () => {
      controller.abort();
    };
  }, [])

    // console.log()


  return (
    <main className={`${styles.home} container`}>
     <h1>Home Page</h1>
     <table className='table'>
      <thead>
        <tr>
          <th style={{width: '250px'}}>product</th>
          <th style={{width: '100px'}}>price</th>
          <th style={{width: '150px'}}>category</th>
          <th >description</th>
        </tr>
      </thead>
      <tbody>
{
       data.length > 0 && data.map((item,index)=>{
        return(
          <tr key={index}>
            <td>{`${item.title}`}</td>
            <td>{`${FormatMoney(item.price)}`}</td>
            <td>{`${item.category}`}</td>            
            <td>{`${item.description}`}</td>
          </tr>
        )
       })
     }
      </tbody>
     </table>

     
   
    </main>
  );
}
