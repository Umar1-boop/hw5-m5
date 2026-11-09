import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detal() {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`)
        .then(({data}) => setRecipe(data))
        .catch((e) => console.log(e))
    }, [id])
  return (
    <div>
        <h1>test</h1>
        <img src={recipe?.image} alt="" />
    </div>
  )
}


// export default function Detail() {
//     const [recipe, setRecipe] = useState();
//     const { id } = useParams();
    
//     useEffect(() => {
//         axios.get(`https://dummyjson.com/recipes/${id}`)
//         .then(({data}) => setRecipe(data))
//         .catch((e) => console.log(e))
//     }, [id])
//   return (
//     <div>
//         <img src={recipe?.image} alt="" />
//     </div>
//   )
// }