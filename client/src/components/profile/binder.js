import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_BINDER, GET_USER, GET_MAP, GET_NOTE } from '../../utils/queries';
import { ADD_NOTE, ADD_MAP } from '../../utils/mutations';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';


function BinderStation() {
// import correct binder _id from props
const location = useLocation()
const { from } = location.state

// access mutations
const [addMap] = useMutation(ADD_MAP);
const [addNote] = useMutation(ADD_NOTE);


// set State for map and note forms
const [mapFormState, setMapFormState] = useState({name: '', imageUrl: ''});
const [noteFormState, setNoteFormState] = useState({title: '', content: ''});

// load correct binder info
const {loading, error, data } = useQuery(GET_BINDER, {
    variables: { _id: from },
});
    if(loading) return "Loading..."
    if(error) return `${error.message}`;

    // create map 
    const handleMapFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addMap({
                variables: {
                    name: mapFormState.name, imageUrl: mapFormState.imageUrl, binderID: from}
            });
        } catch (e) {
            console.log(e)
        }
    };

    const handleMapFormChange = (event) => {
        const { name, value } = event.target;
        setMapFormState({
            ...mapFormState,
            [name]: value
        });
    };

    // create note 
    const editorConfiguration = {
        toolbar: [				'heading',
        '|',
        'bold',
        'italic',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'blockQuote',
        'insertTable',
        'undo',
        'redo']
    };

    const handleNoteFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addNote({
                variables: {
                    title: noteFormState.title, content: noteFormState.content, binderID: from}
                    
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleNoteFormChange = (event) => {
        const { name, value } = event.target;
        setNoteFormState({
            ...noteFormState,
            [name]: value
        });
    }

return (    
    <div>
    <div>
        <h1>{ data.binder.name }</h1>
        <h2>{from}</h2>
    </div>

{/* create map */}
<form onSubmit={handleMapFormSubmit}>
<label htmlFor="name">name</label>
    <input
        placeholder='name'
        name='name'
        type='name'
        id='name'
        onChange={handleMapFormChange}/>

    <label htmlFor='imageUrl'>imageUrl</label>
    <input 
        placeholder='imageUrl'
        name='imageUrl'
        type='imageUrl'
        id='imageUrl'
        onChange={handleMapFormChange}/>

<button type="submit">Submit</button>
</form>

{/* create note */}
<form onSubmit={handleNoteFormSubmit}>
    <label htmlFor="title">Title
    <input
        placeholder='title'
        name='title'
        type='title'
        id='title'
        onChange={handleNoteFormChange}/>
</label>

    <label htmlFor='content'>Content
    <input 
        placeholder='Content'
        name='content'
        type='content'
        id='content'
        onChange={handleNoteFormChange}/>
</label>

<button type="submit">Submit</button>
</form>


<div>
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data="<p></p>"

                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                    } }/>
</div>
{/* access map */}
{/* access note */}
</div>
)

}

export default BinderStation;