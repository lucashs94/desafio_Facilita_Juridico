// Função para calcular a distância entre dois clientes
function calculateDistance(
  client1: { id: string; x: number; y: number },
  client2: { id: string; x: number; y: number }
) {
  const xDiff = client1.x - client2.x
  const yDiff = client1.y - client2.y
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff)
}

// Função para calcular a rota usando o algoritmo do vizinho mais próximo
export function nearestNeighborRoute(
  clients: { id: string; x: number; y: number }[]
) {
  clients.unshift({ id: '0', x: 0, y: 0 }) // Começando da empresa (0, 0)

  let visited = new Array(clients.length).fill(false)
  let route = []
  let currentClientIndex = 0

  visited[currentClientIndex] = true
  route.push(currentClientIndex)

  while (route.length < clients.length) {
    let minDistance = Infinity
    let nearestClientIndex = null

    for (let i = 0; i < clients.length; i++) {
      if (!visited[i]) {
        let distance = calculateDistance(
          clients[currentClientIndex],
          clients[i]
        )
        if (distance < minDistance) {
          minDistance = distance
          nearestClientIndex = i
        }
      }
    }

    visited[nearestClientIndex!] = true
    route.push(nearestClientIndex)
    currentClientIndex = nearestClientIndex!
  }

  route.shift()

  return route.map((index) => clients[Number(index)])
}
