import React, { Component } from 'react';
import './Button.css';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="shuffle" status={this.props.shuffleStatus?'on':'off'} onClick={this.props.shuffle}>
            <span className="ion-shuffle"></span>
          </button>
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick}>
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-skip-forward"></span>
           </button>
           <button id="playloop" status={this.props.playloopStatus?'on':'off'} onClick={this.props.playloop}>
             <span className="ion-loop"></span>
           </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.currentTimeDisplay}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.durationDisplay || "-.--"}</div>
        </section>
        <section id="volume-control">
           <div className="icon ion-volume-low"></div>
           <input
             type="range"
             className="seek-bar"
             value={this.props.setVolume}
             onChange={this.props.handleVolChange}
            />
           <div className="icon ion-volume-high"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
