import guitarist from '../../assets/guitarist.png'
import arm from '../../assets/arm.png'
import classes from './Guitarist.module.css'

const Guitarist = ({anim}) => {
  return ( <div>
    <img src={guitarist} alt='guitarist'/>
    <img className={anim ? classes.anim : classes.arm} src={arm} alt='arm' />
  </div> );
}
 
export default Guitarist;