import { Peer } from "peerjs";


const peerA = new Peer("13");
const peerB = new Peer("87");



const conn = peerA.connect("87");
conn.on("open", () => {
    conn.send("HEY BESTIE");
})