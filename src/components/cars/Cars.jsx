import React,{useState} from 'react'
import './Cars.css';
import carsData from './carsData';

const Cars = () => {
    const [npOfElement, setnoOfElement]=useState(8);

    const slice= carsData.slice(0, npOfElement);

    const showMore=()=>{
        setnoOfElement(npOfElement+npOfElement/2);
    }
    const viewAll=()=>{
        setnoOfElement(npOfElement*12);
    }
  return (
    <div className='cars-container'>
    <h4 className='view-all' onClick={()=>viewAll()}>View All</h4> <br />
    <h3 style={{color:"gray", marginLeft:"20px"}} >Popular Car</h3>
    
    <div className="cars-data">
              {slice.map((data, index) => (
                <div className="cars-map">
                <div className="cars-dis">
                    <h4>{data.title}</h4>
                    <h6 style={{color:"gray"}}>{data.class}</h6>
                  </div>
                  <div className="cars-img">
                    <img src={data.image} alt="" width="250px" height="150px" style={{borderRadius:"5px"}} />
                  </div>
                  <div className='price-rent'>
                  <h4>{data.price}</h4>
                  <button className="cars-button">Rent Now</button>
                  </div>
                </div>
              ))}
            </div>
            <button className='showmore-btn' onClick={()=>showMore()}>Show More Cars</button>
            <h4 style={{float:"right", color:"gray",marginTop:"40px"}}>120 Cars</h4>
    </div>
  )
  
}

export default Cars