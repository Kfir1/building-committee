import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


class HomePage extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
               
                <Image  style={{ opacity: 0.5, width: "100%", display: "flex", justifyContent: "center", textAlign:"center"}} src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/ByZVUTp1Gja5fwdxr/videoblocks-aerial-drone-shot-over-residential-apartment-buildings-on-sunset-aerial-shot-over-community-apartment-complex-in-china_rlgzwdlbk4_thumbnail-1080_01.png" fluid />
                {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</div> */}
                  {/* <Image  style={{width: "950px", height: "200px" , borderRadius: "50px" }} src="https://i.pinimg.com/originals/84/ba/9e/84ba9e7f25805711179b64d2d623d1e0.jpg"  /> */}
                     {/* <Container>
                    <Row xs={12} md={6}  lg={3} >
                        <Col >
                        <Image style={{  width: "100px"}}  src="https://cdn0.iconfinder.com/data/icons/real-estate-4-8/66/189-512.png" />
                        </Col>
                        <Col >
                        <Image style={{  width: "100px"}}  src="https://image.flaticon.com/icons/png/512/2243/2243704.png" />
                        </Col>
                        <Col >
                        <Image style={{  width: "100px"}}  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/building-maintenance-2061267-1745776.png" />
                        </Col>
                    </Row>
                    </Container> */}
                 
                  
                  
                  
            </div>
        )
    }
}


export default HomePage