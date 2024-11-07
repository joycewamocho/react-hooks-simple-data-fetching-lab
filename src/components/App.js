import {useEffect,useState} from "react"
function App(){
    const[dog,setDog]=useState("");
    const[isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(setDog(data.message))
            setIsLoading(false)
        })
    },[]);

    if(isLoading)return<p>Loading...</p>
    return(
        <div>
             <img src={dog} alt="A Random Dog"/>
    
        </div>
    )
    
}

export default App