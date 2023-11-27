import { profiles, addProfile, addPoints, ids, myName, myid, mainid, mainPeer, isGameStarted, newSong, isGameEnded } from "./store.js";
import { get } from 'svelte/store';
import {Peer} from 'peerjs'
var peer = new Peer();
var conn
let link



export function sendProfile() {

    peer.on("open",(id)=>{
        myid.set(id)
    })

    if (!get(mainPeer)) {
        myName.set("sanya")
    }
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

function receiveProfile(id, name) {
    ids.update(ids => [...ids, id]);
    addProfile(id, name)
    
}

function sendToMain(data) {
  conn = peer.connect(get(mainid))
  conn.on("open",() => {
    console.log('sent', data, 'to main id ', get(mainid))
    conn.send(data)
  })
}

function sendToAll(data) {
    const currentIDs = get(ids)
    currentIDs.forEach(id => {
        if (id !== get(myid)) {
            conn = peer.connect(id)
            conn.on("open",() => {
                conn.send(data)
            })
        }
    })
}

 

export function startReceivingMain() {
    
    peer.on("connection",(conn)=>{ 
        console.log('BEJKLADFS;')
    conn.on("data",(data)=>{
      //for main receiving profiles
      console.log("received", data)
      if (typeof data === 'object' && data !== null && "name" in data && "id" in data) {
        receiveProfile(data.id, data.name)
      }

    })
  })

}

function startReceivingPeer() {
    peer.on("connection",(conn)=>{ 
    conn.on("data",(data)=>{
      if (data === "start_game") {
          isGameStarted.set(true)
      }

      //for main receiving profiles
      if (typeof data === 'object' && data !== null && "name" in data && "id" in data) {
        receiveProfile(data.id, data.name)
      }

      if(get(mainPeer) && get(isGameStarted)) {
        sendToAll(data)
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

    
  



