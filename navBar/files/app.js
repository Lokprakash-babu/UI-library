let navContainer=document.querySelector('.navContainer');
let navItemsContainer=document.getElementsByClassName('navItemsContainer')[0]
let navItems=document.getElementsByClassName('navItems')[0];
let collapsed=true;

navContainer.addEventListener('click',function(event){
 
if(collapsed){       
  navItemsContainer.classList.add('navItemsContainerAnimation');
  navItemsContainer.classList.remove('shrinkContainer');
  setTimeout(()=>{
    navItems.style.visibility="visible";
  },500); 
  
}
else{
  navItemsContainer.classList.remove('navItemsContainerAnimation');
  navItemsContainer.classList.add('shrinkContainer');
    setTimeout(()=>{
    navItems.style.visibility="hidden";
  },500); 
}
});

navItemsContainer.addEventListener('animationend', function(){
  if(collapsed){
    navItemsContainer.style.width="99%";
    collapsed=false;
  }
  else{
    collapsed=true;
    navItemsContainer.style.width="0";
  }
});