onload = function (){
   
let dark = this.document.getElementById('dark');
let header_dark = this.document.querySelector('header');
let main_dark = document.querySelector('main');
let nav_dark  = document.querySelector('nav');
let footer_dark  = document.querySelector('footer');
let gallry_dark = this.document.getElementById('gallry-dark');
let h2_dark = this.document.getElementsByClassName('H2-dark')
dark.addEventListener('click', function(){
    header_dark.style.background = '#080808';
    main_dark.style.background = '#080808';
    nav_dark.style.background = '#080808';
    gallry_dark.style.background = "#080808 ";
    footer_dark.style.background = '#080808';
    h2_dark[0].style.color ='#FFF';
    h2_dark[1].style.color ='#FFF';
    h2_dark[2].style.color ='#FFF';
    h2_dark[3].style.color ='#FFF';
    h2_dark[4].style.color ='#FFF';
    h2_dark[5].style.color ='#FFF';
    h2_dark[6].style.color ='#FFF';
    h2_dark[7].style.color ='#FFF';
    h2_dark[8].style.color ='#FFF';
    h2_dark[9].style.color ='#FFF';
    h2_dark[10].style.color ='#FFF';
    h2_dark[11].style.color ='#FFF';
    // anchor_dark.style.color ='#FFF';
});
dark.addEventListener('dblclick', function(){
    header_dark.style.background = '#fff';
    main_dark.style.background = '#fff';
    nav_dark.style.background = '#fff';
    section_one.style.background = "#FFF"
    footer_dark.style.background = '#fff';
});

    
}  