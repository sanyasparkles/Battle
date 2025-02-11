import { currTrack, currStartTime, profiles, addProfile, addPoints, myName, myid, mainid, mainPeer, isGameStarted, newSong, isGameEnded, nameSent } from "./store.js";
import { tracks } from "../js/tracks.js";
import { hearts } from "../js/hearts.js";
import { get } from 'svelte/store';
import { tick } from 'svelte';
import {Peer} from 'peerjs'

// import {} from '../components/AudioPlayer.svelte'

var peer;
var conn
var mainconn
let link

var hivemind = []

//profiles
export function createPeer() {
  peer = new Peer()
  peer.on("open",(id)=>{
    myid.set(id)
    // console.log(get(myid))
})
}


export async function sendProfile() {
  nameSent.set(true)
   createPeer()

   await until(_ => get(myid) != "");
      startReceivingMain()
    
    let heart1 = getRandomHeart()
    const data = {
        name: get(myName),
        id: get(myid),
        heart: heart1
      };
    if (get(mainPeer)) {
       addProfile(data.id, data.name, data.heart)
    }
    else {

      conn = peer.connect(get(mainid))
      conn.on("open",() => {
        mainconn = conn
        // console.log('sent', data, 'to main id ', get(mainid))
        conn.send(data)
      }) 
    }
}


//sending
export function sendToAll(data) {

  if (get(mainPeer)) {
    // console.log('sent', data, 'to all')
    hivemind.forEach((conn) => {
      conn.send(data)
    });
    
  }  

  else { 

    // mainconn.on("open",() => {
      mainconn.send(data)
      // console.log('sent', data, 'to main')
  // })
  }
}


//receiving
function receiveProfile(data) {
    addProfile(data.id, data.name, data.heart)
    conn = null
    conn = peer.connect(data.id)
    conn.on("open",() => {
      hivemind.push(conn)
      // console.log("hivemind ", hivemind)
      if (get(mainPeer)) {
        sendToAll(get(profiles))
      }
    }) 

    
}

function receiveAllProfiles(data) {
  // console.log(data)
  profiles.set(Object.assign(data))
  if (get(mainPeer)) {
    sendToAll(get(profiles))
  }
}

function receiveStartGame() {
  isGameStarted.set(true)
}

export function receivePointWinner(data) {
  
  //FIX BROKEN POINTS CAN'T UPDAATE ....ask chat perhaps????
  addPoints(data.winner)
  
  if (get(mainPeer)) {
    sendToAll(data)
    getNewSong()
  }
}

export function receiveSong(data) {
  currTrack.set({...data.track})
  currStartTime.set(data.startTime)
  // console.log("POOOOOPPPPP")
  // console.log(get(currTrack));
  newSong.set(false)
  // console.log("new song is", get(newSong))
  tick().then(() => newSong.set(true));
  // setTimeout(() => newSong.set(true));
  // console.log("new song is", get(newSong))

}

export function getNewSong() {
  // console.log("getting new song")
  let track = getRandomTrack()
  let songLength = track.songLength;
  let startTime = Math.floor(Math.random() * (songLength-20));

  let data = {
    track: track,
    startTime: startTime
  }
  sendToAll(data)
  if(get(mainPeer)) {
    // console.log("receiiving own song", track.title)
    receiveSong(data)
  }
}


export function startReceivingMain() {
   
    peer.on("connection",(conn)=>{ 
        
    conn.on("data",(data)=>{
      
      console.log("received", data)



      if (typeof data === 'object' && data !== null && "name" in data && "id" in data && "heart" in data) {
        console.log('received 1 profile')

        receiveProfile(data)
      }
      else if (data === "start_game") {
        receiveStartGame()
      }
      else if (typeof data === 'object' && data !== null && "winner" in data) {
        
        receivePointWinner(data)
      }
      else if (typeof data === 'object' && data !== null && "track" in data && "startTime" in data) {
        receiveSong(data)
      }
      else if (typeof data === 'object' && data !== null && data !== "start_game" && !get(isGameStarted)) {
        console.log("received full profiles")
        receiveAllProfiles(data)
      }


    })
  })

}




export function startGame() {
    isGameStarted.set(true);
    if (get(mainPeer)) {
        sendToAll("start_game")
        getNewSong()

    }

}

function getRandomTrack() {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  return tracks[randomIndex];
}

function getRandomHeart() {
  const randomIndex = Math.floor(Math.random() * hearts.length);
  return hearts[randomIndex];
}



  
export function until(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}






