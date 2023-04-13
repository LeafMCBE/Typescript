import { Client } from "bedrock-protocol";
import Server from "../../Server";
import Player from "../../api/Player";
import Colors from "../../utils/Colors";

const PacketClose = (server: Server, client: Client) => {
  if (!client) return;

  const player = new Player(client);
  server.broadcast(`[${Colors.red("-")}] ${player.username}`);

  delete server.players[
    server.players.findIndex((v) => v.username === player.username)
  ];
};

export default PacketClose;
