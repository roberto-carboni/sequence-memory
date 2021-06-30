import { ReactNode, useEffect, useRef, useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import green from '@material-ui/core/colors/green';
import './App.css';
import { Button, Grid, Slider, Typography } from '@material-ui/core';

function App() {
  const [spoken, setSpoken] = useState(false);
  const [seqLengt, setSeqLength] = useState<number>(6);
  const [sequence, setSequence] = useState<number[]>([]);
  const [showSequence, setShowSequence] = useState(true);
  const [allowedTime, setAllowedTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(allowedTime);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);

  let timer = useRef<any>(undefined);

  const generateSequence = () => {
    const newSequence = [];
    const newAnswers = [];
    for (let i = 0; i < seqLengt; i++) {
      const number = Math.floor(Math.random() * 100);
      newSequence.push(number);
      newAnswers.push(undefined);
    }
    setShowSequence(true);
    setSequence(newSequence);
    setAnswers(newAnswers);
    setTimeLeft(allowedTime);
    if (spoken) {
      speakSequence(newSequence);
    }
  };

  const speakSequence = (newSequence: number[]) => {
    clearTimeout(timer.current);
    setTimeLeft(allowedTime);
    const utterance = new SpeechSynthesisUtterance(
      `${newSequence.join('. ')}.`
    );
    utterance.onend = () => {
      countdown();
    };

    speechSynthesis.speak(utterance);
  };

  const revealSequence = () => {
    setShowSequence(true);
  };

  const renderSequence = () => {
    return sequence.join(' - ');
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
            key={index}
          />
        );
      }
      return (
        <HighlightOffIcon
          color='error'
          fontSize='large'
          style={{ ...resultStyle }}
          key={index}
        />
      );
    });

  const countdown = () => {
    setTimeLeft(allowedTime);
    timer.current = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      } else {
        clearInterval(timer.current);
      }
    }, 1000);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setShowSequence(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    generateSequence();
    if (!spoken) {
      countdown();
    } else {
      setShowSequence(false);
    }
  }, [spoken]);

  const hideableItemsVisibility = timeLeft > 0 ? 'hidden' : 'initial';

  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ marginBottom: '20px' }}>
          <Grid
            component='label'
            container
            alignItems='center'
            spacing={3}
            style={{ marginBottom: '20px' }}
          >
            <Grid item>
              <Button
                variant={spoken ? 'outlined' : 'contained'}
                color='primary'
                onClick={() => {
                  if (spoken) {
                    setSpoken(false);
                  }
                }}
              >
                Display
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant={spoken ? 'contained' : 'outlined'}
                color='secondary'
                onClick={() => {
                  if (!spoken) {
                    setSpoken(true);
                  }
                }}
              >
                Speak
              </Button>
            </Grid>
          </Grid>

          <Typography id='seq-length-slider' gutterBottom>
            Sequence Length
          </Typography>
          <Slider
            defaultValue={seqLengt}
            value={seqLengt}
            valueLabelDisplay='auto'
            step={1}
            marks
            min={4}
            max={14}
            onChange={(_, newValue) => setSeqLength(newValue as number)}
          />
          <Typography id='countdown-duration-slider' gutterBottom>
            {`${spoken ? 'Lapsed' : 'Memorizing'} Time (secs):`}
          </Typography>
          <Slider
            defaultValue={seqLengt}
            value={allowedTime}
            valueLabelDisplay='auto'
            step={5}
            marks
            min={5}
            max={60}
            onChange={(_, newValue) => setAllowedTime(newValue as number)}
          />
        </div>
        <Button
          variant='contained'
          color='secondary'
          onClick={generateSequence}
        >
          Generate New
        </Button>

        <p
          style={{
            visibility: showSequence ? 'initial' : 'hidden',
          }}
        >
          {renderSequence()}
        </p>

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
          style={{
            visibility: timeLeft === 0 && !showSequence ? 'initial' : 'hidden',
          }}
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
