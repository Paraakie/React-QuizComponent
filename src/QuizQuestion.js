import React, { Component } from 'react'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>Instruction Text</p>    
                    <div className='QuizQuestion'>{ quizData.quiz_questions[0].instruction_text }</div>
                </section>    
                <section>
                    <ul>
                        Quiz Question button logic goes here    
                    </ul>    
                </section>    
            <main/>
        )
    }
}

export default QuizQuestion