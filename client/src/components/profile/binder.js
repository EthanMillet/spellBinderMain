import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_BINDER, GET_USER, GET_MAP, GET_NOTE } from '../../utils/queries';




function BinderStation() {
// import correct binder _id from props
const location = useLocation()
const { from } = location.state

// load correct binder info
const {loading, error, data } = useQuery(GET_BINDER, {
    variables: { _id: from },
});
    if(loading) return "Loading..."
    if(error) return `${error.message}`;
    console.log(data)
return (
// create map
// create note
// access map
// access note
    <div>
        <h1>{ data.binder.name }</h1>
        <h2>{from}</h2>
    </div>
)

}

export default BinderStation;