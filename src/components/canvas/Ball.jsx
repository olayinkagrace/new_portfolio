


const BallCanvas = ({ icon, name }) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default BallCanvas;