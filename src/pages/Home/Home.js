import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';

const Home = () => {
    const  [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [toggle, setToggle] = useState(false)
    const [index, setIndex] = useState("")
    console.log("here is the index of the component" , index)
    console.log(toggle)
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
                {console.log(i)}
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
               <div><button className='bg-rose-500 text-white px-4 py-2 rounded-md' onClick={()=>{
                setToggle(!toggle)
                setIndex(i + 1)
               }}>{toggle ? <span>hide details</span> : <span>view detail</span>}</button></div>
             </div>
             {/* details section here  */}
            { toggle && (index == users.id) && 
                <div className='m-9 shadow-md shadow-black-100 p-6 rounded-lg'>
                <h1 className='font-bold'>Description</h1>
                <p>{users?.company?.catchPhrase}</p>
                <div className='flex  mt-5'>
                        <div className='w-1/3'>
                                <div>
                                    <h2 className='font-bold'>Contact Person</h2>
                                    <p className='mt-3'>{users?.username}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Designation</h2>
                                    <p className='mt-3'>{users?.website}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Emails</h2>
                                    <p className='mt-3'>{users?.email}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Phones</h2>
                                    <p className='mt-3'>{users?.phone}</p>
                                </div>
                        </div>
                        <div>
                        <div>
                                    <h2 className='font-bold'>Address</h2>
                                    <p className='mt-3'>{users?.address?.street} {users?.address?.suite} {users?.address?.city}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold'>City</h2>
                                    <p className='mt-3'>{users?.address?.city}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold'>State</h2>
                                    <p className='mt-3'>{users?.address?.street}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Country</h2>
                                    <p className='mt-3'>Australia</p>
                                </div>
                        </div>
                </div>
             </div>
                
                
            }
            </div>
            
            )
         }
            
        </div>
    );
};

export default Home;