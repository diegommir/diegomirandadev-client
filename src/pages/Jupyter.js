import React from 'react'
import { useParams } from 'react-router-dom'

import '../css/Jupyter.css'

export default function Jupyter(props) {
    const { competition } = useParams()
    
    let url = ''
    if (competition === 'titanic') {
        url = '/notebook_html/titanic.html'
    }
    if (competition === 'bellabeat-case-study') {
        url = '/notebook_html/bellabeat_case_study.html'
    }

    return (
        <iframe title='competition-page' src={url} />
    )
}
