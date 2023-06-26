import React from 'react'

function List({ change, setChange, list, setList }) {

    return (
        <div className='bg-dark w-100  text-light con '>
            <div className=' container d-flex flex-column '>
            <div className=' d-flex justify-content-center align-items-center' value={change}>
                <input className='form-control inp mt-3' type='text' onChange={(e) => setChange(e.target.value)} />
                <button className='btn bg-info mt-3' onClick={() => {
                    let inp = document.querySelector(".inp");
                    if(inp.value===""){
                        Swal.fire("Mətn daxil edin!")
                    }else{

                    
                    let newList = list;
                    newList.push(change);
                    setList(newList);
                    setChange("");
                    inp.value="";
                  
                    }

                   
                }} >ADD</button>
                
            </div>
            <div className='mt-5 d-flex flex-column '>
            
            
            {list.map((item,key)=>(
                
                    <h3 className='list' key={key}>{item}</h3>
               
                    
                         ))

            
      }

           
    
          
           

            </div>
    

          
            </div>
        </div>
    )
}

export default List
