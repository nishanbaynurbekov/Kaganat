import {useState, useEffect} from 'react'
import { supabase } from './supabase'

function Like({initialLike, productId}) {
    const [ likes, setLikes ] = useState(initialLike)
    const [ isLiked, setIsLiked ] = useState(false)

    useEffect(() => {
        const LikedProducts = JSON.parse(localStorage.getItem('LikedProducts') || '[]')
        if (LikedProducts.includes(productId)) {
            setIsLiked(true)
        }
    }, [productId])

    async function MyLike() {
        let newLikes 
        let LikedProducts = JSON.parse(localStorage.getItem('LikedProducts') || '[]')
        // setIsLiked(true)

        if(isLiked){
            newLikes = likes - 1
            setIsLiked (false)
            LikedProducts = LikedProducts.filter(id => id!== productId )
        }else{
            newLikes = likes + 1
            setIsLiked(true)
            LikedProducts.push(productId)
        }
        setLikes(newLikes)
        localStorage.setItem('LikedProducts', JSON.stringify(LikedProducts))

        const {error} = await supabase
        .from('products')
        .update({like: newLikes})
        .eq('id', productId)

        if (error) console.log(error);
        
        
    }
  return (
    <button style={{
        width: "90px",
        height: "30px",
        fontSize: "25px",
        backgroundColor: "#000000",
        color: "white"
    }} onClick={MyLike} >
     {isLiked? '❤️' : '🤍'} {likes}
    </button>
  )
}

export default Like
