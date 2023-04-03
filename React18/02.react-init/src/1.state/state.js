import { useRef } from "react";
import { useState } from "react";
import { css, jsx } from "@emotion/react";
import { renderStyle } from "./state.style";
console.log(renderStyle() , '555');
function Sate() {
  console.log("组件渲染了");
  /**
   * state
   * 直接定义变量可以修改成功，但无法更新视图，无法触发 render
   *  - 需要使用 useState 中定义；
   *    -- 返回值是一个数组，第一个参数为返回的值，第二个是绑定的更新函数
   *        当state 是一个对象的时候，修改时是使用新对象替换原来的对象
   *    let [count, setCount] = useState(1)
   *    通过调用 setCount 去更新数据 setCount(count+1)
   *    问题：
   *           如果设置值时，在未改变时，再次更新，则无法设置成功，因为 setCount 为异步操作，
   *        使用上述方式无法拿到最新的值
   *    解决：
   *          setCount(preCount => preCount+1)
   *            需要通过回调函数的形式才能拿到最新的数据
   *   */

  /**
   * ref
   * 在 react 中想要获取真实 dom
   *  - 可以直接通过原生的命令获取dom，并修改
   *  - 可以通过 useRef() 的形式获取dom，返回值是一个对象，dom 在 current 属性上
   *  - 也可以直接创建一个变量 { current: null },dom 同样在 current 属性上
   *      useRef 和 const domRef = {current: null} 的区别
   *      第二种形式，没次渲染都会重新创建一个新对象，可以通过对比内存地址发现，useRef 的形式更优
   *   */

  // let count = 0;
  let [count, setCount] = useState(1);
  let [user, setUser] = useState({
    name: "张三",
    age: 18,
  });
  const handleAdd = () => {
    /* setTimeout(() => {
      setCount(count+1)
      console.log(count);
    }, 1000); */

    setTimeout(() => {
      setCount((preCount) => preCount + 1);
    }, 1000);
  };
  const handleSubtract = () => {
    console.log("start");
    setCount((preCount) => {
      console.log("异步的");
      return preCount - 1;
    });
    setCount((preCount) => {
      console.log("异步的");
      return preCount - 1;
    });
    console.log("end");
    console.log(count);
    console.log(headRef.current, "headRef");
    console.log(domRef.current, "headRef");
  };
  const changePerson = () => {
    setUser({
      name: "李四",
    });
  };

  const headRef = useRef();

  // 直接定义对象
  const domRef = { current: null };
  return (
    // <Global styles={renderStyle()}>
    // className="Sate"
      <div  css={css({
        '.Sate': {
          height: '300px',
          width: '300px',
          margin: '100px auto',
          textAlign: 'center',
          backgroundColor: '#ccc',
          padding: '20px',
          borderrRadius: '10px',
          [`& h1`]: {
            fontSize: '40px'
          },
          [`& button`]: {
            fontSize: '20px',
            marginRight: '10px'
          },
        }
      })}>
        <h1 ref={headRef}>{count}</h1>
        <p>
          {user.name} ----- {user.age}
        </p>
        <button onClick={handleAdd}>+</button>
        <button ref={domRef} onClick={handleSubtract}>
          -
        </button>
        <br />
        <br />
        <button onClick={changePerson}>changePerson</button>
      </div>
    // </Global>
  );
}

export default Sate;
