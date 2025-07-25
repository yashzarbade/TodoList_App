import { useState } from "react"

export default function LikeButton(){

    const[isLike,setLikes] = useState(false);
    const[count,setCount] = useState(0);
    let styles = {color : "red"};

    function toggle(){
        setLikes(!isLike);
        setCount((prevCount) => prevCount+1);
        setCount((prevCount) => prevCount+1);
       
    }
    return (
        <div>
            <p>count = {count}</p>
            <p onClick={toggle} style={styles}>
                {isLike == false? <i className="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i>}
               
            </p>
        </div>
    )
}