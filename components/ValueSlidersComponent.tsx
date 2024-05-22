import { useState } from 'react';

interface ValueSlidersComponentProps {
  onChange: (values: { imagery: number; emotion: number; rhythm: number; theme: number; wordChoice: number }) => void;
}

const ValueSlidersComponent: React.FC<ValueSlidersComponentProps> = ({ onChange }) => {
  const [values, setValues] = useState({
    imagery: 5,
    emotion: 5,
    rhythm: 5,
    theme: 5,
    wordChoice: 5
  });

  const handleSliderChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    const newValues = { ...values, [field]: newValue };
    setValues(newValues);
    onChange(newValues);
  };

  return (
    <div className="p-4 bg-[#25252d] rounded-md">
      <div className="flex flex-wrap justify-center">
        <div className="w-2/5 p-2">
          <label className="block text-white">Imagery: {values.imagery}</label>
          <small className="block text-gray-400">Visual elements in the poem</small>
          <input
            type="range"
            min="1"
            max="10"
            value={values.imagery}
            onChange={handleSliderChange('imagery')}
            className="w-full mt-1"
          />
        </div>
        <div className="w-2/5 p-2">
          <label className="block text-white">Emotion: {values.emotion}</label>
          <small className="block text-gray-400">Emotional intensity</small>
          <input
            type="range"
            min="1"
            max="10"
            value={values.emotion}
            onChange={handleSliderChange('emotion')}
            className="w-full mt-1"
          />
        </div>
        <div className="w-2/5 p-2">
          <label className="block text-white">Rhythm and Sound: {values.rhythm}</label>
          <small className="block text-gray-400">Flow and musicality</small>
          <input
            type="range"
            min="1"
            max="10"
            value={values.rhythm}
            onChange={handleSliderChange('rhythm')}
            className="w-full mt-1"
          />
        </div>
        <div className="w-2/5 p-2">
          <label className="block text-white">Theme and Message: {values.theme}</label>
          <small className="block text-gray-400">Underlying message</small>
          <input
            type="range"
            min="1"
            max="10"
            value={values.theme}
            onChange={handleSliderChange('theme')}
            className="w-full mt-1"
          />
        </div>
        <div className="w-4/5 p-2">
          <label className="block text-white text-center">Word Choice and Language: {values.wordChoice}</label>
          <small className="block text-gray-400 text-center">Vocabulary and phrasing</small>
          <input
            type="range"
            min="1"
            max="10"
            value={values.wordChoice}
            onChange={handleSliderChange('wordChoice')}
            className="w-full mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSlidersComponent;
