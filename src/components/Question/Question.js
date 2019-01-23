import React from 'react'
import { Link } from 'react-router-dom'

const Question = (props) => {
    const data = props.QuesData;
    return (
        <Link to={'/question/${data.id}'}>
            <div>
                <h3>{data.question}</h3>
                <p>{data.context}</p>
                <p>{data.language}</p>
            </div>
        </Link>
    )
}

export default Question;