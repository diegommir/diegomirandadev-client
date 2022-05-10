import React from 'react'
import { useParams } from 'react-router-dom'

import '../css/Kaggle.css'

export default function Kaggle(props) {
    const { competition } = useParams()
    
    let url = ''
    if (competition === 'titanic') {
        url = '/notebook_html/titanic.html'
    }

    return (
        <iframe title='competition-page' src={url} />
    )
}
