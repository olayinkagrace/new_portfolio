const BallCanvas = ({ icon, name }) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p className="text-center py-1">{name}</p>
    </div>
  );
};

export default BallCanvas;