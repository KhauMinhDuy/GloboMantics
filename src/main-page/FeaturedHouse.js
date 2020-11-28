import React from 'react';
import House from "./House";

const FeaturedHouse = (props) => {
    if (props.house) {
        return (
            <div>
                <div className="row featuredHouse">
                    <div className="col-md-12 text-center">
                        Featured House
                    </div>
                </div>
                <House house={props.house}/>
            </div>
        );
    }
    return (<div>No featured house at this time</div>)
};

export default FeaturedHouse;