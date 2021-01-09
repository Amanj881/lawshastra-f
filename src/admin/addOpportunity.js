import React,{useState} from 'react'
import TextInput from "../components/TextInput/TextInput";
import CKEditor from 'ckeditor4-react';
import DropDown from '../components/SelectInput/SelectInput'
import Button from "../components/Button/Button";


function AddOpportunity() {

	const [title, setTitle] = useState()
	const [author, setAuthor] = useState()
	const [image, setImage] = useState()
	const [description, setDescription] = useState()

	const options = [
	{
		label:'Seminar & Conferences',
		value:'seminar & conferences'
	},
	{
		label:'Call For Paper',
		value:'call-for-paper'
	},
	{
		label:'Moot Court Competiton',
		value:'moot-court'
	},

	]

	const handleDescription = (evt ) => {
		setDescription(evt.editor.getData());
	}

	return (
		<div className="mx-32">
			<div className="text-center">
			<span className="text-2xl font-bold align-center">Opportunity</span>
			</div>
			<form>
			<div className="mx-24 mt-4">
              	<DropDown options={options} styleClass="mb-4 border-2 shadow-lg rounded-lg p-4 w-full overflow-hidden"	/>
              </div>
			<div className="mx-24">
				<TextInput
	                id="title"
	        		labelText="Title"
	        		inputStyles=" h-12 mb-4 border-2 shadow-lg rounded-lg p-4 w-full overflow-hidden"
	        		onChange={(e => setTitle(e.target.value))}
	        		value={title}
	        		name="title"
	              />
              </div>
              
              <div className="mx-24 mt-4">
              <span className="text-sm leading-6 font-medium ">Description</span>
 				<CKEditor
                    data={description}
                    type="classic"
                    onChange = {handleDescription}
                />
                </div>
               <div className="mx-24 mt-4">
				<TextInput
	                id="image"
	                type="file"
	        		inputStyles=" h-12 mb-4 border-2 shadow-lg rounded-lg w-full overflow-hidden"
	        		labelText="Image"
	        		onChange={(e => setImage(e.target.value))}
	        		value={image}
	        		name="image"
	              />
              </div> 
               <div className="mx-24">
                <span className="block w-full rounded-md shadow-sm">
                  <Button type="submit" width="full" >
                    Add Blog
                  </Button>
                </span>
              </div>
             </form> 	
		</div>
	)
}

export default AddOpportunity