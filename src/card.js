import React from "react";
import "./card.css";
import logo from "./logo1.png"
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "./bgpic.png";

const Card = () => {
  return (
    <>
      <div style={{ fontFamily:'Montserrat'}} className="bg-red-100" id="card"> 
        <div
          className="rounded-xl"
          style={{  }}
        >
          <div
            className="col-sm-4 pb-5 pt-5 mx-auto d-block col-xl-3 col-xxl-3 col-4  col-md-4 col-lg-3 "
            
          >
            <div
              className="card rounded-lg border-2 border-zinc-950 hovv bg-gradient-to-b from-zinc-800 via-indigo-700 to-zinc-800 "
              style={{ }}
            >
             
             <img
                src={logo}
                style={{ objectFit: "cover" }}
                className=" border border-zinc-950 p-3 mx-auto d-block "
                alt="..."
              />
              <div className="card-body bg-gradient-to-b text-cyan-50 text-teal-300">
                <h5 className="card-title">
                
                </h5>
                <p className="card-text pb-16 pt-16" style={{fontSize:'150%'}}>
                 No Events are Available right now. Check again later. 
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center pb-10 cpad">
        <button
          type="button"
          className="btn bg-gradient-to-b hover:from-indigo-900  hover:to-zinc-600 from-zinc-800 rounded-lg to-indigo-600 text-zinc-100 hover:text-zinc-100 hover:border-2 hover:border-zinc-100"
        >
          + Add Events
        </button>
      </div>
      </div>
    </>
  );
};

export default Card;
