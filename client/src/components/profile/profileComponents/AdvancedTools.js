import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_BINDER } from '../../../utils/mutations';
import { GET_USER } from '../../../utils/queries';

import { Link } from 'react-router-dom';

import '../styling/profile.css'

function AdvancedTools() {
return (
    <h2>Advanced Tools</h2>
)
}

export default AdvancedTools;