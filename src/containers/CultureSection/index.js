import React from 'react';
import Wrapper from './styles';

function CultureSection() {
  return (
    <Wrapper>
      <div className='culture-container'>
        <p className='culture-title'>You’re in good company</p>
        <p className='culture-subtitle'>Meet some of the team that help to create our team culture and ...</p>
        <div className='culture-employees'>
            <div className='culture-employee'>1</div>
            <div className='culture-employee'>3</div>
            <div className='culture-employee'>2</div>
            <div className='culture-employee'>4</div>
            <div className='culture-employee'>5</div>
            <div className='culture-employee'>6</div>
            <div className='culture-employee'>7</div>
            <div className='culture-employee'>8</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CultureSection;