let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/* 向屏幕前的你道声好，我是一名前端新人
 * 我会在页面上画一个八卦图
 * 先生成一个div
 **/
#div1{
  border:1px solid ;
  width:200px;
  height:200px;
}
/* 接下来开始将 div 变成一个八卦图
 * 把 div 由方变圆
 **/
#div1{
  border-radius:50%;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴阳形成的
 * 有一黑一白两种颜色
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 将黑白半圆变成双鱼*/
#div1::before {
  width: 100px;
  height: 100px;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  background: #000000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
  width: 100px;
  height: 100px;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ""
let n = 0
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车，替换成<br>标签拼接到string2上
      string2 += "<br>"
      //  如果有空格，就替换成HTML空格转义符
    } else if (string[n] === " ") {
      string2 += "&nbsp"
    } else {
      //如果不是回车。就拼接到到string2上
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scroll(0, 99999)
    html.scrollTo(0, 99999)
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 10)
}
step()