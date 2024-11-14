import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate();
    function changeHandler(){
        navigate("/labs")
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>Support</div>
        <button onClick={changeHandler}>Move to Labs page</button>
        <hr/>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support