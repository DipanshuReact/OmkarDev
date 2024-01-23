import React, { useState, useEffect } from "react";

export default function Filter() {
  const [data, setData] = useState(null);
  const [newOdds, setNewOdds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://9xzfo.com/api/public/exchange/odds/sma-event/4/32855060";

      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const apiData = await response.json();

        setData(apiData);

        // MATCH WINNER ODDS FETCHING
        function matchOdds(data) {
  // Check if data.result is defined before trying to access its properties
  if (data.result && Array.isArray(data.result)) {
    // Filter elements with btype equal to "LINE"
    const session = data.result.filter(function (element) {
      return element.btype === "LINE";
    }); 

    return session;

  } else {
    // Handle the case where data.result is not defined or not an array
    console.error("Invalid data format:", data);
    return [];
  }
}

        const matchOddsValue = matchOdds(apiData);
        setNewOdds(matchOddsValue);
        // console.log(newOdds[9].statusLabel)

        // Clear the interval after the first fetch
        clearInterval(fetchDataInterval);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Use setTimeout for the initial fetch to avoid race conditions
    fetchData();

    // Set up the interval for subsequent fetches
    const fetchDataInterval = setInterval(fetchData, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(fetchDataInterval);
  }, [newOdds]); // Remove data and newOdds from the dependency array

  return (
    <div style={{marginTop:"0px",padding:"10px"}}>
      {/* Display or use newOdds as needed */}
      {newOdds && (
        <>
         <div>
          {newOdds.map((item,index) => (
            // <li key={index}>{/* Render your filtered data here */}</li>

            <div style={{marginTop:"",padding:""}}>
            <div key={index} style={{padding:""}}>
              {/* // Event Name */}
             <div style={{color:"white",padding:"10px"}}>
              <b>{newOdds[index].name}</b>
             </div>
            
             <div style={{display:"flex",flexDirection:"row",columnGap:"5px",justifyContent:"space-between"}}>
      
              <div style={{display:"flex",flexDirection:'row',columnGap:"60px",color:"white",width:"180px",backgroundColor:"#1A3157", borderRadius:"20px",justifyContent:"center"}}>
               
                <p>Yes</p>
                 
                 <div style={{}}>
                 <p>{newOdds[index].statusLabel === "Ball Running"? "null" : newOdds[index].runners[0].back[0].line }</p>
                </div>
               </div>
      

             <div style={{display:"flex",flexDirection:'row',columnGap:"60px",color:"white",height:"fit-content",width:"180px",backgroundColor:"#1A3157", borderRadius:"20px",justifyContent:"center",textOverflow: "ellipsis"}}>
               <div style={{ }}>
                 <p>No</p>
                 </div>
                 <div style={{}}>
                 <p>{newOdds[index].statusLabel === "Ball Running"? "null" : newOdds[index].runners[0].lay[0].line}</p>
                 </div>
                </div>

     </div>
     </div>

            </div>
          ))}
          </div>
       </>
      )}
    </div>
  );
}
