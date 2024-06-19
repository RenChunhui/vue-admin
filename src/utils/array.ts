export function coverListToTree(data:any[]) {
  const nodeMap:any = {}
  const result:any[] = []

  data.forEach(item => {
    nodeMap[item.id] = { ...item, children: []}
  })

  data.forEach(item => {
    const node = nodeMap[item.id]

    if(item.pid !== 0) {
      nodeMap[item.pid].children.push(node)
    } else {
      result.push(node)
    }
  })
  return result
}
