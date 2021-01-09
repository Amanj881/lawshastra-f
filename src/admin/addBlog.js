import React,{useState} from 'react'
import TextInput from "../components/TextInput/TextInput";
import CKEditor from 'ckeditor4-react';
import DropDown from '../components/SelectInput/SelectInput'
import Button from "../components/Button/Button";
import Parser from 'react-html-parser';

function AddBlog() {

	const [title, setTitle] = useState()
	const [author, setAuthor] = useState()
	const [image, setImage] = useState()
	const [description, setDescription] = useState()

	const options = [
	{
		label:'Civil Law',
		value:'civil-law'
	},
	{
		label:'Criminal Law',
		value:'criminal-law'
	},
	{
		label:'Constitution',
		value:'constitution'
	},
	]

	const handleDescription = (evt ) => {
		setDescription(evt.editor.getData());
	}

	return (
		<div className="mx-32">
			<div className="text-center">
			<span className="text-2xl font-bold align-center">Blog</span>
			</div>
			<form>
			<div className="mx-24 mt-4">
              	<DropDown options={options} styleClass="mb-4 border-2 shadow-lg rounded-lg p-4 w-full overflow-hidden"	label="Category"/>
              </div>
			<div className="mx-24">
				<TextInput
	                id="title"
	        		labelText="Title"
	        		inputStyles=" h-12 mb-4 border-2 shadow-lg rounded-lg p-4 w-full overflow-hidden"
	        		onChange={(e => setTitle(e.target.value))}
	        		value={title}
	        		placeholder='Enter Title...'
	        		name="title"
	              />
              </div>
              <div className="mx-24 mt-4">
				<TextInput
	                id="author"
	        		labelText="Author"
	        		inputStyles=" h-12 mb-4 border-2 shadow-lg rounded-lg p-4 w-full overflow-hidden"
	        		onChange={(e => setAuthor(e.target.value))}
	        		value={author}
	        		placeholder='Enter Author Name...'
	        		name="author"
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

export default AddBlog