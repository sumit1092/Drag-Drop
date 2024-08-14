let images = document.getElementsByClassName("image");

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", (e)=>{
        console.log("dragging started");
        e.dataTransfer.setData("text", e.target.id);
        console.log(e.target.id);
    })

    images[i].addEventListener("dragend", (e)=>{
        console.log("dragging ended");
    })
}

let eventArray = ["dragover", "dragenter", "drop"];

for(let t of eventArray){

    let img = document.querySelectorAll(".image");

    for(c of img){
        c.addEventListener(t, (e)=>{
            e.preventDefault();

            if(t == "drop"){
                let id = e.dataTransfer.getData("text");
                let dragged = document.getElementById(id);
                let target = e.target; 
                console.log(e.target.id)

                if(target.className == "image" && target !== dragged){
                    let temp = target.innerHTML;    
                    target.innerHTML = dragged.innerHTML;
                    dragged.innerHTML = temp;

                    let tempID = target.id;
                    target.id = dragged.id;
                    dragged.id = tempID;
                }
            }
        })
    }
}

