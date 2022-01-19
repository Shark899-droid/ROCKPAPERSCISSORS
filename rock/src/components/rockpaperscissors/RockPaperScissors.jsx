import React from 'react';
import './RockPaperScissors.css';
import rock from '../../assets/rock.png';
import paper from '../../assets/paper.png';
import scissors from '../../assets/scissors.png';
import { useGlobalContext } from '../../context';

const RockPaperScissors = () => {
  const {
    ClickedPaper,
    ClickedRock,
    ClickedScissors,
    cpuState,
    player1State,
    cpuScore,
    player1Score,
    hasPlayerWon,
    hasCpuWon,
    restart,
  } = useGlobalContext();
  return (
    <>
      <div className='flex flex-col justify-center'>
        <h1 className=' flex justify-center text-2xl sm:text-6xl my-6'>
          RockPaperScissors
        </h1>
        <div className='flex flex-row justify-around w-full my-16'>
          <img
            className='w-24 sm:w-48 cursor-pointer'
            onClick={ClickedRock}
            src={rock}
            alt='rock'
          />
          <img
            className='w-24 sm:w-48 cursor-pointer'
            onClick={ClickedPaper}
            src={paper}
            alt='rock'
          />
          <img
            className='w-24 sm:w-48 cursor-pointer'
            onClick={ClickedScissors}
            src={scissors}
            alt='rock'
          />
        </div>
        <div className='flex flex-row justify-around w-full mt-20'>
          <h2 className='text-3xl sm:text-5xl'>PLAYER1</h2>
          <h2 className='text-3x sm:text-5xl'>CPU</h2>
        </div>
        <div className='flex flex-row justify-around w-full my-10'>
          <h2 className='text-2xl'>{player1State}</h2>
          <h2 className='text-2xl'>{cpuState}</h2>
        </div>
        <div className='flex flex-row justify-around w-full my-10'>
          <h2 className='text-2xl'>{player1Score}</h2>
          <h2 className='text-2xl'>{cpuScore}</h2>
        </div>
        <div
          className='flex justify-center'
          style={
            hasPlayerWon ? { visibility: 'visible' } : { visibility: 'hidden' }
          }
        >
          Player1 has won the game
        </div>
        <div
          className='flex justify-center'
          style={
            hasCpuWon ? { visibility: 'visible' } : { visibility: 'hidden' }
          }
        >
          Cpu has won the game
        </div>
        <button
          style={
            cpuScore === 10 || player1Score === 10
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          className='flex justify-center'
          onClick={restart}
        >
          RESTART
        </button>
      </div>
    </>
  );
};

export default RockPaperScissors;
