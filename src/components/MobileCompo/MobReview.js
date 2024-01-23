import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MobReview() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '22px', lineHeight: '2', fontWeight: '470' }}>Happy Clients. Beautiful Designs.</p>
      </div>
      <br />

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src='https://cdn.decorilla.com/images/2000/d70659d9-40f3-4544-8003-4274a017c4c1/Decorilla-online-interior-design-services.jpg?cv=1'
          style={{ width: '100%', height: '50vh', objectFit: 'cover', maxHeight: '50vh' }}
          alt="Background"
        />

        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>

        {/* Centered Text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#fff',
            width: '90%',
            maxWidth: '400px', // Adjust as needed
            margin: '0 auto',
          }}
        >
          <div>
            <div id="carouselExampleMobReview" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      columnGap: '20px',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
                        
                    <div style={{height:"300px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.8)"}}  >

                  <p style={{textAlign:"center",padding:"14px",color:"black"}}>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
                <p><img src="https://cdn.decorilla.com/imgp/jpg/0a456a8d-0cb4-4bef-82f1-3ada9a0a4842/Online-Decorating-Review-Debra.jpg" alt="Untitled-1" border="0" style={{height:"75px",width:"75px",float:"left",marginLeft:"15px",borderRadius:"50px"}}/></p>
              <b style={{display:"flex",justifyContent:"center",float:"left",padding:"20px",color:"black"}}>John Smith</b>
                 </div>

                    </div>
                    {/* Add more images as needed */}
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      columnGap: '20px',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
                    <div style={{height:"300px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.9)"}}  >

<p style={{textAlign:"center",padding:"17px",color:"black"}}>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
<p><img src="https://cdn.decorilla.com/imgp/jpg/0a456a8d-0cb4-4bef-82f1-3ada9a0a4842/Online-Decorating-Review-Debra.jpg" alt="Untitled-1" border="0" style={{height:"75px",width:"75px",float:"left",marginLeft:"15px",borderRadius:"50px"}}/></p>
<b style={{display:"flex",justifyContent:"center",float:"left",padding:"20px",color:"black"}}>John Smith</b>
</div>

                    </div>
                    {/* Add more images as needed */}
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      columnGap: '20px',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
                    <div style={{height:"300px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.9)"}}  >

<p style={{textAlign:"center",padding:"17px",color:"black"}}>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
<p><img src="https://cdn.decorilla.com/imgp/jpg/0a456a8d-0cb4-4bef-82f1-3ada9a0a4842/Online-Decorating-Review-Debra.jpg" alt="Untitled-1" border="0" style={{height:"75px",width:"75px",float:"left",marginLeft:"15px",borderRadius:"50px"}}/></p>
<b style={{display:"flex",justifyContent:"center",float:"left",padding:"20px",color:"black"}}>John Smith</b>
</div>

                    </div>
                    {/* Add more images as needed */}
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleMobReview" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleMobReview" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
    
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",columnGap:"10px",padding:"10px"}}>
    <div style={{display:"flex",justifyContent:"center"}}>
        <img src="https://cdn.decorilla.com/imgp/jpg/f5e09d0d-388f-49fd-b3c5-b06e383b5615/Affordable-interior-design.jpg" style={{height:"300px"}} />
    </div>
    
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",marginTop:"15px"}}>
        <p style={{fontSize:"22px",fontWeight:"500",width:"100%",textAlign:"center"}}>Think you can't afford beautiful interior design? Think again.</p>
       
    </div>
    <div style={{ display: "flex", justifyContent: "center",marginTop:"0px"}}>
        <button type="button" class="btn btn-primary" style={{display:"flex",width:"fit-content",fontSize:"16px",padding:"5px",justifyContent:"center"}}>Contact US Now</button>
    </div>
    </div>
   <br></br>
    </>
  );
}
