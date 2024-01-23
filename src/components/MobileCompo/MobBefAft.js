import React from 'react'

export default function MobBefAft() {
  return (
    <div>
      <>
      

      <br></br>
      
      <div id="carouselExampleIndicators" class="carousel slide" style={{}}>
      
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <div><p style={{display:"flex",fontSize:"18px",fontWeight:"600",lineHeight:"1.5",justifyContent:"center",textAlign:"center"}}>Modern Coastal Living Room and Bedroom Makeover</p></div>
           {/* //PhotoReview */}
           <div style={{display:"flex",justifyContent:"center",columnGap:"0px",padding:"0px"}}>
           
        <div>
       
        <div style={{display:"flex",flexDirection:"row",columnGap:"50px",justifyContent:"center",fontWeight:"500"}}>
            <div onClick={()=>{
              document.getElementById("Image1Before").src="https://cdn.decorilla.com/images/1200x740/2ba4ec55-1b90-42fd-9bee-108fd441cc79/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1"
              document.getElementById("After").style.textDecoration="none";
              document.getElementById("Before").style.textDecoration="underline";
            }}><p id='Before' style={{textDecoration:"none"}}>Before</p></div>
            <div onClick={()=>{
              document.getElementById("Image1Before").src="https://cdn.decorilla.com/images/1200x740/e1f2922e-b95b-487e-b3ca-6d0fb1010ffa/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1";
              document.getElementById("Before").style.textDecoration="none";
              document.getElementById("After").style.textDecoration="underline";
            }}
            ><p id='After' style={{textDecoration:"underline"}}>After</p></div>
        </div>
             
            <img id="Image1Before" src="https://cdn.decorilla.com/images/1200x740/e1f2922e-b95b-487e-b3ca-6d0fb1010ffa/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1" style={{height:"318px",width:"object-cover"}} />
        </div>
        
        {/* <div style={{textAlign:"center", display: "flex", flexDirection: "column",justifyContent:"center"}}>
            <div>
              <p style={{fontSize:"19px",fontWeight:"500",textDecoration:"underline"}}>Clients Challenge</p>
              <p>We would like a more minimal look with Feng Shui and natural elements that highlight our beautiful green view.</p>
            </div>
            <br></br>
            <div>
            <p style={{fontSize:"19px",fontWeight:"500",textDecoration:"underline"}}>Result</p>
            <blockquote>"We got the relaxing dream home we always wanted. Wanda was fun to work with and paid attention to every single detail."</blockquote>
            </div>
        </div> */}
       </div>
       {/* //PhotoReview */}
        </div>
        <div class="carousel-item">
          {/* //PhotoReview */}
          <div style={{display:"flex",justifyContent:"center",flexDirection:"row",columnGap:"10px",padding:"0px"}}>
           
           <div>
           <div><p style={{fontSize:"18px",fontWeight:"600",lineHeight:"1.5",justifyContent:"center",textAlign:"center"}}>Modern Coastal Living Room and Bedroom Makeover</p></div>
           <div style={{display:"flex",flexDirection:"row",columnGap:"50px",justifyContent:"center",fontWeight:"500"}}>
               <div onClick={()=>{
                 document.getElementById("Image1Before").src="https://cdn.decorilla.com/images/1200x740/2ba4ec55-1b90-42fd-9bee-108fd441cc79/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1"
                 document.getElementById("After").style.textDecoration="none";
                 document.getElementById("Before").style.textDecoration="underline";
               }}><p id='Before' style={{textDecoration:"none"}}>Before</p></div>
               <div onClick={()=>{
                 document.getElementById("Image1Before").src="https://cdn.decorilla.com/images/1200x740/e1f2922e-b95b-487e-b3ca-6d0fb1010ffa/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1";
                 document.getElementById("Before").style.textDecoration="none";
                 document.getElementById("After").style.textDecoration="underline";
               }}
               ><p id='After' style={{textDecoration:"underline"}}>After</p></div>
           </div>
                
               <img id="Image1Before" src="https://cdn.decorilla.com/images/1200x740/e1f2922e-b95b-487e-b3ca-6d0fb1010ffa/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1" style={{height:"318px",width:"object-cover"}} />
           </div>
           
           {/* <div style={{textAlign:"center", display: "flex", flexDirection: "column",justifyContent:"center"}}>
               <div>
                 <p style={{fontSize:"19px",fontWeight:"500",textDecoration:"underline"}}>Clients Challenge</p>
                 <p>We would like a more minimal look with Feng Shui and natural elements that highlight our beautiful green view.</p>
               </div>
               <br></br>
               <div>
               <p style={{fontSize:"19px",fontWeight:"500",textDecoration:"underline"}}>Result</p>
               <blockquote>"We got the relaxing dream home we always wanted. Wanda was fun to work with and paid attention to every single detail."</blockquote>
               </div>
           </div> */}
          </div>
          {/* //PhotoReview */}
        </div>
        <div class="carousel-item">
           {/* //PhotoReview */}
           <div style={{display:"flex",justifyContent:"center",flexDirection:"row",columnGap:"10px",padding:"0px"}}>
           
        <div>
        <div><p style={{fontSize:"18px",fontWeight:"600",lineHeight:"1.5",justifyContent:"center",textAlign:"center"}}>Modern Coastal Living Room and Bedroom Makeover</p></div>
        <div style={{display:"flex",flexDirection:"row",columnGap:"50px",justifyContent:"center",fontWeight:"500"}}>
            <div onClick={()=>{
              document.getElementById("Image1Before").src="https://cdn.decorilla.com/images/1200x740/2ba4ec55-1b90-42fd-9bee-108fd441cc79/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1"
              document.getElementById("After").style.textDecoration="none";
              document.getElementById("Before").style.textDecoration="underline";
            }}><p id='Before' style={{textDecoration:"none"}}>Before</p></div>
            <div onClick={()=>{
              document.getElementById("Image1Before").src="https://cdn.decorilla.com/images/1200x740/e1f2922e-b95b-487e-b3ca-6d0fb1010ffa/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1";
              document.getElementById("Before").style.textDecoration="none";
              document.getElementById("After").style.textDecoration="underline";
            }}
            ><p id='After' style={{textDecoration:"underline"}}>After</p></div>
        </div>
             
            <img id="Image1Before" src="https://cdn.decorilla.com/images/1200x740/e1f2922e-b95b-487e-b3ca-6d0fb1010ffa/Modern-Coastal-Living-Room-and-Bedroom-Makeover-Rendering.jpg?cv=1" style={{height:"318px",width:"object-cover"}} />
        </div>
        
        {/* <div style={{textAlign:"center", display: "flex", flexDirection: "column",justifyContent:"center"}}>
            <div>
              <p style={{fontSize:"19px",fontWeight:"500",textDecoration:"underline"}}>Clients Challenge</p>
              <p>We would like a more minimal look with Feng Shui and natural elements that highlight our beautiful green view.</p>
            </div>
            <br></br>
            <div>
            <p style={{fontSize:"19px",fontWeight:"500",textDecoration:"underline"}}>Result</p>
            <blockquote>"We got the relaxing dream home we always wanted. Wanda was fun to work with and paid attention to every single detail."</blockquote>
            </div>
        </div> */}
       </div>
       {/* //PhotoReview */}
        </div>
      </div>
      <button class="carousel-control-prev custom-carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true" style={{position:"absolute" ,left:"0", top: "50%", transform: "translateY(-50%)", cursor:"pointer", width: "40px", height:"40px",textAlign: "center",lineHeight: "40px",backgroundColor: "rgba(0, 0, 0, 0.5)", color:"white"}}></span>
  <span class="visually-hidden">Previous</span>
</button>

<button class="carousel-control-next custom-carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true" style={{position:"absolute" ,right:"0", top: "50%", transform: "translateY(-50%)", cursor:"pointer", width: "40px", height:"40px",textAlign: "center",lineHeight: "40px",backgroundColor: "rgba(0, 0, 0, 0.5)", color:"white"}}></span>
  <span class="visually-hidden">Next</span>
</button>

    </div>
    




      
      




      </>
      <br></br><br></br><br></br>
    </div>
  )
}
