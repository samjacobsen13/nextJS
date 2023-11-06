import {useState, useEffect} from "react"

export default function CountButton(props){


    let [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + props.incrementBy)
    }


    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }


    useEffect(rollOverCount, [count])

   const buttonStyle = {
    background: props.buttonColor, 
    borderRadius: "10px",
   }

    return (
        <div>
            <button style={buttonStyle} onClick={handleClick}> + {props.incrementBy}</button>
            <div>{count}</div>
        </div>
    )
}