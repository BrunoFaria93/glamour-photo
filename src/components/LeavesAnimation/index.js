const LeavesAnimation = () => {
  return (
    <>
      <section className="leavesContainer relative w-full h-screen">
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <div className="leavesBox">
            <img src={require("../../assets/leaves1.png")} alt=""></img>
          </div>
          <div className="leavesBox">
            <img src={require("../../assets/leaves2.png")} alt=""></img>
          </div>
          <div className="leavesBox">
            <img src={require("../../assets/leaves3.png")} alt=""></img>
          </div>
          <div className="leavesBox">
            <img src={require("../../assets/leaves4.png")} alt=""></img>
          </div>
          <div className="leavesBox"> 
            <img src={require("../../assets/leaves1.png")} alt=""></img>
          </div>
          <div className="leavesBox">
            <img src={require("../../assets/leaves2.png")} alt=""></img>
          </div>
          <div className="leavesBox">
            <img src={require("../../assets/leaves3.png")} alt=""></img>
          </div>
          <div className="leavesBox">
            <img src={require("../../assets/leaves4.png")} alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeavesAnimation;
