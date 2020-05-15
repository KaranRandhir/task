import React from 'react'
import {Carousel} from 'react-bootstrap'
import "./carousel.css"
import Slider from "react-slick";
import CarouselCard from "./CarouselCard"
import service from "../assets/quote.png"
import customer from "../assets/customer-support.png"
import custom from "../assets/custom-clearance.png"
import air from "../assets/air-freight.png"
import sea from "../assets/sea-freight.png"
import shipment from "../assets/shipment.png"
import truck from "../assets/inland-transport.png"
import account from "../assets/account.png"
import insurance from "../assets/insurance.png"
const CRL = () => {
    
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background:"steelblue"  }}
            onClick={onClick}
          >
            
            </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "steelblue" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>
        };
        const settingsSmall = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:<SampleNextArrow/>,
          prevArrow:<SamplePrevArrow/>
          };
      
      return (
        <div>
        <div className="bigScreen">
        <Slider {...settings}>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title="Custom Clearance"img={custom}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard img={account} title="Accounting/Finance"/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title="Insurance" img={insurance}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Air Freight"img={air}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Ship Frieght"img={sea}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Shipping Managment"img={shipment}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Inland Transport"img={truck}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Customer Support"img={customer}/>
            </div>
          </div>
          
        </Slider>
        </div>
        <div className="smallScreen">
        <Slider {...settingsSmall}>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title="Custom Clearance"img={custom}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard img={account} title="Accounting/Finance"/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title="Insurance" img={insurance}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Air Freight"img={air}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Ship Frieght"img={sea}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Shipping Managment"img={shipment}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Inland Transport"img={truck}/>
            </div>
          </div>
          <div >
            <div style={{padding:"2vh"}}>
           <CarouselCard title ="Customer Support"img={customer}/>
            </div>
          </div>
          
        </Slider>
        </div>
        </div>
        
        
      );
            

}

export default CRL ;