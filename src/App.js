
import './App.css';
import { useState } from 'react';
import { Spa } from './Spa';

function App() {
  const [toSpa, setSpa] = useState(Spa);
  const [showTextMore, setShowTextMore] = useState(false)

  
   const removeSpa = (id) => {
    let newSpa = toSpa.filter(spaName => spaName.id !== id);
    setSpa(newSpa) 
   }

   const showTextClick = (element) => {
element.showMore = !element.showMore
setShowTextMore(!showTextMore)
   }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top {toSpa.length} SPA Hotel in Kent</h1>
       { toSpa.map((element => {
         const {id, spaName, description, image, sourse, showMore} = element;
         return(<div key={id}>
          <div>
            <p>{id}- {spaName}</p>
          </div>
          <div className='App-container'>
            <p className='App-description'>{showMore ? description : description.substring(0, 200) + '...'}
            <button className='App-description-btn' onClick={() => showTextClick(element)}>{showMore ? 'Show less': 'Show more'}</button>
            </p>
          
        </div>
        <div>
          <img src={image} alt='of hotel spa' width='600px' />
          <p>Sourse: {sourse}</p>
        </div>
        <div>
          <button className='btn' onClick={() => removeSpa(id)}>Remove</button>
        </div>
        </div>
         )
        }))}
        
      </header>
    </div>
  );
}

export default App;
