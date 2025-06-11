import { useState } from "react";
  

  
  
  function PlayerAdd(){
      const [addPlayers,setAddPlayers]=useState({
          playerId:'',
          fullName:'',
          dateOfBirth:'',
          contactNumber:'',
          email:'',
          address:'',
          sportChosen:'',
          coachAssigned:'',
          joiningDate:'',
          totalFee:'',
          payingFee:'',
          pendingFee:''
      })
  
      const handlePlayers = (e)=>{
          setAddPlayers({ ...addPlayers,[e.target.name]:e.target.value})
      }
  
      const playersSubmit =async (s)=>{
        s.preventDefault();
        const token=localStorage.getItem("token")
        console.log(token)
        try{
          
          const res = await fetch("http://localhost:4005/players/add",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json",
                  Authorization: `Bearer ${token}`
              },
              body:JSON.stringify(addPlayers)
          })
  
          const result = await res.json();
          console.log(result)
  
          if(result.success){
              alert("Players add successful")
          }
          else{
              alert("Players not added")
          }
        }
        catch(error){
              alert("server error")
        }
      }
    
      
  return(<>
  <div>
    <h1></h1>
    <form onSubmit={playersSubmit}>
    <label>PlayerId</label><input type="text" name="playerId" value={addPlayers.playerId}  onChange={handlePlayers}></input>
    <label>Name</label><input type="text" name="fullName" value={addPlayers.fullName} onChange={handlePlayers}></input>
    <label>DateOfBirth</label> <input type="date" name="dateOfBirth" value={addPlayers.dateOfBirth} onChange={handlePlayers}></input> 
    <label>Gender</label>
    <select name="gender" value={addPlayers.gender} onChange={handlePlayers}>
        <option>Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <label>Phone No</label><input type="number" name="contactNumber" value={addPlayers.contactNumber} onChange={handlePlayers}></input>
    <label>Email</label><input type="email" name="email" value={addPlayers.email} onChange={handlePlayers}></input>
    <label>Address</label><input type="text" name="address" value={addPlayers.address} onChange={handlePlayers}></input>
    <label>Sport Name</label><input type="text" name="sportChosen" value={addPlayers.sportChosen} onChange={handlePlayers}></input>
    <label>Coach Assigned</label><input type="text" name="coachAssigned" value={addPlayers.coachAssigned} onChange={handlePlayers}></input>
    <label>Join Date</label><input type="date" name="joiningDate" value={addPlayers.joiningDate} onChange={handlePlayers}></input>
    <label>Total Fee</label><input type="text" name="totalFee" value={addPlayers.totalFee} onChange={handlePlayers}></input>
    <label>Paying Fee</label><input type="text" name="payingFee" value={addPlayers.payingFee} onChange={handlePlayers}></input>
    <label>Pending Fee</label><input type="text" name="pendingFee" value={addPlayers.pendingFee} onChange={handlePlayers}></input>
    <button type="submit">Save</button>
</form>
  </div>
  </>

  );
}
export default PlayerAdd
  
  
  
    
