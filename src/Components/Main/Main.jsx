<<<<<<< HEAD
import React,{useEffect, useState} from 'react';
=======
import React from 'react';
import { useState } from 'react';
>>>>>>> a43a697d35cfd588471a21f7cb22ce92cb04e7ef
import './main.css';
import axios from 'axios';
import img1 from '../../Assets/image1.jpg';
import img2 from '../../Assets/image2.jpg';
import img3 from '../../Assets/image3.jpg';
import img4 from '../../Assets/image4.jpg';
import img5 from '../../Assets/image5.jpg';
import img6 from '../../Assets/image6.jpg';
import img7 from '../../Assets/image7.jpg';
import img8 from '../../Assets/image8.jpg';
import img9 from '../../Assets/image9.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";



import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    roomTitle: "Deluxe Suite",
    location: "First Floor",
    grade: "Luxury",
    fee: 250,
    description: "A spacious suite featuring modern amenities and a panoramic city view."
  },
  {
    id: 2,
    imgSrc: img2,
    roomTitle: "Executive Room",
    location: "Second Floor",
    grade: "Premium",
    fee: 180,
    description: "A well-appointed room ideal for business travelers with high-speed WiFi."
  },
  {
    id: 3,
    imgSrc: img3,
    roomTitle: "Standard Room",
    location: "Third Floor",
    grade: "Standard",
    fee: 120,
    description: "A comfortable room with all the basic amenities for a pleasant stay."
  },
  {
    id: 4,
    imgSrc: img8,
    roomTitle: "Family Room",
    location: "Ground Floor",
    grade: "Family",
    fee: 200,
    description: "A large room perfect for families, offering extra space and kid-friendly facilities."
  },
  {
    id: 5,
    imgSrc: img5,
    roomTitle: "Single Room",
    location: "Fourth Floor",
    grade: "Economy",
    fee: 90,
    description: "An economical option ideal for solo travelers with all essential amenities."
  },
  {
    id: 6,
    imgSrc: img6,
    roomTitle: "King Suite",
    location: "Fifth Floor",
    grade: "Luxury",
    fee: 300,
    description: "An opulent suite featuring a king-size bed, luxury bath, and a private balcony."
  },
  {
    id: 7,
    imgSrc: img7,
    roomTitle: "Junior Suite",
    location: "Second Floor",
    grade: "Premium",
    fee: 210,
    description: "A modern suite offering extra living space and contemporary design."
  },
  {
    id: 8,
    imgSrc: img4,
    roomTitle: "VIP Room",
    location: "Penthouse",
    grade: "Exclusive",
    fee: 450,
    description: "An exclusive room with premium services, a private lounge, and stunning views."
  },
  {
    id: 9,
    imgSrc: img9,
    roomTitle: "Budget Room",
    location: "Third Floor",
    grade: "Economy",
    fee: 75,
    description: "A cost-effective room with essential comforts and a cozy ambiance."
  },
  
];



const Main = () => {
<<<<<<< HEAD



  useEffect(() => {
      Aos.init({duration: 2000})
    }, [])

  // States for modal, room selection, dates, and fee calculation
  const [showModal, setShowModal] = useState(false);
  const [selectedRoomFee, setSelectedRoomFee] = useState(0);
  const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalFee, setTotalFee] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to calculate total fee based on days selected
  const calculateFee = (start, end, feePerNight) => {
    const startDay = new Date(start);
    const endDay = new Date(end);
    const diffTime = endDay - startDay;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      setTotalFee(diffDays * feePerNight);
    } else {
      setTotalFee(0);
    }
  };

  // Trigger modal on BOOK click and set the room fee and title
  const handleBookClick = (fee, title) => {
    setSelectedRoomFee(fee);
    setSelectedRoomTitle(title);
    setShowModal(true);
    // Reset dates and fee
    setStartDate('');
    setEndDate('');
    setTotalFee(0);
  };

  // Handle start date change and recalculate fee if possible
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    if (endDate) {
      calculateFee(newStartDate, endDate, selectedRoomFee);
    }
  };

  // Handle end date change and recalculate fee if possible
  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    if (startDate) {
      calculateFee(startDate, newEndDate, selectedRoomFee);
    }
  };

  // Function to handle booking confirmation
  const handleBookingConfirm = () => {
    console.log("Booking confirmed!", { 
        name, 
        email, 
        selectedRoomTitle, 
        startDate, 
        endDate, 
        totalFee 
    });

    // Close the modal after logging
    setShowModal(false);
};


  
   
