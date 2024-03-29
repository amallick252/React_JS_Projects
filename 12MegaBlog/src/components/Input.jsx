import React, {useId, forwardRef} from 'react'

const Input = forwardRef(function input({
    label,
    type= "text",
    className= "",
    ...props
}, ref){
    const id= useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1'
            htmlFor= {id}// if some one clicks the label the cursor will directly go the input field for typing
            >{label}</label>
            }
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref= {ref}
            {...props}
            id= {id}
            />
        </div>
    )
})

export default Input

// import React,{ useId} from 'react'

// const Input = ({
//     label,
//     type= 'text',
//     className= 'inline-block mb-1 pl-1',
//     ...props  
// }, ref) =>{
//     const id = useId()
//   return (
//     <div className='w-full'>
//         {label && <label 
//         className=''
//         htmlFor='id'
//         >{label}</label>}
//         <input id='id' type={type} ref={ref}
//         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props}></input>
//     </div>
//   )
// }

// export default React.forwardRef(Input);