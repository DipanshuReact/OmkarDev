import React from 'react';

export default function MobOmkardev() {
  return (
    <div>
      {/* Image */}
      <div style={{ position: 'relative' }}>
        <img
          src='https://cdn.decorilla.com/images/2000/d70659d9-40f3-4544-8003-4274a017c4c1/Decorilla-online-interior-design-services.jpg?cv=1'
          style={{ height: "45vh", width: "100%", objectFit: "cover" }}
          alt="Background"
        />

        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

        {/* Centered Text */}
        <div style={{ position: 'absolute', top: '63%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
          <div>
            <img src="https://i.ibb.co/HP0tZCq/Untitled-1.png" alt="Untitleddesign-2-ezgif-com-video-to-gif-converter-1" border="0" style={{ height: "70px", width: "125px" }} />
            <br></br>
            <p style={{ fontSize: "24px", fontFamily: "inherit", fontWeight: "600", lineHeight: "1.2", color: "white", width: "100%", margin: "0 auto", textAlign: "center",marginTop:"22px" ,letterSpacing:"0.1px" }}>Get a designer space you'll love</p>
            
            {/* <p style={{ fontSize: "10px", textAlign: "center", width: "100%", margin: "0 auto", lineHeight: "1.1", fontWeight: "600" }}>
              Let our accomplished team of online interior designers submit concepts for your space — it's easy and convenient!
            </p> */}
            
            <div style={{ display: "flex", flexDirection: "row", columnGap: "18px", justifyContent: "center",paddingTop:"13px" }}>
              <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/vZRDhqqc/3225179-app-logo-media-popular-social-icon.png' border='0' alt='3225179-app-logo-media-popular-social-icon' style={{ height: "30px" }} /></a>
              <a href="https://freeimage.host/i/J7i5ODQ"><img src="https://iili.io/J7i5ODQ.th.png" alt="J7i5ODQ.th.png" border="0" style={{ height: "30px" }} /></a>
              <a href="https://freeimage.host/i/J7i7H5G"><img src="https://iili.io/J7i7H5G.th.png" alt="J7i7H5G.th.png" border="0" style={{ height: "30px" }} /></a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{ position: 'absolute', top: '0', width: '100%' }}>
          <div className="container-fluid" style={{ padding: "0px", paddingLeft: "8px", fontSize: "18px" }}>
           
            <p className="navbar-brand" href="#" style={{fontSize:"16px"}}> <img src="https://i.ibb.co/HP0tZCq/Untitled-1.png" alt="Untitleddesign-2-ezgif-com-video-to-gif-converter-1" border="0" style={{ height: "35px", width: "70px" }} />OmkarDevelopers</p>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ padding: "10px" }}>
                  <a className="nav-link active" aria-current="page" href="#"><a href="https://freeimage.host/i/J7icH5g"><img src="https://iili.io/J7icH5g.th.png" alt="J7icH5g.th.png" border="0" style={{ height: "25px" }} /></a>+91 8390383076</a>
                </li>
                <li className="nav-item" style={{ padding: "10px" }}>
                  <a className="nav-link active" aria-current="page" href="#"><a href="https://freeimage.host/i/J7icZps"><img src="https://iili.io/J7icZps.th.png" alt="J7icZps.th.png" border="0" style={{ height: "25px" }} /></a> OmkarDevelopers@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


       {/* // Owner */}

    <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
    
    <div style={{backgroundColor:"#f6f6f6" ,width:"100vw"}}>
    <div style={{display:"flex",flexDirection:"row",columnGap:"20px",padding:"30px",justifyContent:"flex-start",paddingLeft:"20px"}}>

      <div style={{}}> <img src='https://cdn.decorilla.com/imgp/jpg/d28e76cb-139a-49e3-83c8-ccadfd1a99aa/Martha-Stewart.jpg' style={{height:"75px",width:"75px",borderRadius:"100px"}}></img></div>
      <div style={{display:"flex",justifyContent:"center",fontSize:"12px"}}> <p>“We recommend Decorilla as the best online interior design service due to its comprehensive full-service offerings.”</p>
      </div>
      

    </div>
    
    </div>

    </div>
    {/* // Owner */}




    </div>
  );
}
