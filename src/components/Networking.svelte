<script>
  import { myid, mainid, mainPeer, isGameStarted, newSong, isGameEnded } from "../js/store.js";
  import {Peer} from 'peerjs'
var peer = new Peer();
var conn
let link

function sendToMain(data) {
  conn = peer.connect($mainid)
  conn.on("open",() => {
    conn.send(data)
  })
}
 

peer.on("open",(id)=>{
  $myid = id
  console.log(id)
})


//receiving
function startReceiving() {
  peer.on("connection",(conn)=>{
  conn.on("data",(data)=>{
    switch(data) {
      case "start_game":
        $isGameStarted = true;
    }
  })
})

}




</script>


