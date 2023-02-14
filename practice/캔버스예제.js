// 캔버스는 픽셀단위로 개별로 조절가능. html . css 불가능한 
// 동작을 캔버스에서 대체할 수 있다. 2d 중심
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
// ctx.fillRect(10,10,150,100); // xy 좌표 가로세로 길이 색채운
// ctx.strokeRect(190,40,100,100); // 빈박스 색 X
// ctx.clearRect(0,0,canvas.clientWidth,canvas.height); 해당영역지움

ctx.beginPath(); // 시작점을 셋팅
ctx.moveTo(canvas.width/2,canvas.height/2);
ctx.lineTo(canvas.width , 400);
ctx.stroke();

ctx.beginPath(); // 시작점을 셋팅
ctx.arc(75,75,50,0,Math.PI*2);
ctx.stroke();

ctx.beginPath(); // 시작점을 셋팅
ctx.arc(75,100,20,0,Math.PI);
ctx.stroke();

