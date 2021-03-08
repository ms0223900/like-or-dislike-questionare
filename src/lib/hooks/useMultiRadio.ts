import { reactive } from 'vue';

export interface UseMultiRadioOptions {
  radioAmount: number;
}

const useMultiRadio = ({
  radioAmount,
}: UseMultiRadioOptions) => {
  const state = reactive({
    radioValues: [...Array(radioAmount).keys()].map(() => 'a'),
  });

  const handleChange = (value: string, index: number) => {
    const origin = [...state.radioValues];
    origin[index] = value;
    state.radioValues = origin;
    console.log(state.radioValues);
  };

  return ({
    radioValuesState: state,
    handleChange,
  });
};
export default useMultiRadio;
