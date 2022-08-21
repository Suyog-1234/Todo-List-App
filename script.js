// getting all requird elememt

const inputbox=document.querySelector(".inputfield input");
const addbtn=document.querySelector(".inputfield button");
const todolist=document.querySelector(".todo-list");
const number=document.querySelector(".pendingnumber");
const clearall=document.querySelector(".footer button")

inputbox.onkeyup=()=>{
     let userdata=inputbox.value;
     if(userdata.trim() !=0){
         addbtn.classList.add("active");
      
     }else{
         addbtn.classList.remove("active")
     }
}
showtasks();


//after clicking on add button//
addbtn.onclick=()=>{
      let userdata=inputbox.value;
      let getLocalStorage=localStorage.getItem("new todo");
      if(getLocalStorage ==null){
        listarr=[];
      }else{
        listarr=JSON.parse(getLocalStorage)
      }
      listarr.push(userdata)
      localStorage.setItem("new todo", JSON.stringify(listarr) )
      showtasks();
}

function showtasks(){
   
   let getLocalStorage=localStorage.getItem("new todo"); 
   if(getLocalStorage ==null){
    listarr=[];
  }else{
    listarr=JSON.parse(getLocalStorage);
  }
    let newlitag=""
    listarr.forEach((Element,index) => {
            newlitag += `<li> ${Element}<span class="bhai" onclick="del(${index})"><i class="fa-solid fa-trash"></i></span></li>`
    });
    todolist.innerHTML=newlitag;
  function check(){
    if(listarr.length >0){
          clearall.classList.add("anotherclass")  
    }else{
           clearall.classList.remove("anotherclass")
    }
    }
   check()
  
  function change(){
      inputbox.value="";
      addbtn.classList.remove("active")
   }
  change();
  recount();
}

function del(index){
  let getLocalStorage=localStorage.getItem("new todo");
  listarr=JSON.parse(getLocalStorage)
  listarr.splice(index,1)
  localStorage.setItem("new todo",JSON.stringify(listarr));
  showtasks();
}

function recount(){
   let count =listarr.length
   number.textContent=`you have ${count} pending task`
}

clearall.onclick=()=>{
     listarr=[]; 
     localStorage.setItem("new todo", JSON.stringify(listarr) )
     showtasks();
}









