
const BackGrountTheme = ({ color, setBackGroundColor }) => (
  <div
    onClick={setBackGroundColor}
    className="background__color"
    // style={{"--color-white": color}}
  ></div>
);

export default BackGrountTheme