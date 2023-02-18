import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title : {props.melumat} </h5>
                    <p className="card-text">Id : {props.id}</p>
                </div>
            </div>
        </div>
    )
}

export default Todo