import { partner as partners } from "../dumy/Partner";
const PopularResto = () => {
  return (
    <div>
      <h3 className="container mt-5">Popular Restaurant</h3>
      <div className="container d-flex gap-3">
        {partners.map((partner, index) => (
          <div
            className="shadow d-flex align-items-center justify-content-start gap-2 ps-3 mt-3"
            style={{ width: "15rem", height: "95px" }}
            key={index}
          >
            <img src={partner.image} alt="" />
            <h5>{partner.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularResto;
