onload = function(){

    let Line_One = document.getElementById('content-Line-One');
    let Line_Two = document.getElementById('content-Line-Two');
    let Line_Three = document.getElementById('content-Line-Three');
    let Line_Four = document.getElementById('content-Line-Four');
    
    Line_One.style.transition='1s'
    // Line_One.style.transform ='scale(0)'
    Line_One.style.opacity ='0.1';
    Line_Two.style.transition='2s'
    Line_Two.style.transform ='scale(0)'
    Line_Two.style.opacity ='0.1';
    Line_Three.style.transition='3s'
    Line_Three.style.transform ='scale(0)'
    Line_Three.style.opacity ='0.1';
    Line_Four.style.transition='4s'
    Line_Four.style.transform ='scale(0)'
    Line_Four.style.opacity ='0.1';
    
    
    this.window.onscroll = function(){
        if(scrollY >= 1){
            Line_One.style.opacity ='1';
            Line_One.style.transform ='scale(1)'
            Line_Two.style.opacity ='1';
            Line_Two.style.transform ='scale(1)'
            Line_Three.style.opacity ='1';
            Line_Three.style.transform ='scale(1)'
            Line_Four.style.opacity ='1';
            Line_Four.style.transform ='scale(1)'
            
        }
        else if(scrollY < 1){
            Line_One.style.opacity ='0.1';
            // Line_One.style.transform ='scale(0)'
            Line_Two.style.opacity ='0.1';
            Line_Two.style.transform ='scale(0)'
            Line_Three.style.opacity ='0.1';
            Line_Three.style.transform ='scale(0)'
            Line_Four.style.opacity ='0.1';
            Line_Four.style.transform ='scale(0)'
        }
    }
    let btn = document.getElementById('btn');
    let Plus = document.getElementById('pluss');
    let minus = document.getElementById('minus');
    
    
    btn.onclick = function(){
        Plus.classList.toggle('none');
        minus.classList.toggle('none');
        minus.classList.toggle('block');
    
    }
    }
    