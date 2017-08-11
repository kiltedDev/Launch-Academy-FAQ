import React from 'react';
import Question from './Question';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }

    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick( id ) {
    if (id != this.state.selectedId) {
      this.setState( { selectedId: id }  )
    } else {
      this.setState( { selectedId: null }  )
    }
  }

  render() {

    let entries = this.props.data.map (entry => {

      let selectQuestion = () => this.handleQuestionClick(entry.id)

      return(
        <div>
          <Question
            question = {entry.question}
            key = {entry.id}
            id= {entry.id}
            answer = {entry.answer}
            selectQuestion = {selectQuestion}
            designated = {entry.id == this.state.selectedId}
          />
        </div>
      )
  })
  return (
    <div>{entries}</div>
  )
  }
}

export default App;
