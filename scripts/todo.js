// Description:
//   TODOリストを管理してくれるbot
// Commands:
//   bot名 todo     - TODOを作成
//   bot名 done     - TODOを完了にする
//   bot名 del      - TODOを削除する
//   bot名 list     - TODOの一覧を取得する
//   bot名 doneList - 完了したTODOの一覧を取得する
'use strict'

const todo = require('todo')

module.exports = robot => {
  robot.respond(/todo (.+)/i, msg => {
    const task = msg.match[1].trim()
    todo.todo(task)
    msg.send(`追加しました: ${task}`)
  })
  
  robot.respond(/done (.+)/i, msg => {
    const task = msg.match[1].trim()
    todo.done(task)
    msg.send(`完了にしました: ${task}`)
  })

  robot.respond(/del (.+)/i, msg => {
    const task = msg.match[1].trim()
    todo.del(task)
    msg.send(`削除しました: ${task}`)
  })

  robot.respond(/list/i, msg => {
    msg.send(todo.list().join('\n') || 'TODOはありません')
  })

  robot.respond(/doneList/i, msg => {
    msg.send(todo.doneList().join('\n') || '完了したTODOはありません')
  })
}

