let btn=document.querySelector('.btn')
let icon2=document.querySelector('.icon2')
let flex1=document.querySelector('.right-side');
let left=document.querySelector('.left-side')
// console.log(flex1)
btn.addEventListener('click',()=>{
   // console.log(flex1)
   flex1.classList.add('active')
   left.style.display='none'
   icon2.addEventListener('click',()=>{
      flex1.classList.remove('active')
      left.style.display='block'
   })
})