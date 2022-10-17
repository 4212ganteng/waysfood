import { partner as partners } from "../dumy/Partner";
import { Link } from "react-router-dom";
const PopularResto = () => {
  return (
    <div className="container">
      <h3 className=" mt-5">Popular Restaurant</h3>
      <div className=" row ">
        {partners.map((partner, index) => (
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-3 " key={index}>
            <Link to={partner.uri}>
              <div className="w-100 h-100 p-3 rounded bg-white  d-flex align-items-center">
                <img src={partner.image} alt="" />
                <h5 className="ms-3 text-dark">{partner.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularResto;
