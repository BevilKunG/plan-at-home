import React from 'react'

const PlanCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex flex-row justify-content-between">
                    <h3 className="">Plan</h3>
                    <div className="">
                        <h3>xx/xx/xxxx</h3>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="text-center">
                    <button className="btn btn-primary">Add Activity</button>
                </div>
            </div>
        </div>
    )
}

export default PlanCard