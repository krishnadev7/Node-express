

function clown(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('emoji');
        },3000);
    })
}

async function msg(){
    let data = await clown();
    console.log("Msg: ",data);
}

msg();