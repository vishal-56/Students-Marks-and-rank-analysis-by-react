import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Secondyrsecondmarks() {
  const [data, setData] = useState([]);
  const [toppers, setToppers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/abc/secondyear2marks")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data.userdata1);

        // Find and set the toppers
        const sortedData = [...res.data.userdata1].sort((a, b) => b.percent - a.percent);
        setToppers(sortedData.slice(0, 3)); // Assuming you want to display top 3 toppers
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const isFail = (ab) => {
    // Check if any subject has a score below 40
    return ab.DSA < 40 || ab.SE < 40 || ab.PPL < 40 || ab.MP < 40 || ab.MII < 40;
  };

  return (
    
    <div className="text-center" style={{backgroundColor:"antiquewhite"}}>

    <div>
      <h2 className="display-6"><b>Topper Information</b></h2>
      <center>
      <table className="table table-striped" style={{width:"500px"}}>
        <thead>
          <tr className="table-primary">
            <th>SrNo</th>
            <th>NAME</th>
            <th>PERCENT</th>
          </tr>
        </thead>
        <tbody>
          {
            toppers.map((topper,index)=>(
              
              <tr key={index}>
                <td>{index+1}</td>
                <td>{topper.NAME}</td>
                <td>{topper.percent}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </center>
    </div>



      <h2 className="display-6"><b>SE second sem-Student Performance Report</b></h2>

      <table className="table table-striped">
        <thead>
          <tr className="table-primary">
            <th>NAME</th>
            <th>ROLL</th>
            <th>DSA</th>
            <th>SE</th>
            <th>PPL</th>
            <th>MP</th>
            <th>MIII</th>
            <th>PERCENT</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ab, index) => (
            <tr key={index}>
              <td>{ab.NAME}</td>
              <td>{ab.ROLL}</td>
              <td>{ab.DSA}</td>
              <td>{ab.SE}</td>
              <td>{ab.PPL}</td>
              <td>{ab.MP}</td>
              <td>{ab.MII}</td>
              <td>{ab.percent}</td>
              <td>{isFail(ab) ? 'Fail' : 'Pass'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
      <Link className="btn btn-success" to="/Recom">Let's Improve</Link>
      </center>
    </div>
  );
}

export default Secondyrsecondmarks;
