/*
// 使用cors进行跨域
const request = new XMLHttpRequest()
request.open('GET', 'http://192.168.2.100:8888/friends.json')
request.onreadystatechange = () =>{
    if (request.readyState ===4 && request.status === 200){
        console.log(request.response);
    }
}
request.send()*/

// 使用jsonp进行跨域
const script = document.createElement("script")
script.src = "http://192.168.2.100:8888/friends.js"
script.onload = () => {
    console.log(window.xxx);
}
document.body.appendChild(script)