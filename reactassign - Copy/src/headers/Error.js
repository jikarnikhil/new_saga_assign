import React, { useState, useEffect } from "react";
import axios from "axios";

const Error = () => {
    const [data, setData] = useState({
        name: "",
        lname: "",
        profile: "",
      });

      const handleChange=(e)=>{
            
            const {name, value} = e.target;
            setData({...data, [name]:value})
      }

      const handSubmit=(e)=>{
                e.preventDefault();
                axios
                  .post("http://localhost:3005/mydt", {
                    name: data.name,
                    lname: data.lname,
                    profile: data.profile
                  })
                  .then((res) => {
                    console.log(res.data);
                  });
      }
      
    return (
        <div>
            <form onSubmit={handSubmit}>
            <div>
            <input
                type="text"
                placeholder="Enter Project Name"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Estimate duration"
                name="lname"
                value={data.lname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Estimate duration"
                name="profile"
                value={data.profile}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Error
