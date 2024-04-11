import {Wizard} from "react-use-wizard";
import StepNom from "../components/QuestionSteps/StepNom";
import StepEmail from "../components/QuestionSteps/StepEmail";
import StepSubmit from "../components/QuestionSteps/StepSubmit";
import StepPoids from "../components/QuestionSteps/StepPoids";
import StepTaille from "../components/QuestionSteps/StepTaille";
import StepActivite from "../components/QuestionSteps/StepActivite";
import StepGenre from "../components/QuestionSteps/StepGenre";
import StepAge from "../components/QuestionSteps/StepAge";


function QuestionPage() {

  return (
    <Wizard>
      <StepNom />
      <StepGenre />
      <StepAge />
      <StepTaille />
      <StepPoids />
      <StepActivite />
      <StepEmail />
      <StepSubmit />
    </Wizard>
  );
}

export default QuestionPage;
