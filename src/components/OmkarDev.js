import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AutoWriteText from './AutoWriteText';
import PortfolioSection from './PortfolioSection';

export default function OmkarDev() {
  return (
    <div>
    {/* Image */}
    <div style={{ position: 'relative' }}>
      <img src='https://cdn.decorilla.com/images/2000/d70659d9-40f3-4544-8003-4274a017c4c1/Decorilla-online-interior-design-services.jpg?cv=1' style={{ height: "81vh", width: "100vw", objectFit: "cover" }} alt="Background" />
    
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      {/* Centered Text */}
      <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
  <div>
  <img src="https://i.ibb.co/HP0tZCq/Untitled-1.png" alt="Untitleddesign-2-ezgif-com-video-to-gif-converter-1" border="0" style={{height:"125px",width:"225px"}}/>
      <p style={{ fontSize: "60px", fontFamily: "inherit", fontWeight: "600", lineHeight: "1.1", color: "white",width:"900px",wordSpacing:"5px",textAlign:"center" }}>Get a designer space you'll love</p>
    <br />
    <p style={{ fontSize: "24px", textAlign: "center",width:"700px",display:"flex",justifyContent:"center",marginLeft:"120px",lineHeight:"1.1",fontWeight:"600" }}>Let our accomplished team of online interior designers submit concepts for your space — it's easy and convenient!</p>
    <br></br>
    <div style={{display:"flex",flexDirection:"row",columnGap:"18px",justifyContent:"center"}}>
    <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/vZRDhqqc/3225179-app-logo-media-popular-social-icon.png' border='0' alt='3225179-app-logo-media-popular-social-icon' style={{height:"50px"}}/></a>
    <a href="https://freeimage.host/i/J7i5ODQ"><img src="https://iili.io/J7i5ODQ.th.png" alt="J7i5ODQ.th.png" border="0" style={{height:"50px"}}/></a>
    <a href="https://freeimage.host/i/J7i7H5G"><img src="https://iili.io/J7i7H5G.th.png" alt="J7i7H5G.th.png" border="0" style={{height:"50px"}}/></a>
    </div>
  </div>
  
</div>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{ position: 'absolute', top: '0', width: '100%' }}>
        <div className="container-fluid" style={{padding:"11px",paddingLeft:"100px",fontSize:"18px"}}>
        <img src="https://i.ibb.co/HP0tZCq/Untitled-1.png" alt="Untitleddesign-2-ezgif-com-video-to-gif-converter-1" border="0" style={{height:"55px",width:"100px"}}/>
          <h1 className="navbar-brand" href="#">OmkarDevelopers</h1>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item" style={{padding:"10px"}}>
                <a className="nav-link active" aria-current="page" href="#"><a href="https://freeimage.host/i/J7icH5g"><img src="https://iili.io/J7icH5g.th.png" alt="J7icH5g.th.png" border="0" style={{height:"35px"}}/></a>+91 8390383076</a>
              </li>
              <li className="nav-item" style={{padding:"10px"}}>
                <a className="nav-link active" aria-current="page" href="#"><a href="https://freeimage.host/i/J7icZps"><img src="https://iili.io/J7icZps.th.png" alt="J7icZps.th.png" border="0" style={{height:"35px"}}/></a> OmkarDevelopers@gmail.com</a>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>

    {/* // Owner */}

    <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
    
    <div style={{backgroundColor:"#f6f6f6" ,width:"100vw"}}>
    <div style={{display:"flex",flexDirection:"row",columnGap:"200px",padding:"30px",justifyContent:"flex-start",paddingLeft:"200px"}}>

      <div style={{}}> <img src='https://cdn.decorilla.com/imgp/jpg/d28e76cb-139a-49e3-83c8-ccadfd1a99aa/Martha-Stewart.jpg' style={{height:"150px",width:"150px",borderRadius:"100px"}}></img></div>
      <div style={{display:"flex",justifyContent:"center",fontSize:"24px"}}> <p>“We recommend Decorilla as the best online interior design service due to its comprehensive full-service offerings.”</p>
      </div>
      

    </div>
    
    </div>

    </div>
    {/* // Owner */}
    <br></br><br></br>
    <PortfolioSection></PortfolioSection>  

    {/* //Our works */}
    <br></br><br></br>
    <div style={{display:"flex",justifyContent:"center"}}>
      <p style={{fontSize:"32px",lineHeight:"2",fontWeight:"470"}}>Our designers created these real spaces. Create your own today!</p>
    </div>

    <div style={{display:"flex",justifyContent:"center",flexDirection:"row",columnGap:"15px",fontWeight:"500"}}>
    
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
                    <div  style={{width:"600px",height:"600px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"600px",height:"600px"}} alt="..."/>
                        
                      </div>
                      <div  style={{width:"600px",height:"600px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"600px",height:"600px"}} alt="..."/>
                        
                      </div> <div  style={{width:"600px",height:"600px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"600px",height:"600px"}} alt="..."/>
                        
                      </div>
                      
                        
                      
                      
                </div>
              </div>
              <div class="carousel-item">
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",columnGap:"20px"}}>
                    <div  style={{width:"600px",height:"600px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"600px",height:"600px"}} alt="..."/>
                       </div>
                      <div  style={{width:"600px",height:"600px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"600px",height:"600px"}} alt="..."/>
                        </div>
                      <div  style={{width:"600px",height:"600px"}}>
                        <img src="https://cdn.decorilla.com/images/927/pf_46_53d2657d6fea94.96815120/Coastal-living-room-online-interior-design-help.jpg?cv=1" style={{width:"600px",height:"600px"}} alt="..."/>
                        
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






  </div>
);
  
}
