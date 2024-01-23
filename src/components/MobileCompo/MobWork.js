import React from 'react'

export default function MobWork() {
  return (
    <div>
      <br></br><br></br><br></br>

      <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
      <p style={{fontSize:"24px",lineHeight:"1.3",fontWeight:"470"}}>Our designers created these real spaces. Create your own today!</p>
    </div>

    <div style={{display:"flex",justifyContent:"center",flexDirection:"row",rowGap:"0px",columnGap:"8px",fontWeight:"350",flexWrap:"wrap",fontSize:"12px"}}>
    
    <p>Living Room</p>
    <p>Dining Room</p>
    <p>Combined Living/Dining</p>
    <p>Bedroom</p>
    <p>Small Office</p>
    <p>Kitchen</p>
    <p>Hallway</p>
    <p>Kids Room</p>
    <p>Outdoor/Patio</p>
    <p>Commercial/Bussiness</p>
    <p>Other</p>
    {/* <p>Living Room</p> */}

    </div>


    <div id="carouselExample" class="carousel slide" style={{marginTop:"10px"}}>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",columnGap:"20px"}}>
                    <div  style={{width:"300px",height:"300px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"300px",height:"300px"}} alt="..."/>
                        
                      </div>
                      <div  style={{width:"300px",height:"300px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"300px",height:"300px"}} alt="..."/>
                        
                      </div> <div  style={{width:"300px",height:"300px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"300px",height:"300px"}} alt="..."/>
                        
                      </div>
                      
                        
                      
                      
                </div>
              </div>
              <div class="carousel-item">
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",columnGap:"20px"}}>
                    <div  style={{width:"300px",height:"300px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"300px",height:"300px"}} alt="..."/>
                       </div>
                      <div  style={{width:"300px",height:"300px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"300px",height:"300px"}} alt="..."/>
                        </div>
                      <div  style={{width:"300px",height:"300px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"300px",height:"300px"}} alt="..."/>
                        
                      </div> 
                     
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


    <br></br><br></br><br></br>
    </div>
  )
}
