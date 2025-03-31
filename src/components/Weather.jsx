import { useState } from 'react';

export default function Weather() {
    const [city,setCity] = useState("manchester");
    const [condition,setCondition] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();        

        try {
            const response = await fetch(`https://wttr.in/${city}?format=j1`);
            const data = await response.json();
            setCondition({...data});
            
        } catch (error) {
            console.log(error);
            
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            <h2>Weather Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="istanbul">Istanbul</option>
                    <option value="moscow">Moscow</option>
                    <option value="berlin">Berlin</option>
                    <option value="paris">Paris</option>
                    <option value="baku">Baku</option>
                    <option value="roma">Roma</option>
                    <option value="milan">Milan</option>
                    <option value="london">London</option>
                    <option value="munich">Munich</option>
                    <option value="newyork">New York</option>
                    <option value="california">California</option>
                </select>
                <button>Submit</button>
            </form>
            {condition && (
                <div>
                    <div>
                        <h4>Country: {condition.nearest_area[0].country[0].value}</h4>
                    </div>
                    <div>
                        <h4>City: {condition.nearest_area[0].areaName[0].value}</h4>
                    </div>
                    <div>
                        <h4>Weather: {condition.current_condition[0].FeelsLikeC} C°</h4>
                    </div>
                    <div>
                        <h4>Weather Description: {condition.current_condition[0].weatherDesc[0].value}</h4>
                    </div>
                </div>
            )}
        </div>
    );
}