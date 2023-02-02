import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';

const Home = () => {
    const  [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])
    /// dataa loade using api 
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        setUsers(data)
        setIsLoading(false)
    })
 }, [])
 if(isLoading){
    return <Loading></Loading>
 }
 console.log(users)
    return (
        <div>
            
         {
            users.map( (users, i) => <div key={users.id} className='border border-[#ddd] mt-9 shadow-sm shadow-blue-100 py-7 px-3'>
            <div className='grid grid-cols-5 gap-4'>
               <div></div>
               <div className='font-bold uppercase'>Contact</div>
               <div className='font-bold uppercase'>City</div>
               <div className='font-bold uppercase'>State</div>
               <div className='font-bold uppercase'></div>
   
             </div>
             <div className='mt-3 grid grid-cols-5 gap-4'>
               <div>{users?.name}</div>
               <div>{users?.username}</div>
               <div>{users?.address?.street}</div>
               <div>{users?.address?.city}</div>
               <div><button className='bg-rose-500 text-white px-4 py-2 rounded-md'>View Details</button></div>
             </div>
            </div>)
         }
            
        </div>
    );
};

export default Home;