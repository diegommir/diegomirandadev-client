import React from 'react'
import { useParams } from 'react-router-dom'

import '../css/Jupyter.css'

export default function Jupyter(props) {
    let { notebook_name } = useParams()

    if (props['notebook_name']) {
        notebook_name = props['notebook_name']
    }
    
    let url = ''
    if (notebook_name === 'titanic') {
        url = '/notebook_html/titanic.html'
    }
    if (notebook_name === 'bellabeat-case-study') {
        url = '/notebook_html/bellabeat_case_study.html'
    }
    if (notebook_name === 'google-fiber-case-study') {
        url = '/notebook_html/google_fiber_case_study.html'
    }
    if (notebook_name === 'google-fiber-case-study-viz') {
        url = '/notebook_html/google_fiber_case_study_viz.html'
    }

    return (
        <iframe title='notebook-page' src={url} />
    )
}
