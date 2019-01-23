import React, { Component } from 'react'

import { withAuthorization } from '../Session';

class AskQuestion extends Component { 
    constructor() {
        super();
        this.state = {
            userId: '',
            question: '',
            language: '',
            context: '',
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.updateUserId = this.updateUserId.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.updateLanguage = this.updateLanguage.bind(this);
        this.updateContext = this.updateContext.bind(this);
    }

    addQuestion(event) {
        event.preventDefault();
        
    }

    updateUserId(event) {
        this.setState({
            userId: event.target.value
        });
    }

    updateQuestion(event) {
        this.setState({
            question: event.target.value
        });
    }

    updateLanguage(event) {
        this.setState({
            language: event.target.value
        });
    }

    updateContext(event) {
        this.setState({
            context: event.target.value
        });
    }

    render() {
        return (
            <div className="QuestionForm">
            {/* <LoginFix /> */}
                <h2>How to Ask</h2>
                <h4>Stay on-topic</h4>
                <p>Please stick to topics and avoid asking for opinions or open-ended discussions.</p>
                <h4>Be Specific</h4>
                <p>If the question you ask is vague, the answer would most likely be vague as well.</p>
                <h4>Keep an open mind</h4>
                <p>Be aware that you may not get the answer you wanted.  When in doubt, ask people to cite their sources</p>
                <form onSubmit={this.addQuestion}>
                    <input
                        onChange={this.updateUserId}
                        placeholder="User"
                        value={this.state.userId}
                    />
                    <h4>Title:<input
                        onChange={this.updateQuestion}
                        placeholder="What is your question? Be specific"
                        value={this.state.question}
                    /></h4>
                    <textarea
                        onChange={this.updateContext}
                        placeholder="Context"
                        value={this.state.context}
                    />
                    <h4>Language:
                    <input
                        onChange={this.updateLanguage}
                        placeholder="Language"
                        value={this.state.language}
                    /></h4>
                    <br></br>
                    <button type="submit">Submit Question</button>
                </form>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AskQuestion);