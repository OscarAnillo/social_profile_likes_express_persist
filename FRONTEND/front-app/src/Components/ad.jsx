export const Ad = () => {
  return (
    <div className="ad-div">
      <div className="ad-div-container">
        <div className="ad-div-row">
          <h3>Sponsored</h3>
          <p>Ad</p>
        </div>
        <img
          src="https://www.narscosmetics.co.uk/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/en_GB/dwe51cdd27/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Dressed_to_Kill_Satin_GLBL_B_square.jpg?sw=856&sh=750&sm=fit"
          alt=""
          height={160}
        />
        <div className="ad-div-row">
          <h3>Best Lipstick</h3>
          <button className="ad-btn">Buy</button>
        </div>
        <p className="ad-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum
          pariatur omnis ea dolorum architecto corrupti molestias voluptatibus
          qui totam.
        </p>
      </div>
    </div>
  );
};
