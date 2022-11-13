import { chords } from "../../chirds";
import chord from '../../assets/chord.svg'
import spice from '../../assets/spice.svg'
import prb from '../../assets/prb.svg'
import boi from '../../assets/boi.svg'
import back from '../../assets/back.svg'
import obo from '../../assets/obo.svg'
import classes from './Control.module.css'
import am from '../../assets/chords/am.mp3'
import amspice from '../../assets/chords/am-spice.mp3'
import amprb from '../../assets/chords/am-prb.mp3'
import amboi from '../../assets/chords/am-boi.mp3'
import amback from '../../assets/chords/am-back.mp3'
import amobo from '../../assets/chords/am-o-b-o.mp3'
import c from '../../assets/chords/c.mp3'
import cspice from '../../assets/chords/c-spice.mp3'
import cprb from '../../assets/chords/c-prb.mp3'
import cboi from '../../assets/chords/c-boi.mp3'
import cback from '../../assets/chords/c-back.mp3'
import cobo from '../../assets/chords/c-o-b-o.mp3'
import d from '../../assets/chords/d.mp3'
import dspice from '../../assets/chords/d-spice.mp3'
import dprb from '../../assets/chords/d-prb.mp3'
import dboi from '../../assets/chords/d-boi.mp3'
import dback from '../../assets/chords/d-back.mp3'
import dobo from '../../assets/chords/d-o-b-o.mp3'
import g from '../../assets/chords/g.mp3'
import gspice from '../../assets/chords/g-spice.mp3'
import gprb from '../../assets/chords/g-prb.mp3'
import gboi from '../../assets/chords/g-boi.mp3'
import gback from '../../assets/chords/g-back.mp3'
import gobo from '../../assets/chords/g-o-b-o.mp3'
import f from '../../assets/chords/f.mp3'
import fspice from '../../assets/chords/f-spice.mp3'
import fprb from '../../assets/chords/f-prb.mp3'
import fboi from '../../assets/chords/f-boi.mp3'
import fback from '../../assets/chords/f-back.mp3'
import fobo from '../../assets/chords/f-o-b-o.mp3'

const Control = ({animate}) => {
  let control = []
  let types = [
    'chord',
    'spice',
    'prb',
    'boi',
    'back',
    'obo'
  ]
  function startAnim(){
    animate(true)
    setTimeout(()=>{
      animate(false)
    }, 1000)
  }
  function play(chord) {
    let relAudio = new Audio();
    relAudio.preload = 'auto';
    switch (chord) {
      case 'Amchord':
        relAudio.src = am
        break;
      case 'Amspice':
        relAudio.src = amspice
        break;

      case 'Amprb':
        relAudio.src = amprb
        break;

      case 'Amback':
        relAudio.src = amback
        break;

      case 'Amboi':
        relAudio.src = amboi
        break;

      case 'Amobo':
        relAudio.src = amobo
        break;
      case 'Cchord':
        relAudio.src = c
        break;
      case 'Cspice':
        relAudio.src = cspice
        break;

      case 'Cprb':
        relAudio.src = cprb
        break;

      case 'Cboi':
        relAudio.src = cboi
        break;

      case 'Cback':
        relAudio.src = cback
        break;

      case 'Cobo':
        relAudio.src = cobo
        break;

      case 'Dchord':
        relAudio.src = d
        break;

      case 'Dspice':
        relAudio.src = dspice
        break;

      case 'Dprb':
        relAudio.src = dprb
        break;

      case 'Dboi':
        relAudio.src = dboi
        break;

      case 'Dback':
        relAudio.src = dback
        break;

      case 'Dobo':
        relAudio.src = dobo
        break;

      case 'Gchord':
        relAudio.src = g
        break;

      case 'Gspice':
        relAudio.src = gspice
        break;

      case 'Gprb':
        relAudio.src = gprb
        break;

      case 'Gboi':
        relAudio.src = gboi
        break;

      case 'Gback':
        relAudio.src = gback
        break;

      case 'Gobo':
        relAudio.src = gobo
        break;
      case 'Fchord':
        relAudio.src = f
        break;

      case 'Fspice':
        relAudio.src = fspice
        break;

      case 'Fprb':
        relAudio.src = fprb
        break;

      case 'Fboi':
        relAudio.src = fboi
        break;

      case 'Fback':
        relAudio.src = fback
        break;

      case 'Fobo':
        relAudio.src = fobo
        break;

      default:
        break;
    }
    relAudio.play()
  }
  chords.forEach((i) => {
    types.forEach((type) => {
      switch (type) {
        case 'chord':
          control.push(
            <div
              key={i + type}
              className={classes.btn}
              onClick={() => {
                startAnim()
                play(i + type)
              }}>
              <span>{i}</span>
              <img src={chord} alt='btn' />
            </div>
          )
          break;
        case 'spice':
          control.push(
            <div
              key={i + type}
              className={classes.btn}
              onClick={() => {
                startAnim()
                play(i + type)
              }}>
              <span>{i}</span>
              <img src={spice} alt='btn' />
            </div>
          )
          break;
        case 'prb':
          control.push(
            <div
              key={i + type}
              className={classes.btn}
              onClick={() => {
                startAnim()
                play(i + type)
              }}>
              <span>{i}</span>
              <img src={prb} alt='btn' />
            </div>
          )
          break;
        case 'boi':
          control.push(
            <div
              key={i + type}
              className={classes.btn}
              onClick={() => {
                startAnim()
                play(i + type)
              }}>
              <span>{i}</span>
              <img src={boi} alt='btn' />
            </div>
          )
          break;
        case 'back':
          control.push(
            <div
              key={i + type}
              className={classes.btn}
              onClick={() => {
                startAnim()
                play(i + type)
              }}>
              <span>{i}</span>
              <img src={back} alt='btn' />
            </div>
          )
          break;
        case 'obo':
          control.push(
            <div
              key={i + type}
              className={classes.btn}
              onClick={() => {
                startAnim()
                play(i + type)
              }}>
              <span>{i}</span>
              <img src={obo} alt='btn' />
            </div>
          )
          break;

        default:
          break;
      }
    })
  })
  return (<div className={classes.Control}>
    {control}
  </div>);
}

export default Control;