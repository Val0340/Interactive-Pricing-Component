let chnge = document.querySelector('#changer');
let rnge = document.querySelector('#rang');
let chck = document.querySelector('input[type="checkbox"]');
let togger = document.getElementById('tog');
let flag = true;
let btn = document.querySelector('button');


rnge.oninput=(()=>{
    let value = rnge.value;
     chnge.innerText = value;
});


 chck.onchange=(()=>{
    let togval = rnge.value;
    if (flag){
      togger.innerText= '/year';
      chnge.innerText=togval*11.5;
    }
    else{
        togger.innerText= "/month";
      chnge.innerText=togval;
    }
    flag= !flag;
 });

btn.onsubmit=((e)=>{
    e.preventDefault;
})
