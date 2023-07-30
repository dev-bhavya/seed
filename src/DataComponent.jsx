import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you installed axios

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const apiKey = 'T4qV9J';
            const response = await axios.get('https://conference.cyclic.app', {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div> // Replace with the appropriate data fields from your API
            ))}
        </div>
    );
};

export default DataComponent;


