import React, {useState, useEffect } from "react";
import './bg.css'



export default function Market() {
  const [data, setData] = React.useState(null);
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
        // console.log(data)
       
        // MATCH WINNER ODSS FETCHING
        function matchOdds(data) {
          
          for (var i = 0; i < data.result.length; i++) {
            if (data.result[i].mtype === 'MATCH_ODDS' && data.result[i].name === 'Match Odds') {
              const Team1Rate=data.result[i].runners[0].back[0].price===undefined?"null":data.result[i].runners[0].back[0].price;
              const Team2Rate=data.result[i].runners[1].back[0].price===undefined?"null":data.result[i].runners[1].back[0].price;
              return {Team1Rate,Team2Rate};
            }
            
          
          }
          return null; // Return a default value if no matching odds are found
        }

        const MatchOddsValue = matchOdds(data);
        setNewOdds(MatchOddsValue);
        // console.log(newOdds)

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

  }, [data,newOdds]); // Add data as a dependency to re-run the effect when data changes
  

  return (
    
    <div>
      { newOdds && (
    
     <>
      {/* <p>Match Winner</p>
      <p> W1 {newOdds.Team1Rate}</p> <p>W2 {newOdds.Team2Rate}</p> */}


<div style={{marginTop:"50px",padding:"10px"}}>
        

        {/* // MATCH WINNER */}
          <div style={{color:"white",padding:"13px"}}><b>Match Winner (incl. super over)</b></div>
        <div style={{display:"flex",flexDirection:"row",columnGap:"5px",justifyContent:"space-between"}}>
      
        <div style={{display: "flex", flexDirection: 'row', columnGap: "30px", color: "white", width: "180px", backgroundColor: "#1A3157", borderRadius: "20px", justifyContent: "center"}}>
  <div style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", float: "left"}}>
    <p>Team1</p>
  </div>
  <div style={{float: "right"}}>
    <p>{newOdds.Team1Rate}</p>
  </div>
</div>
      

<div style={{display: "flex", flexDirection: 'row', columnGap: "30px", color: "white", width: "180px", backgroundColor: "#1A3157", borderRadius: "20px", justifyContent: "center"}}>
  <div style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", float: "left"}}>
    <p>Team2</p>
  </div>
  <div style={{float: "right"}}>
    <p>{newOdds.Team2Rate}</p>
  </div>
</div>

     </div>
     
            {/* //TOSS WINNER */}

            <div style={{color:"white",padding:"13px"}}><b>TOSS Winner</b></div>
        <div style={{display:"flex",flexDirection:"row",columnGap:"5px",justifyContent:"space-between"}}>
      
              <div style={{display:"flex",flexDirection:'row',columnGap:"60px",color:"white",height:"",width:"180px",backgroundColor:"#1A3157", borderRadius:"20px",justifyContent:"center"}}>
               <div style={{}}>
                <p>India</p>
                 </div>
                 <div style={{}}>
                 <p>1.99</p>
                </div>
               </div>
      

             <div style={{display:"flex",flexDirection:'row',columnGap:"60px",color:"white",height:"fit-content",width:"180px",backgroundColor:"#1A3157", borderRadius:"20px",justifyContent:"center",textOverflow: "ellipsis"}}>
               <div style={{ }}>
                 <p>Australia</p>
                 </div>
                 <div style={{}}>
                 <p>1.99</p>
                 </div>
                </div>

     </div>
     




     </div>






     </>   
    
    

    

    )}
    </div>
    
  );
}

