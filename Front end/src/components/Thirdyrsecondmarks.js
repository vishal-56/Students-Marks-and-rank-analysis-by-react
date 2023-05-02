import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Thirdyrsecondmarks() {
  const [data, setData] = useState([]);
  const [toppers, setToppers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/abc/thirdyear2marks")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data.userdata3);

        // Find and set the toppers
        const sortedData = [...res.data.userdata3].sort((a, b) => b.percent - a.percent);
        setToppers(sortedData.slice(0, 3)); // Assuming you want to display top 3 toppers
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const isFail = (ab) => {
    // Check if any subject has a score below 40
    return ab.DS < 40 || ab.WT < 40 || ab.AI < 40 || ab.CC < 40 || ab.INTERN < 40;
  };

  return (
    <div className="text-center" style={{backgroundColor:"antiquewhite"}}>
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

      <h2 className="display-6"><b>TE second sem-Student Performance Report</b></h2>

      <table className="table table-striped">
        <thead>
          <tr className="table-primary">
            <th>NAME</th>
            <th>ROLL</th>
            <th>DS</th>
            <th>WT</th>
            <th>AI</th>
            <th>CC</th>
            <th>INTERN</th>
            <th>PERCENT</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ab, index) => (
            <tr key={index}>
              <td>{ab.NAME}</td>
              <td>{ab.ROLL}</td>
              <td>{ab.DS}</td>
              <td>{ab.WT}</td>
              <td>{ab.AI}</td>
              <td>{ab.CC}</td>
              <td>{ab.INTERN}</td>
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

export default Thirdyrsecondmarks;
