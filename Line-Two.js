onload = function(){

    let Line_Two = document.getElementById('content-Line-Two');
    Line_Two.style.background ='red'    
    Line_Two.style.transition='1s'
    Line_Two.style.transform ='scale(0)'
    Line_Two.style.opacity ='0.1';
    
    this.window.onscroll = function(){
        if(scrollY >= 340){
            Line_Two.style.opacity ='1';
            Line_Two.style.transform ='scale(1)'
            
        }
        else if(scrollY < 288){
            Line_Two.style.opacity ='0.1';
            Line_Two.style.transform ='scale(0)'
        }
    }}