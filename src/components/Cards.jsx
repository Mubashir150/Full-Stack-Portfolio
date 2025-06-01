import { useRef } from "react";
import Modal from "./Modal";
export default function Cards({title,img,description,video}){
   const dialog=useRef()
    function handleClick(){
        dialog.current.open();
    }
    return <>

        <Modal ref={dialog} title={title} description={description} image={img}/>

        
        <div className="projects-card" >
                <div>
                    <h3>{title}</h3>
                    <img src={img} alt="" />
                    <button onClick={handleClick}>Click Here</button>
                </div>
        </div>
        </>
}
