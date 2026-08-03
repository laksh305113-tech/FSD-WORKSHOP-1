console.log("THIS IS THE STARTING POINT OF MY CODE");
process.nextTick(()=>{
    console.log("this is process.nexttick code");
})
setTimeout(() => {
    console.log("this is the first timeout function");
}, 2000);
console.log("this is the end point of my function");
