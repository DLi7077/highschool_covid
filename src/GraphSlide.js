
import React, {useState, useEffect} from 'react'
import GraphType from './GraphType'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import GraphImages from './graphs/GraphImages.js'

export default function GraphSlide({graphType, year}) {

  /**
   * @description modifies year to display
   */
  const [currYear, setYear]= useState(year);

  function decrementYear(){
    if(currYear===2017) return;
    setYear(prev=> prev-1);
  }
  
  function incrementYear(cycle= toggle){
    if(currYear===2021){
      if(!cycle) return;
      setYear(prev=> prev-4)
      return;
    }
    setYear(prev=> prev+1);
  }

  /**
   * @description Updates displayed graph when year changes
   */
  const [graph,updateGraph]= useState(
    <GraphType graphType={graphType} year ={currYear}></GraphType>
  );
  function updateYear(){
    updateGraph(
      (graph)=> graph=<GraphType graphType={graphType} year ={currYear}/>
    );
  }
  useEffect(()=>{
    updateYear()
  // eslint-disable-next-line
  },[currYear]);
  
  /**
   * @description Toggle for a repeated progresion for year
   */
  const [toggle,setToggle] = useState(true);
  // toggle on or off
  async function toggleCycle(){
    setToggle(prev=> !prev);
  }
  const playPause = curr=>{
    if(curr) return <PlayArrowIcon style= {{transform: 'scale(2)'}}/>
    return <PauseIcon style= {{transform: 'scale(2)'}}/>
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(toggle){
        incrementYear(true);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line
  }, [toggle,currYear]);

  return (
    <div className='graphLayout'>
      <div className='title'>{graphType} {currYear}</div>
      {graph}
      <div className='mediaBar'>
        <button className= 'media' onClick= {()=>{decrementYear()}}>
          <ArrowBackIcon style= {{transform: 'scale(2)'}}/>
        </button>

        <button className= 'media' onClick= {
          ()=>{
            toggleCycle();
            if(!toggle){
              setYear(2017);
            }
          }
        }> {playPause(toggle)}
        </button>
        <button className= 'media' onClick={()=>{incrementYear();}}>
          <ArrowForwardIcon style= {{transform: 'scale(2)'}}/>
        </button>
      </div>
    </div>
  )
}
