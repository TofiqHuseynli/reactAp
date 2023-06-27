import React from 'react'
import Swal from 'sweetalert2';

function List({ change, setChange, list, setList }) {
    const [t,setT]= React.useState(0);
    let onClic =()=>{
        if (change === "") {
            Swal.fire("Mətn daxil edin!")
        } else {
            let newList = list;
            newList.push({name:change,id:t});
            setList(newList);
            setChange("");
            setT(t+1);  
            localStorage.setItem("mySorage", JSON.stringify(newList));
        }
    };
    let funcDelete = ({id})=>{
        setList(list.filter((todo)=>todo.id !== id));
        localStorage.removeItem(id == id);
    }
    return (
        <div className='bg-dark w-100  text-light con '>
            <div className='te container d-flex flex-column '>
                <div className=' d-flex justify-content-center align-items-center comp-div' >
                    <input value={change} className='form-control inp mt-3' type='text' onChange={(e) => setChange(e.target.value)} />
                    <button className='btn bg-info mt-3 add-bt' onClick={onClic} >ADD</button>
                </div>
                <div className='mt-5 d-flex flex-column '>
                    {list.map((item, key) => (
                        <div className='task list'><h3 className='task-text' key={key}>{item.name}</h3>
                        <div className='control'>
                            <button className='control-btn' ><i class="fa fa-pen-to-square"></i></button>
                            <button className='control-btn' onClick={()=>funcDelete(item)}  ><i class="fa fa-trash"></i></button>
                      </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default List




