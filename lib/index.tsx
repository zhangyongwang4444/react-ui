import ReactDOM from "react-dom";
import * as React from "react";
import Icon from './icon/icon';


const fn:React.MouseEventHandler<SVGElement> = (e)=>{
    console.log(e.target);
};

ReactDOM.render(<div>
    <Icon name="wechat"
          className="qqqqq"
          onClick={fn}
          onMouseEnter={()=>console.log('enter')}
          onMouseLeave={()=>console.log('leave')}
          onTouchStart={()=>console.log('touchstart')}
    />
</div>, document.querySelector('#root'));

