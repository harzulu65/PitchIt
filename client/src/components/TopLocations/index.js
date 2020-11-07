import React from "react";

const TopLocations = () => {
    return (
        <>
            <div id="title" style={{marginLeft: "10%", marginTop: "16%", marginRight: "10%"}}>
                <h3>Top Locations</h3>
                <hr />
            </div>
            <div style={{ marginLeft: "10%", marginRight: "10%"}} className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopLocations;