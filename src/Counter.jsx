import { useState } from "react";

// export default function Counter(){
//     let count = 0;

//     function incCount(){
//         count += 1;
//         console.log(count);
//     }

//     return (
//         <div>
//             <h3>Count = {count}</h3>
//             <button onClick={incCount}>increase count</button>
//         </div>
//     )
// }

export default function Counter(){
    // let count = 0;
    let[count,setCount] = useState(0);

    function incCount(){
        setCount(count+1);
        console.log(count);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>increase count</button>
        </div>
    )
}