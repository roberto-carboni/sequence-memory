import { ReactNode, useEffect, useRef, useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import green from '@material-ui/core/colors/green';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  const [sequence, setSequence] = useState<number[]>([]);
  const [showSequence, setShowSequence] = useState(true);
  const [allowedTime, setAllowedTime] = useState(5);
  const [timeLeft, setTimeLeft] = useState(allowedTime);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);

  let timer = useRef<any>(undefined);

  const generateSequence = () => {
    const newSequence = [];
    const newAnswers = [];
    for (let i = 0; i < 6; i++) {
      const number = Math.floor(Math.random() * 100);
      newSequence.push(number);
      newAnswers.push(undefined);
    }
    setShowSequence(true);
    setSequence(newSequence);
    setAnswers(newAnswers);
    setTimeLeft(allowedTime);
  };

  const revealSequence = () => {
    setShowSequence(true);
  };

  const renderSequence = () => {
    const hiddenSequence = sequence.map(() => '??');
    if (showSequence) {
      return sequence.join(' - ');
    }
    return hiddenSequence.join(' - ');
  };

  const setAnswer = (newValue: string, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(newValue);
    setAnswers(newAnswers);
  };

  const renderAnswers = (): ReactNode[] =>
    sequence.map((_, i) => {
      return (
        <input
          type='number'
          className='answer-input'
          id={`${i}`}
          key={i}
          onChange={(e) => setAnswer(e.target.value, i)}
          disabled={showSequence}
        />
      );
    });

  const renderResults = (): ReactNode[] =>
    sequence.map((number, index) => {
      if (number === answers[index]) {
        return (
          <CheckCircleOutlineIcon
            style={{ ...resultStyle, color: green[500] }}
            fontSize='large'
          />
        );
      }
      return (
        <HighlightOffIcon
          color='error'
          fontSize='large'
          style={{ ...resultStyle }}
        />
      );
    });

  const countdown = () => {
    if (timeLeft === 1) {
      setShowSequence(false);
    }

    if (timeLeft > 0) {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      clearInterval(timer.current);
    }
  };

  useEffect(() => {
    timer.current = setInterval(countdown, 1000);

    return () => clearInterval(timer.current);
  }, [timeLeft]);

  useEffect(() => {
    generateSequence();
  }, []);

  const hideableItemsVisibility = timeLeft > 0 ? 'hidden' : 'initial';

  return (
    <div className='App'>
      <header className='App-header'>
        <Button
          variant='contained'
          color='secondary'
          onClick={generateSequence}
        >
          Generate New
        </Button>

        <p>{renderSequence()}</p>

        <div
          className='answer-container'
          style={{ visibility: hideableItemsVisibility }}
        >
          {renderAnswers()}
        </div>
        <div
          className='answer-container'
          style={{
            visibility: timeLeft === 0 && showSequence ? 'initial' : 'hidden',
          }}
        >
          {renderResults()}
        </div>

        <p>Time remaining: {timeLeft}</p>

        <Button
          variant='contained'
          color='primary'
          onClick={revealSequence}
          style={{ visibility: hideableItemsVisibility }}
        >
          Reveal
        </Button>
      </header>
    </div>
  );
}

export default App;

const resultStyle = {
  width: '1.7rem',
  margin: '0 14px',
};
