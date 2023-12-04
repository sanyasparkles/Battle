import { profiles, addProfile, addPoints, myName, myid, mainid, mainPeer, isGameStarted, newSong, isGameEnded, nameSent } from "./store.js";
import { get } from 'svelte/store';
import {Peer} from 'peerjs'
var peer;
var conn
let link

export function createPeer() {
  peer = new Peer()
  peer.on("open",(id)=>{
    myid.set(id)
    console.log(get(myid))
})
}

export async function sendProfile() {
  nameSent.set(true)
   createPeer()

   await until(_ => get(myid) != "");
      startReceivingMain()
    
    
    

    console.log("HERE")

    const data = {
        name: get(myName),
        id: get(myid)
      };
    if (get(mainPeer)) {
       addProfile(data.id, data.name)
    }
    else {
        sendToMain(data)
    }
}

//main only
function receiveProfile(id, name) {
    addProfile(id, name)
    if (get(mainPeer)) {
      sendToOne(id, get(profiles))
    }
    
}

function receiveAllProfiles(data) {
  profiles.set(data)
  sendToAll(get(profiles))
}



function sendToOne(id, data) {
  conn = peer.connect(id)
  conn.on("open",() => {
    console.log('sent', data, 'to ', id)
    conn.send(data)
  })
}

function sendToMain(data) {
  conn = peer.connect(get(mainid))
  conn.on("open",() => {
    console.log('sent', data, 'to main id ', get(mainid))
    conn.send(data)
  })
}

function sendToAll(data) {
  Object.keys(profiles).forEach(id => {
    if (id !== get(myid)) {
      conn = peer.connect(id)
      conn.on("open",() => {
          conn.send(data)
          console.log('sent', data, 'to ', id)
      })
  }
  });

}

 

export function startReceivingMain() {
   
    peer.on("connection",(conn)=>{ 
        
    conn.on("data",(data)=>{
      
      console.log("received", data)

      if (typeof data === 'object' && data !== null && "name" in data && "id" in data && "points" in data) {
        receiveAllProfiles()
      }
      else if (typeof data === 'object' && data !== null && "name" in data && "id" in data) {
        receiveProfile(data.id, data.name)
      }

    })
  })

}




export function startGame() {
    isGameStarted.set(true);
    if (get(mainPeer)) {
        sendToAll(get(profiles))
        sendToAll("start_game")
    }
}

    
  






function until(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}