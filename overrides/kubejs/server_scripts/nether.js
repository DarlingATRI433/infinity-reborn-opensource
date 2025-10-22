// 监听玩家登录事件
onEvent('player.logged_in', event => {
  // 检测玩家是否有阶段
  if (!event.player.stages.has('nether')) {
    // 没有则添加该阶段
    event.player.stages.add('nether')
    event.player.give(Item.of('kubejs:difficulty_changer', '{RepairCost:1}'))
    event.player.give(Item.of('20x kubejs:chinese_dumpling'))
    event.player.give(Item.of('2x kubejs:firecracker'))
    event.player.give(Item.of('4x kubejs:red_packet'))
	  event.server.runCommandSilent(`scoreboard players set choice nether 1`)
    event.player.tell(`§e如果游玩过程中发现BUG请加群§c904252119`)
    event.player.tell(`§e==================================`)
    event.player.tell('§e建议在§c选择-语言§e里关闭§c强制显示Unicode字体')
    event.player.tell(`§e==================================`)
  }
})