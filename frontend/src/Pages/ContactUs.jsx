import React,{useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import './CSS/ContactUs.css'
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css';   
//import second from 'first'

const ContactUs = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


  return (
    <div className='contact'>       
        <div className="contact-container"> 
        <h3 >GET IN TOUCH WITH US</h3> 
        <span  className='sp'>YOU ARE MORE THAN WELCOME TO LEAVE YOUR CONTACT INFO AND WE WILL BE IN TOUCH SHORTLY</span>
            <div className="contact-fields">
                <div className="conatct-left">
                    <p>Your Name</p>
                    <input type="text" placeholder='' required />
                    <p>Adress</p>
                    <input type="text" placeholder='' />
                    <p>Contact No.</p>
                    <input type="text" placeholder=' ' />
                    <p>Email Adress</p>
                    <input type="email" placeholder='' />
                    <p>City</p>
                    <Dropdown 
                    value={selectedCity} 
                    onChange={(e) => setSelectedCity(e.value)} 
                    options={cities} 
                    optionLabel="name" 
                    placeholder="" 
                    style={{ backgroundColor: 'white' ,
                        borderRadius: '8px', 
                        border: '1px solid #b2afaf'
                    }}
                    
                    // className="w-full md:w-14rem" 
                />
                </div>
                <div className="contact-right">
                    <p>Message</p>
                    <input type="text" placeholder='' />
                </div>
            </div>

            <button>Submit</button>

        </div>
    </div>
  )
}

export default ContactUs