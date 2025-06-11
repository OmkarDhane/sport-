import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function CoachReport(){
    const navigate = useNavigate()
    const[tasks,setTasks]=useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
    const fetchtasks = async () => {
      try {
        const res = await axios.get('http://localhost:4005/coach/report', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setTasks(res.data.data);
      } catch (err) {
        alert('Failed to fetch farmer report');
      }
    };

    fetchtasks();
},[token]);
    
    return(
        <div>
            <h1></h1>
            <table border={2}> 
                <thead>
                    <tr>
                        <th>Sr.no</th>
                    <th>CoachId</th>
                    <th>Name</th>
                    <th>Sport Specilization</th>
                    <th>Contact</th>
                    <th>Experience</th>

                  </tr>                
                </thead>
               <tbody>
          {tasks.map((p, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{p.coachId}</td>
              <td>{p.name}</td>
              <td>{p.sportSpecialization}</td>
              <td>{p.contact}</td>
              <td>{p.experience}</td>
            
           </tr>
          ))}
        </tbody>
            </table>

        </div>
    );
}

export default CoachReport