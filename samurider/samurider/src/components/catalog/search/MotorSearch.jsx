import { useEffect, useState } from "react";

import * as MotorService from "../../../services/MotorService.js"
import MotorSearchDetails from "./MotorSearchDetails.jsx";

const MotorSearch = () => {

    const [searchData, setSearchData] = useState("") 
    const [motors, setMotors] = useState([]);
    const [filteredMotors, setFilteredMotors] = useState([])
    
    useEffect(() => {
        MotorService.getAll()
        .then(responce => {
            setMotors(responce);
            setFilteredMotors(responce)
        })
    }, [])

    const searchChangeHeandler = (e) => {
        setSearchData(state => state = e.target.value)
    }

    const searchUseHeandler = () => {
        
        let currMotors = motors;
        if (searchData !== "") {
            currMotors =  motors.filter(x => x.model.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()));
        }        
        setFilteredMotors(currMotors);        
    }    

    return (
        <section id="search">
        <div className="form">
          <h4>Search</h4>
          <form className="search-form">
            <input type="text" name="search" id="search-input" onChange={searchChangeHeandler} value={searchData} onBlur={searchUseHeandler} />
          </form>
        </div>
        <h4 id="result-heading">Results:</h4>
        <div className="search-result">
        { filteredMotors.length === 0 ?
            <h2 className="no-avaliable">No result.</h2> :
            filteredMotors.map(x => <MotorSearchDetails key={x._id} motor={x}/>)
          }
        </div>
      </section>
    )
}

export default MotorSearch;