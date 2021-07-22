import React from "react";
import "./App.css";
const Vac = (props) => {
  const data = props.slots;
  return (
    <div className="main">
      {data.length !== 0? (
        data.map((elem, index) => {
          const {
            name,
            address,
            district_name,
            pincode,
            state_name,
            vaccine,
            slots,
            min_age_limit,
            available_capacity,
          } = elem;
          return (
            <div className="box" key={index}>
              <h1>{name}</h1>
              <p className="add">
                {address}, dist:{district_name}, {state_name}, {pincode}
              </p>
              <div className="vacnum">
                <p title="vaccine" className="vacname">
                  💉{vaccine}
                </p>
                {available_capacity > 0 ? <p className="age " style={{backgroundColor:"rgb(20, 129, 84)",border:"2px solid rgb(20, 129, 84)",color:"white"}}>{available_capacity}</p>:<p className="age qn">{available_capacity}</p>}
                {"min_age_limit" in elem && min_age_limit === 18 ? (
                  <p className="age age_num">18+</p>
                ) : null}
                {"min_age_limit" in elem && min_age_limit === 45 ? (
                  <p className="age age_num">45+</p>
                ) : null}
              </div>

              <div className="slots">
                {slots.length !== 0
                  ? slots.map((elem, index) => {
                      return <div className="slot">{slots[index]}</div>;
                    })
                  : null}
              </div>
            </div>
          );
        })
      ) : (
        <div className="box2">
          <h1 style={{ color: "black" }}>
            No Sloats are avalible for this date
          </h1>
        </div>
      )}
    </div>
  );
};

export default Vac;
