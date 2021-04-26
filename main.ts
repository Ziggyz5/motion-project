namespace SpriteKind {
    export const flower = SpriteKind.create()
    export const block = SpriteKind.create()
    export const blocks = SpriteKind.create()
    export const finish = SpriteKind.create()
    export const lava = SpriteKind.create()
    export const coins = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coins, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
})
function dialouge () {
    scene.setBackgroundImage(img`
        ffffffafffffffffff88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffaafffffffffffffffff
        fffffffaaffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffff8ffffffffffaaaaffaffffffff9999ffff
        ff9999999aafffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffff8fffffffaafffffffafff9999ffff99ff
        f9111ffff9faaffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8fffffaffffffffffa99ffffffffffff
        9f1f1fffff9ffaa88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8ffffaafffffffff99faffffffffffff
        9f111fffff9ff88aafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fff1fffffff8ffffffaaaaffff9ffffaaffffffffff
        9fffffffff9f8ffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8ffffffffffaa99fffffffaffff8ffff
        9fffffffff98ffffbfffffffff88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8fffffffffff9faaaffffffaff8fffff
        9fffffffff98ffffabfffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8ffffffffff9fffffaaaffffa8ffffff
        9fffffffff989ffaffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8ffffffffff9ffffffffaaa88fafffff
        9fffffffff98f9fafffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffff8ffffffffff9fffffffffff8aafafffff
        f9fffffff9f8f9afffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffff8ffffffffff9fffffffffff8fffafaffff
        ff9999999ff8fa9fbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888ffffffffff9fffffffffff8ffffafaffff
        fffffffffff8affbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff8ffffffaaffff
        fffffffffffa8bbf9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffff8fffffffafafff
        ffffffffffabb8ff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff8fffffffffaafff
        fffffffffabff8fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffff8ffffffffffafaff
        ffffffffbbffff8ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff8ffffffffffafafff
        fffffffbfaffff8fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff998ffffffffffaaffff
        ffffffbffafffff8ff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff899ffffffffaafffff
        ffffffbffaffff8fff9fffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ff99fffffaaffffff
        ffffffbffafff8ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffff99fffaaffffff
        ffffffbffaff8fffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffff99aafffffff
        ffffffbffaf8ffffff9fffffff88888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffa99fffffff
        fffffffbfaf8ffff99fffffff8fffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffaff99fffff
        fffffffbffafff99fffffffff8ff11f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffaaffff9fffff
        fffffffbf8fa99fffffffffff8fff1f8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffaafffff9fffff
        ffffffffbb9faffffffffffff8ffff18fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffaafffffff9ffff
        ffffffff89bffaaffffffffff8fffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88aaafffffff9fffff
        ffffffff89fbfffaafffffffff88888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa8afffffff9ffffff
        fffffffff8ffbbfffaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaafa8ffffff9fffffff
        ffffffffff8fffbffffaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffaff8fff99ffffffff
        ffffffffff98fffbfffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffaffff8f9ffffffffff
        ffffffffff9f8fffbfffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafaffffff8fffffffffff
        fffffffffff9f88ffbbffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaffffff9f8ffffffffff
        fffffffffff9fff88ffbfffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffff99fff88ffffffff
        fffffbfffff9fffff88fbfffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafaff99fffffff8fffffff
        ffffffffffff9ffffff8fbfffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafff99ffffffffff8ffffff
        ffffffffffff9fffffff8bffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaff99affffffffffff8fffff
        fffffffffffff9fffffffb88ffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaf99fffaffffffffffff8ffff
        ffffffffffffff9ffffffbff8ffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaf9ffffffaffffffffff8fffff
        ffffffffffffff9ffffffbfff8affffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaff9ffffffafffffffff8ffffff
        fffffffffffffff9fffffbffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa9ffffffffaffffffff8ffffff
        ffffffffffffffff9fffbfffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffaffff3333333fff
        ffffffffffffffff9ffbffffffa8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9faffffffffafff3f8fffff3ff
        fffffffffffffffff9bfffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9faffffffffaff38f111113ff
        fffffffffffffffffbffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9afffffffff883ff1fff13ff
        ffff8fffffffffffbf9fffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9affffff88af3ff1fff13ff
        fffffffffffffffbff9fffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ff888fffa3ff1fff13ff
        ffffffffffffffbffff9ffffaa8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88fffffff3ff111113ff
        fffffffffffffbfffff9ffaaff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88f9fffffff3fffffff3ff
        ffffffffffffbfffffffaaffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88ffff99ffffff3333333fff
        fffffffffffbfffffaaa9ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffaf99ffffafffffffff
        ffffffffffbfffaaaffff9ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffaff999ffaffffffff
        fffffffffbfaaaffffffff9f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffaffff99affffffff
        fffffffffbafffffffffff98fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffaffffff999ffffff
        ffffffffbfffffffffffff89ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffafffffffa99ffff
        fffffffabffffffffffff88f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffafffffffaff99ff
        ffffffabfffffffffff88fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffafffffffaff9ff
        fffffafbfffffffff88fffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffaffffffaff9ff
        fffffafbffffffff8fffffff9fffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffafffffffaf9ff
        ffffaffbfffffff8ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffaffffffaf9ff
        fffafffbffffff8fffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffafffffffa9ff
        fffafffbffff88ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffafffffff9ff
        fffafffbfff8ffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffafffffff9ff
        fffafffbff8fffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffafffffff9f
        ffffaffbf8fffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88fffffffffafffff9af
        fffffaafbffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88fffffffafffff9af
        fffffffaabffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888fffffafff9faf
        fffffff8fbafffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccff88fffaff9ffaf
        ffffff8fffbafffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcfff888faf9ffaf
        fffff8fffffbaffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcfffff888fffaf
        ffff8ffffffbfaffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffff9a88faf
        ffff8fffffffbfaafff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffff9faf88f
        fff8fffffffffbffaf9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcffff9ffaff8f
        ffff8fffffffffbffa9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfff9ffffaf8f
        ffff8ffffffffffbb9affffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcff9ffffffa8f
        fffff8ffffffffff9bfaffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcff9ffffffa8f
        ffffff8ffffffff9ffbafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcf9ffffffff8f
        ffffff8ffffffff9fffbafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcf9ffffffffa8f
        fffffff8ffffff9fffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcff9ffffffffa8f
        fffffff8fffff9ffffffabffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccff9ffffffffaf8f
        ffffffff8fff9ffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffaff8f
        fffffffff8ff9ffffffffabfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffaff8f
        fffffffff8f9ffffffffffabffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffaffa8f
        ffffffffff88ffffffffffabfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffaffaf8f
        33333fffff9f88ffffffffafbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffafaafff8
        fffff3ffff9fff8fffffffafbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffaaffff8f
        fff1f3ffff9ffff88fffffabfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99aafffff8f
        ffff13fffff9fffff8ffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa9fffff8ff
        f111139fffff9fffff8ffbaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaf9fff8fff
        f1fff3ffffff9fffff8ffbaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaafff998ffff
        33333ffffffff9fffffabfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafaffffff8ffff
        ffffffffffffff9ffaabffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaafaffffff89ffff
        fffffffffffffaaaafbf8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaafffaffffff89ffff
        fffffffffffaaff9fbff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffaffffff8f9ffff
        fffffffffaaffff9bffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffaffffff8ff9ffff
        fffffffaafffffffbffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffaffffff8ff9ffff
        ffffffaffffffffb9ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffafffff8ffff9fff
        fff8faffffffffbff9fff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffafffff8ffff9fff
        ff88faffffffffbff9fff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffaffffff8ffff9fff
        ff8faffffffffbffff9ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffaffffff8ffff9fff
        ffffafffffffbffffff98fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffafffff88ffff9fff
        fffffaffffffbffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffafffffff88fff9ff
        fffffaaffffbffffff88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffaffffffffff888fff
        fffffffaaffbffff88f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffafffffffff99ff88f
        fffffffffabff888fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffaffffffff9fffff8f
        ffffffffffba8ffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffafffffff99ffffff8f
        ffffffffffbfafffff9ffff33333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333ffaffffaffffff9fffffff8ff
        fffffffff8bffaffff9fff3fffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fff3ffaffffafffff9ffffffff8ff
        ffffffff8fbfffaff9ffff3111ff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fff3ffaffffafffff9fffffff8fff
        fffffff8ffbffffaf9ffff311fff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fff3fffaffaffffff99fffff8ffff
        fffffff8fffbffaf9fffff311fff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333ffffafffffffff9ffff8fffff
        fffffff8ffffbfa9ffffff3f1fff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffff8ffffff
        ffffffff88fffbbffffffff33333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffff8fffffff
        ffffffffff8ffaabbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffff8f8fffffff
        ffffffffaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffff88ffffffff
        ffffffaa999f888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffff
        ffffff99fffffff8888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffff
        ffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    narrator = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ...........................bb...................................
        ............................b...................................
        ...........................bb...................................
        ...........................bb...................................
        .........................bbbbbbb.bbbb...........................
        ........................bbbbbbbbbbbbbb..........................
        ........................bbbbbbbbbbbb.b..........................
        ........................bbbbddddbbbbbbb.........................
        .......................bbbbbdddddbbbbbb.........................
        .......................bbbbdddddddbbbbb..............9999999....
        ...9999................bbbbddddddddbb.b...........99999999999...
        ...9999999.............bbbbffdddfffbb.b.........9999999989999...
        ....99999999...........bbbb61ddd61dbbbb........9998889999999....
        ....9989999999.........bbbb66ddd66fbbbb.......99888988889999....
        ....99999989999........bbbbfdddddfdbbbb......99989999998999.....
        .....999988889999......bbbbddddddd3bbb......99999999999899......
        ......999899889999.....bbbbdddddddddbb.....99999999999989.......
        .......988999899999.....bbbb31113ddfbbb...999999999998899.......
        .......988999999999...b.bbfbd333ddfbbbb..999999999888899........
        .........88899999999..b.bb.bdddddfbbbbb..99998888889999.........
        .........998889999999.bb.bbbfdddfbbbbbb.99988999999999..........
        ..........99988899999..b.bbbfffffbbbbbb99988999999999...........
        ..........999998899999.bbbbbfdddfbbb.bb9998999999999............
        ...........99999988999..bbbbfdddffbbbb999899999999..............
        ............99999989999.fffbfdddfdffbb99999999999...............
        .............9999999ffffbbabbaaaababbffff9999999................
        ..............99999faaaabbbbbbbabbaabaaaaf9999..................
        ...............999faaaaababbbbbabaabbaaaaa99....................
        ................99faaaaabaabbbaabaabaaaaaaf.....................
        ..................faaaaabaabbbaababbaaaaaaf.....................
        ..................faaaaabaababaaabbaaaaaaaf.....................
        ..................faaaaaababbbaaabbbaaaaaaff....................
        .............99999faaaaaabaaaaaaabbbbbbaaaff....................
        ..........99999999faaaaaabaaaaaaaabbbabaaaff9...................
        ........999999999ffaaaaabbaaaaaaaaaaaabbaafaf99.................
        ......99999999999ffaaaaaaaaaaaaaaaaaaabbaafff9999...............
        ......99999988999fafaaaaaaaaaaaaaaaaaabaafaaf999999.............
        .....99999988999faafaaaaaaaaaaaaaaaaaaaaafaaaf999999............
        ....999998889999faafaaaaaaaaaaaaaaaaaaaaafaaaf9989999...........
        ....998888999999faafaaaaaaaaaaaaaaaaaaaaafaaaf99889999..........
        ...999999999999faaafaaaaaaaaaaaaaaaaaaaaafaaaaf99889899.........
        ..9999999999999faaafaaaaaaaaaaaaaaaaaaaaafaaaaf999888999........
        ..99999999999..faaafaaaaaaaaaaaaaaaaaaaaafaaaaf.99999999........
        ..9999999.....faaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf..999999........
        ..............faaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf...999999.......
        ..............faaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf........9.......
        .............faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaf...............
        .............faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaf...............
        .............faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaf...............
        ............faaaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaaf..............
        ............faaaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaaf..............
        ............faaaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaaf..............
        ...........faaaaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaaaaf.............
        `, SpriteKind.Player)
    game.showLongText("Welcome to Fairy Quest.", DialogLayout.Bottom)
    game.showLongText("The tulips are tricks don't touch them, if you do ghosts will come for you.", DialogLayout.Bottom)
    game.showLongText("Get the crystal orb for a power-up to help you.", DialogLayout.Bottom)
    game.showLongText("Good luck!!!", DialogLayout.Bottom)
    narrator.destroy()
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffff151fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff55fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffff
        ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffff111111ffffffffffffffffffff5ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
        fffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff
        ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff15ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff15fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccfffffffffff
        ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccfffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccff
        ffffffffffffffffffffffffffffff15ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccff
        fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccf
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffccccccccccccfffffffffcccccffffcccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffccccccccccffffffffffffcccfffffffffcccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffccccffffffffffcccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffcccccffffffffffccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffccccccffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffccccfffffffffffffffffffcccccccffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffccccccccfffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffccccccccccffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffffffff
        fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffff
        ffffffffffffffffffffffffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffffff
        ffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffffff
        fffffffffffffffffffffffffcccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffffff
        ffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffccc
        fffffffffffffffffffccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffcccccccccfccccc
        ffffffffffffffffffcccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffcccccccccccccccc
        fffffffffffffffffccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccfffffffffffcccccccccffffffccccccccccccccccc
        fffffffffffffffffcccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffccccccccccffffffffffffffffffffcccccccccccccffffffffcccccccccffffffccccccccccccccccc
        ffffcccccffffffffcccccccccccccccccccccccccccccfffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffccccccccccccccccfffffffcccccccccfffffcccccccccccccccccc
        ffccccccccccfffffccccccccccccccccccccccccccffffffffffffffffffffffffffffffccccccccccccccccfffffffffffffffccccccccccccccccccffffffcccccccccfffffcccccccccccccccccc
        fccccccccccccffffccccfffcccccccccccccccfffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffcccccccccccccccccccffffffcccccccccfffffcccccccccccccccccc
        fcccccccccccccffffffffffffffccccccccffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffcccccccccccccccccccffffffcccccccfffffffcccccccccccccccccc
        cccccccccccccccfffffffffffffcccfffffffffffffffffffffffffffffffffffffffffccccccccccccccccccffffffffffffccccccccccccccccccccfffffffccccccffffffccccccccccccccccccc
        cccccccccccccccfffffffffffffccccffffffffffffffffffffffffffffffffffffffffccccccccccccccccccffffffffffffcccccccccccccccccccccfffffffffcccfffffcccccccccccccccccccc
        cccccccccccccccfffffffffffffccccffffffffffffffffffffffffffffffffffffffffccccccccccccccccccffffffffffffcccccffffccccccccccccffffffffccccffccccccccccccccccccccccc
        cccccccccccccccfffffffffffffccccffffffffffffffffffffffffccccccffffffffffcccccccccccccccccfffffffffffffcccccffffccccccccccccffffffffccccfcccccccccccccccccccccccc
        cccccccccccccccffffffffffffffcccfffffffffffffffffffffffccccccccccffffffffcccccccccccccccfffffffffffffffcccfffffccccffcccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccffffffffffffffccccfffffffffffffffffffffccccccccccccccfffffffccccccccccccfffffffffffffffffffffffffcccffffcccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccffffffffffffffccccfffffffffffffffffffffccccccccccccccccfffffffffcccffffffffffffffffffffffffffffffcccffffffffffffffffccccccccccccccccccccccccccccc
        cccccccccffffffffffffffffffffcccccffffffffffffffffffccccccccccccccccccfffffffffcccfffffffffffffffffffffffffffffccccfffffffffffffffcccccccccccccccccccccccccccccc
        fffffccccfffffffffffffffffffffccccffffffffffffffffffccccccccccccccccccfffffffffcccfffffffffffffffffffffffffffffccccffffffffffffffccccccccccccccccccccccccccccccc
        fffffccccfffffffffffffffffffffccccffffffffffffffffffccccccccccccccccccfffffffffcccfffffffffffffffffffffffffffffcccfffffffffffffffccccccccccccccccccccccccccccccc
        ffffcccccffffffffffffffffffffcccccffffffffffffffffffccccccccccccccccccffffffffccccfffffffffffffffffffffffffffffcccffffffffffffffcccccccccccccccccccccccccccccccc
        ffffccccfffffffffffffffffffffcccccffffffffffffffffffcccccccccccccccccfffffffffccccffffffffffffffffffffffffffffccccfffffffffffffccccccccccccccccccccccccccccccccc
        fffcccccffffffffffffffffffffccccccfffffffffffffffffffffffffcccffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffcccccccccccccccccccccccccccccccccc
        fffccccfffffffffffffffffffffcccccffffffffffffffffffffffffffcccffffffffffffffffcccfffffffffffffffffffffffffffffcccccffffffffffccccccccccccccccccccccccccccccccccc
        fffccccfffffffffffffffffffffcccccfffffffffffffffffffffffffccccffffffffffffffffccccffffffffffffffffffffffffffffcccccfffffffffcccccccccccccccccccccccccccccccccccc
        fffcccffffffffffffffffffffffcccccfffffffffffffffffffffffffccccffffffffffffffffccccffffffffffffffffffffffffffffccccccffffffffcccccccccccccccccccccccccccccccccccc
        fffcccffffffffffffffffffffffcccccfffffffffffffffffffffffffcccffffffffffffffffcccccffffffffffffffffffffffffffffccccccffffffffcccccccccccccccccccccccccccccccccccc
        fffcccffffffffffffffffffffffcccccfffffffffffffffffffffffffcccfffffffffffcccccccccccccccfffffffffffffffffffffffcccccccffffffccccccccccccccccccccccccccccccccccccc
        ccccccccfffffffffffffffffffcccccffffffffffffffffffffffffffccccffffffccccccccccccccccccccccffffffffffffffffffffcccccccfffffcccccccccccccccccccccccccccccccccccccc
        cccccccccccccccffffffffffffcccccffffffffffffffffffffffffffccccffffccccccccccccccccccccccccccccffffffffffffffffcccccccfffffcccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccffffffffffccccfffffffffffffffffffffffffffccccfcccccccccccccccccccccccccccccccfffffffffffffffcccccccccfffccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccffffffffccccfffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccfcccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccffffccccccffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccfffccccccffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccffccccccffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccfffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (powerup == 1) {
        if (controller.right.isPressed() || count1 == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . a a a a . . . . . . 
                . . . . a a a a a a a . . . . . 
                . . . . . a a a a a a . . . . . 
                . . . . . a a a a a a . . . . . 
                . . . . . . . a a a . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 70, 0)
        }
        if (controller.left.isPressed() || count == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . a a a a . . . . . . 
                . . . . . a a a a a a a . . . . 
                . . . . . a a a a a a a a . . . 
                . . . . . a a a a a a . . . . . 
                . . . . . . . a a a . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -70, 0)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.lava, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    count = 1
    count1 = 0
    mySprite.setImage(img`
        ....................
        .................f..
        ...............ff5f.
        ............fff555f.
        ..........ff555555f.
        ..699999ff5555955f..
        .899999f55555995f...
        688999f55559995f....
        688999f5599955f.....
        668999f599555f......
        668999f59555f.......
        668999f5555f........
        688999f5ffff........
        6889999f5555f.......
        .899999f55955f......
        ..66699f55995f......
        ........f55955f.....
        .........f5995f.....
        ..........f5555f....
        ...........ffff.....
        `)
})
function Winsong () {
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(311, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(932, music.beat(BeatFraction.Whole))
    music.playTone(932, music.beat(BeatFraction.Quarter))
    music.playTone(932, music.beat(BeatFraction.Quarter))
    music.playTone(932, music.beat(BeatFraction.Quarter))
    music.playTone(1046.50, music.beat(BeatFraction.Double))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    count = 0
    count1 = 1
    mySprite.setImage(img`
        ....................
        ..f.................
        .f5ff...............
        .f555fff............
        .f555555ff..........
        ..f5595555ff999996..
        ...f59955555f999998.
        ....f59995555f999886
        .....f5599955f999886
        ......f555995f999866
        .......f55595f999866
        ........f5555f999866
        ........ffff5f999886
        .......f5555f9999886
        ......f55955f999998.
        ......f59955f99666..
        .....f55955f........
        .....f5995f.........
        ....f5555f..........
        .....ffff...........
        `)
})
function lavas () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        lavablck = sprites.create(img`
            44444444444444444444444444444444
            44244444444444444444444444444444
            44244444444444444444444442444444
            42244444444444444444444444444444
            44444444444444444444444444444444
            44444444444444444444444444444444
            44444444444444244444444444444444
            44444444444444424444444444444444
            44444444444444224444444444444444
            44444444444444244444444442444444
            44444444444444224444444422444444
            44444424444444424444444424444444
            44444444444444424444444444444444
            44444444444444424444444444444444
            44444442444444244444444444444444
            44444424444444244444444444444224
            44444424444444244444444444444244
            44444424444444244444444444444224
            44444422444444444444444444444424
            44444442444444444444444444444244
            44444442444444444444444444444444
            44444442444444444444444444444444
            44444444444444444444444444444444
            44444444444444444444444424444444
            44444444444444444444444422444444
            44444444444444444444444442444444
            44244444444444444444444422444444
            44224444444422444444444424444444
            44444422224422244444444444444444
            44444222224222224444444444424222
            22444222222222222222222242224222
            22222222222222222222222222222222
            `, SpriteKind.lava)
        tiles.placeOnTile(lavablck, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile1`)) {
        tulip = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ...........333..........
            ...........333..........
            ..........7.7.7.........
            ...........777..........
            `, SpriteKind.flower)
        tiles.placeOnTile(tulip, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile2`)) {
        coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.coins)
        tiles.placeOnTile(coin, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    ooga = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ooga.follow(mySprite, 50)
    tiles.placeOnRandomTile(ooga, sprites.builtin.forestTiles2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.finish, function (sprite, flag) {
    if (mySprite.overlapsWith(finline)) {
        ooga.follow(mySprite, 0)
    }
    mySprite.vy = 0
    mySprite.vx = 0
    mySprite.ay = 0
    mySprite.ax = 0
    mySprite.setImage(img`
        ....................
        .f...............ff.
        f5f.............f55f
        f55ff..........f555f
        f5555f.......ff5555f
        f5555f9999999f55555f
        ff5559999999995555f.
        .f5599988888999555f.
        .f559988888889955ff.
        .f559988666889955f..
        .ff5998866688995ff..
        ..ff99886668899f....
        ....99888888899.....
        ....99988888999.....
        ...f59999999995f....
        ..f555999999955ff...
        ..f555f.....f555f...
        .f5555f.....f555f...
        .f555f.......f555f..
        ..ffff........ffff..
        `)
    Winsong()
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blocks, function (sprite, otherSprite) {
    mySprite.startEffect(effects.starField)
    block2.destroy()
    game.splash("Power Up!")
    powerup = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let ooga: Sprite = null
let coin: Sprite = null
let lavablck: Sprite = null
let count = 0
let projectile: Sprite = null
let count1 = 0
let narrator: Sprite = null
let finline: Sprite = null
let powerup = 0
let block2: Sprite = null
let tulip: Sprite = null
let mySprite: Sprite = null
dialouge()
tiles.setTilemap(tilemap`level3`)
mySprite = sprites.create(img`
    ....................
    ..f.................
    .f5ff...............
    .f555fff............
    .f555555ff..........
    ..f5595555ff999996..
    ...f59955555f999998.
    ....f59995555f999886
    .....f5599955f999886
    ......f555995f999866
    .......f55595f999866
    ........f5555f999866
    ........ffff5f999886
    .......f5555f9999886
    ......f55955f999998.
    ......f59955f99666..
    .....f55955f........
    .....f5995f.........
    ....f5555f..........
    .....ffff...........
    `, SpriteKind.Player)
mySprite.ay = 400
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
tiles.placeOnTile(tulip, tiles.getTileLocation(randint(5, 10), 13))
block2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.blocks)
tiles.placeOnTile(block2, tiles.getTileLocation(5, 8))
info.setLife(3)
powerup = 0
finline = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ..................99666.
    ..................66666.
    ..................66666.
    ..................66666.
    ..................66666.
    ..................9bcc..
    ................999bbc..
    .9999.........99899bbc..
    ..99999.....9999899bbc..
    ..99989999999999899bbc..
    ...9989999899999899bbc..
    ....989999899999899bbc..
    ......9999899966666bbc..
    ........666666.....bbc..
    ...................bbc..
    ...................bbc..
    ...................bbc..
    ...................bbc..
    ...................bbc..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    ...................bbb..
    `, SpriteKind.finish)
tiles.placeOnTile(finline, tiles.getTileLocation(58, 12))
lavas()
game.onUpdate(function () {
    mySprite.vx = controller.dx(3000)
    scene.cameraFollowSprite(mySprite)
})
