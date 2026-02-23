
import { useState } from "react"
import list from "../../public/list.json"
import Cards from "./Cards.jsx"
import {Link} from "react-router-dom"
import axios from "axios";

export default function Course() {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        const getBook = async()=>{
            try{
                const resp = await axios.get("http://localhost:4001/book");
                console.log(resp.data);
                setBook(resp.data);
            }catch(err){
                console.log(err);
            }
        }

        getBook();
    
    },[])
  return (
     <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 ">
        <div className='mt-24 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>
                We're delighted to have you <span className='text-pink-500'> Here! : )</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, laboriosam? Rem ut saepe eius atque ex! Voluptatibus, sit totam. Amet tenetur perferendis, mollitia obcaecati ipsam quod accusantium quaerat! Assumenda, magni!
                Eum amet saepe accusamus ipsa vitae quam laborum, quia, sed quo molestias ut quasi reiciendis animi. Fugit tempora error rerum, corrupti pariatur itaque? Asperiores cum reiciendis corrupti neque perspiciatis? Natus.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                {
                    list.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
     </div>
     </>
  )
}
