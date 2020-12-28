// import React,{useState} from 'react'

// function DropDown({options}) {
// 	 console.log("object",options)
//    	const [open, close] = useState(false)

//   	const head = options.map((header,i)=>{
        
//         	return(
//         		<>
//         		{console.log(header.subOption.map((value,i)=>{
//         		        }))}
//         		<div>	
//         		<button type="button" onClick ={()=>close(!open)}  class="inline-flex justify-center w-full rounded-md   py-2 bg-white text-sm font-medium hover:bg-gray-50 " id="options-menu" aria-haspopup="true" aria-expanded="true">
// 			     {header.label}
// 			      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
// 			        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
// 			      </svg>
// 			    </button>
// 			    </div>

			    
//         		</>
	
//  )
// })
// 	return (
// 		<div class="relative inline-block text-left flex">
// 			{head}
//   		</div>
// 	)
// }

// export default DropDown