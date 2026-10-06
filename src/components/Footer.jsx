function Footer() {

    const hour = new Date().getHours();
    const openHour = 7;
    const closeHour = 22;
    const isOpen = (hour >= openHour) && (hour <= closeHour);

    return (
        <div className="bottom">
            {
                isOpen ? <h1>Opening Now</h1>
                        : <h1>Our Open In {openHour}:00AM to {closeHour}:00PM</h1>
            }
        </div>
    )
}
export default Footer
import React from 'react'
