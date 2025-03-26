import React, { useContext, useState } from 'react';
import { Taskcontext } from './taskContext';

const TopForm = ()=>{
    const [form , setForm]= useState("")
    const{Task,setTask}=useContext(Taskcontext)
    
     const handelsetForm=(event)=>{
        
        setForm(event.target.value)
     }
     const AddItem=(event)=>{
        event.preventDefault()
        setTask([...Task,{id : Math.random(), title:form , done:false}])
     }
    return(
        <>
            <h4 className="text-center text-info text_shdow">پروژه</h4>
            <form onSubmit={AddItem}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={form} onChange={handelsetForm} />
                    <button   type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;