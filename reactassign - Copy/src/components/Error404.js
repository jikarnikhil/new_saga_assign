import React from 'react'

const Error404 = ({history}) => {
    return (
        <div>
            <h2>404 address not Found</h2>
            <p>Redirecting to 
                <span style={{color: "red", cursor:"pointer"}} onClick={()=> history.push('/')}> Login Page</span>
            </p>
        </div>
    )
}

export default Error404
