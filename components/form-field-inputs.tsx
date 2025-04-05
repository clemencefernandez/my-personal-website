import { Input } from "@/types/model";
import FormFieldInput from "./form-field-input";

type Props = {
  inputs: Input[];
  handleValidationChange: (index: number, correct: boolean) => void;
};
const FormFieldInputs = ({ inputs, handleValidationChange }: Props) => {
  return (
    <>
      {inputs.map((input, index) => (
        <FormFieldInput
          key={index}
          setIsCorrect={() => handleValidationChange(index, true)}
          {...input}
        />
      ))}
    </>
  );
};

export default FormFieldInputs;
