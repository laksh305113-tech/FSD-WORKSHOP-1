import {EventEmitter} from "node:events"

function createDomeElements (){
    const emitter=new EventEmitter();
    return {
        addEventListener(eventType,listener){
            emitter.on(eventType,listener);
        },
        removeEmitterListener(eventType,listener){
            emitter.off(eventType,listener);
        },
        dispatchEvent(event){
            emitter.emit(event.eventType,event);
        }
    }
}
const button=createDomeElements();
button.addEventListener('save',()=>{
    console.log("saving...");
})
button.dispatchEvent({
    eventType:"save"
});
