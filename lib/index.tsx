import ReactDOM from "react-dom";
import * as React from "react";
import Icon from './icon';


const fn:React.MouseEventHandler<SVGElement> = (e)=>{
    console.log(e.target);
};

ReactDOM.render(<div>
    <Icon name="wechat"
          onClick={fn}
          onMouseEnter={()=>console.log('enter')}
          onMouseLeave={()=>console.log('leave')}
    />
</div>, document.querySelector('#root'));

