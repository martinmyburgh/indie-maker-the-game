import React from 'react';
import { connect } from 'react-redux'
import Emoji from './Emoji'

const mapStateToProps = state => {
  return state.make;
};

const MarketTip = (state) => {
  return (
    <div className='make-tip'>
      <h1>Build something and spread the word!</h1>
      <h3>Or is it viceversa? <Emoji symbol="🤔" /></h3>
    </div>
  )
};
export default connect(mapStateToProps)(MarketTip);