=======
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [availableRoomType, setAvailableRoomType] = useState([]);
  const [availableRooms, setAvailableRooms] = useState([]); 
  const [clickedRoomPosition, setClickedRoomPosition] = useState(null);

  const fetchAvailableRooms = async(roomTitle, event) => {
    try{
      let roomType = "";
      if (roomTitle.toLowerCase().includes("single")) {
        roomType = "Single";
      } else if (roomTitle.toLowerCase().includes("double")) {
        roomType = "Double";
      } else if (roomTitle.toLowerCase().includes("suite")) {
        roomType = "Suite";
      } else if (roomTitle.toLowerCase().includes("deluxe")) {
        roomType = "Deluxe";
      }

      const response = await axios.get(`http://localhost:3000/rooms/${roomType}`);
      setAvailableRooms(response.data);
      setAvailableRoomType(roomType); // Set the type of available rooms

       // Capture the position of the clicked room
      const rect = event.target.closest('.singleRoom').getBoundingClientRect();
      setClickedRoomPosition(rect);
      setSelectedRoom(roomTitle); // Store selected room's info
    } 
    catch(error){
      console.error("Error fetching available rooms:", error);
      setAvailableRooms([]); // Reset on error
    }
  };

>>>>>>> a43a697d35cfd588471a21f7cb22ce92cb04e7ef

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Popular Rooms
        </h3>
      </div>

      <div className="secContent grid">

      
        {
          Data.map(({id, imgSrc, roomTitle, location, grade, fee, description}) => {
            return(
              <div key={id} data-aos="fade-up" className="singleRoom">
              
                <div className="imageDiv">
                  <img src={imgSrc} alt={roomTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className="roomTitle">{roomTitle}</h4>
                  <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                  </span>

                  <div className="fee flex">
                    <div className="grade">
                      <span>{grade}</span>
                    </div>
                    <div className="price">
                      <h5>{'$' + fee}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

<<<<<<< HEAD
                  <button className='btn flex' onClick={() => handleBookClick(fee, roomTitle)} >
                    BOOK <HiOutlineClipboardCheck className='icon'/>
=======
                  <button className='btn flex' onClick={(event) => fetchAvailableRooms(roomTitle, event)}>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
>>>>>>> a43a697d35cfd588471a21f7cb22ce92cb04e7ef

                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

<<<<<<< HEAD
      {/* Modal Popup Section */}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent" data-aos="fade-up">
            <h3>Booking Form</h3>
            {/* Display the room type and one day price */}
            <div className="roomDetails">
              <p><strong>Room Type:</strong> {selectedRoomTitle}</p>
              <p><strong>One Day Price:</strong> ${selectedRoomFee}</p>
            </div>
            <form>
            <div className="formGroup">
                <label>Name:</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required 
                />
              </div>

              <div className="formGroup">
                <label>Email:</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required 
                />
              </div>
              <div className="formGroup">
                <label>From Date:</label>
                <input 
                  type="date" 
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>
              <div className="formGroup">
                <label>To Date:</label>
                <input 
                  type="date" 
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </div>
              <div className="formGroup">
                <p><strong>Total Fee:</strong> ${totalFee}</p>
              </div>
              <button 
                type="button" 
                className="btn1"
                onClick={handleBookingConfirm}
              >
                BOOK NOW AND PAY AT THE HOTEL
              </button>
            </form>
            <button className="closeBtn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
=======
      {/* Display available rooms */}
      {availableRooms.length > 0 && (
        <div className="availableRooms">
          <h3>Available {availableRoomType} Rooms</h3>
          <ul>
            {availableRooms.map((room, index) => (
              <li key={index}>
                Room {room.room_number} - ${room.price_per_night} - {room.status}
              </li>
            ))}
          </ul>
>>>>>>> a43a697d35cfd588471a21f7cb22ce92cb04e7ef
        </div>
      )}

    </section>
  )
}

export default Main
