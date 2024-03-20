import React, { useState, useEffect } from 'react';

function App() {
    const [totalCars, setTotalCars] = useState(0);

    useEffect(() => {
        fetchTotalCars();
    }, []);

    const fetchTotalCars = async () => {
        try {
            const response = await fetch('http://localhost:3001/AllCarz'); // เรียกใช้ API '/AllCarz' ที่พอร์ต 3001
            
            const data = await response.json();
            if (data && data.length > 0) {
                setTotalCars(data[0].total); // เซ็ตจำนวนรถทั้งหมดที่ได้รับจาก API
            }
        } catch (error) {
            console.error('Error fetching total cars:', error);
        }
    };

    return (
        <div>
            <h1>Total Cars: {totalCars}</h1>
        </div>
    );
}

export default App;
