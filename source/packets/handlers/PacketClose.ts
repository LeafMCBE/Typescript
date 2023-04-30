import { Player as Client } from 'bedrock-protocol'
import Server from '../../Server'
import Player from '../../api/Player'
import Colors from '../../utils/Colors'

const PacketClose = (server: Server, client: Client) => {
  const player = new Player(client)
  delete server.players[
    server.players.findIndex(v => v.username === player.username)
  ]

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (!client && !client.getUserData()) return
  const maybe = () => server.broadcast(Colors.yellow(`${player.username} left`))

  server.plugins.do('onPlayerLeft', maybe, player)
}

export default PacketClose
