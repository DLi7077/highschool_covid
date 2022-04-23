
import React, {useState, useEffect} from 'react'
import GraphType from './GraphType'
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
  async function updateYear(){
    updateGraph(
      (graph)=> graph=<GraphType graphType={graphType} year ={currYear}/>
    );
  }
  useEffect(()=>{updateYear()},[currYear]);
  
  /**
   * @description Toggle for a repeated progresion for year
   */
  const [toggle,setToggle] = useState(true);
  // toggle on or off
  async function toggleCycle(){
    setToggle(prev=> !prev);
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
  }, [toggle,currYear]);

  return (
    <div className='graphLayout'>
      <div className='title'>{graphType} {currYear}</div>
      {graph}
      <div className='mediaBar'>
        <button className= 'media' onClick= {()=>{decrementYear()}}>
          Previous Year
        </button>

        <button className= 'media' onClick= {
          ()=>{
            toggleCycle();
            console.log(`toggled ${toggle}`);
            if(!toggle){
              setYear(2017);
            }
          }
        }> {`Toggle ${toggle}`}
        </button>
        <button className= 'media' onClick={()=>{incrementYear();}}>
          Next Year 
        </button>
      </div>
    </div>
  )
}
