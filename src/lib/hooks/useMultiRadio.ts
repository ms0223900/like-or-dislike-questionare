import { reactive } from 'vue';

export const getInitRadioValues = (amount: number) => (
  [...Array(amount).keys()].map(() => '')
);

export interface UseMultiRadioOptions {
  radioAmount: number;
}

const useMultiRadio = ({
  radioAmount,
}: UseMultiRadioOptions) => {
  const state = reactive({
    radioValues: getInitRadioValues(radioAmount),
  });

  const handleChange = (value: string, index: number) => {
    const origin = [...state.radioValues];
    origin[index] = value;
    state.radioValues = origin;
    console.log(state.radioValues);
  };

  const handleResetValues = () => {
    state.radioValues = getInitRadioValues(radioAmount);
  };

  return ({
    radioValuesState: state,
    handleChange,
    handleResetValues,
  });
};
export default useMultiRadio;
