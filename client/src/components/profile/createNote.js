import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_BINDER, GET_USER, GET_MAP, GET_NOTE } from '../../utils/queries';
import { ADD_NOTE, ADD_MAP } from '../../utils/mutations';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

function CreateNoteStation() {
    const location = useLocation()
    const { from } = location.state


    const [addNote] = useMutation(ADD_NOTE);
    const [noteTitleFormState, setNoteTitleFormState] = useState({title: ''})
    const [noteFormState, setNoteFormState] = useState({content: ''});


    const {loading, error, data } = useQuery(GET_BINDER, {
        variables: { _id: from },
    });
    
        if(loading) return "Loading..."
        if(error) return `${error.message}`;

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
                    title: noteTitleFormState.title, content: noteFormState, binderID: from}
                    
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleNoteFormChange = (event) => {
        const { name, value } = event.target;
        setNoteTitleFormState({
            ...noteTitleFormState,
            [name]: value
        })
    }

    const onChangeInEditor = (event, editor) => {
        const data = editor.getData()
        setNoteFormState(data);
        console.log(noteFormState)
        }

    return(
        <div>

<div>
        <h1>{ data.binder.name }</h1>
        <h2>{from}</h2>
    </div>
    
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
                    name="content"
                    onChange={ ( event, editor ) => {
                        onChangeInEditor(event, editor)
                    } }/>
</div>

        </div>
    )
}

export default CreateNoteStation;