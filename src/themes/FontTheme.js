 
const FontTheme = ({ color, setColor }) => (
  <div
    onClick={setColor}
    className="color__items"
    style={{ "--color-primary": color }}
  ></div>
); 

export default FontTheme