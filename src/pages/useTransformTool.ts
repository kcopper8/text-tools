import { ChangeEventHandler, useState } from 'react';

export type TransformText = (text: string) => string;

const useTransformTool = (textAction: TransformText) => {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState(inputText);
  const [error, setError] = useState<Error | null>(null);
  const handleChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setInputText(event.target.value);
    try {
      setError(null);
      setTransformedText(textAction(event.target.value));
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error(String(e)));
      }
    }
  };
  return {
    inputText,
    transformedText,
    error,
    onChangeText: handleChangeText,
  };
};
export default useTransformTool;
