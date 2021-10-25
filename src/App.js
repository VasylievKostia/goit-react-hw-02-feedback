import react, { Component } from "react";
import { Statistics } from "./components/Statistics/Statistics"
import { FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions'
import { Section } from "./components/Section/Section"



class App extends Component {
  state = {
    goodPoints: 0,
    neutralPoints: 0,
    badPoints: 0 
  }
  countTotalFeedback = () => (
    this.state.goodPoints + this.state.neutralPoints + this.state.badPoints
  )
  countPositiveFeedbackPercentage = () => (
    Math.floor(this.state.goodPoints * 100 / this.countTotalFeedback())
  )
  handlerGood = () => {
    this.setState((prevState) => {
      // console.log(this.state)
      return {
        goodPoints: prevState.goodPoints + 1,
      };
    });
  };
  handlerNeutral = () => {
    this.setState((prevState) => {
      return {
        neutralPoints: prevState.neutralPoints + 1
      }
    })
  }
  handlerBad = () => {
    this.setState((prevState) => {
      return {
        badPoints : prevState.badPoints + 1
      }
    })
  }
  render() {
  return (
    
    <div>
      <Section title="Please leave feedback">
      <FeedbackOptions
        onHandleGood={ this.handlerGood}
        onHandleNeutral={ this.handlerNeutral}
        onHandleBad={this.handlerBad }
      />

      <Statistics
        good={this.state.goodPoints}
        neutral={this.state.neutralPoints}
        bad={this.state.badPoints}
        total={this.countTotalFeedback ()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        {/* <Notification message="No feedback given"></Notification> */}
      </Section>
    </div>

  );
}
}
export default App;
