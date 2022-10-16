import React from "react";

const KompBtn = ({ name, a, style }) => {
  return (
    <div>
      <button
        className={a ? a : "w-100 py-2 px-5 mt-3 rounded text-white"}
        style={style ? style : defaultStyle.colorPrimary}
      >
        {name}
      </button>
    </div>
  );
};

export default KompBtn;

const defaultStyle = {
  colorPrimary: {
    backgroundColor: "#433434",
  },
};
