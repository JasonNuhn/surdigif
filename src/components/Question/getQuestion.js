import React, { Component } from 'react'
import Question from '.Question'
import { renderComponent } from 'recompose';

class GetQuestion extends Component {
    constructor () {
        super();
        this.state = {
            question: [],
            signedIn: false
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        // event.preventDefault();
        axios.get(`http://localhost:3001/question/${params.id}`)
        
            .then((response) => {
                console.log(response);
                this.setState({question: response.data})
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }

    render() {
        return (
            <dvi>
                <h1>This Question</h1>
                {this.state.question.map((quest, index) => {
                return (
                    <Question QuesData={quest} key={index}/>
                )
            })}
            {/* <QuestionAnswerForm /> */}
            {/* <div>
                <QuestionAnswerForm />
            </div>    */}
            </dvi>
        )
    }
    
    }

export default GetQuestion;