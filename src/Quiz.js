import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

let Quiz = {
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }

};

export default Quiz