//Định nghĩa hàm thay đổi màu cho radio button
function checkRadio(){
  let radioBtn1 = document.getElementById('smooth-radio');
  let radioBtn2 = document.getElementById('sharp-radio');
  let smoothLab = document.getElementById('smooth-lab');  
  let sharpLab = document.getElementById('sharp-lab');  
  if(radioBtn1.checked){    
    smoothLab.style = "background-color: #6b6eff";
  }else{    
    smoothLab.style = "background-color: transparent";
  }
  if(radioBtn2.checked){
    sharpLab.style = "background-color: #6b6eff";
  }else{    
    sharpLab.style = "background-color: transparent";
  }
}

//Định nghĩa hàm download ảnh xuống máy tíh
function download_image(canvasId){
  let canvas = document.getElementById(canvasId);
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  let link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}
checkRadio();