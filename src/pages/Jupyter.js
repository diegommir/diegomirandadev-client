import React from 'react'
import { useParams } from 'react-router-dom'

import '../css/Jupyter.css'

export default function Jupyter(props) {
    const { notebook_name } = useParams()
    
    let url = ''
    if (notebook_name === 'titanic') {
        url = '/notebook_html/titanic.html'
    }
    if (notebook_name === 'bellabeat-case-study') {
        url = '/notebook_html/bellabeat_case_study.html'
    }

    return (
        <iframe title='notebook-page' src={url} />
    )
}
