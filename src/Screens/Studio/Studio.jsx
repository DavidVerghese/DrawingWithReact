import Canvas from '../../Components/Canvas/Canvas';

import Tools from '../../Components/Tools/Tools';
import Header from '../../Components/Header/Header';

function Studio() {
  return (<><Header studio={true} />
    <Canvas/>
      <Tools/> </>)
}
export default Studio;