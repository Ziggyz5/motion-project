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
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfff99ffffffffffffffff
        ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfff99ffffffffffffff
        ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbff99ffffffffffff
        ffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbff99ffffffffff
        fffffffffff9ffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbff99ffffffff
        fffffffffff9ffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff9ffffffff
        ffffffff88ff9ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff9fffffffff
        ffffffffff8893ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffbf9ffffffffff
        ffffffffffff88ff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffb9fbbbbbbbff
        ffffffffffff9f88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffb9fbfffffffbf
        ffffffffffff9f9388ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fb9ffbfffffffbf
        ffffffffffff9f3fff88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf9ffbfffffffbf
        ffffffffffff93fffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb9fffbfffffffbf
        ffffffffffff39ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf99ffbfffffffbf
        fffffffffff399ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffbf9ff9fbfffffffbf
        ffffffffff3f99fff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffffffffbf9fff9fbfffffffbf
        fffffffff3ff9ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbfffffffbff9ffff9fbbbbbbbff
        ffffffff3ff99fff8ffffffbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffffffbff9f8ffff9fffffffff
        fffffff3fff99fff8fffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffffffbf9ff8fffff9ffffffff
        ffffff3fff99ffff8fffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffffffbf9fff8fffff9fffffff
        fffff3ffff99fff8ffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffbf9fffff8fffff9ffffff
        ffff3ffff9f9fff8ffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb9ffffff8ffffff9fffff
        fff3fffff99ffff8ffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf9fffffff8ffffff9ffff
        fff3ffffff9ffff8ffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffff8ffffff9fff
        fff3ffffff9fff8fffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffbfffffff8fffffff9ff
        fff3fffff9f9ff8ffffffffbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffbbffffff8fffff9fff
        fff3fffff9f9ff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffbffffff8ff99ffff
        fff3fffff9ff98ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffbfffff8f9ffffff
        fff3ffff9fff98ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffbbffff8fffffff
        fff3ffff9ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffbf99f8ffffff
        fff3ffff9ffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffbf9fff8ffffff
        fff3ffff9fff8f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffbf9fffff8fffff
        fff3fffff9ff8ff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffbf9ffffff8fffff
        fff3fffff9ff8fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffb99fffffff8fffff
        fff3fffff9f8ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffbfffffffff8fffff
        fff3ffffff9f8ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffbfffffffffff8ffff
        fff3ffffff9ff8ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffb9fffffffffff8ffff
        ffff33ffff9ff8fffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffb9fffffffffff8ffff
        ffffff33ff9fff8fffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffbf9fffffffffff8ffff
        ffffffff3f9ffff8fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffbff9fffffffffff8fff
        fffffffff33fffff8f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffbfff9fffffffffff8fff
        ffffffffff933ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffbfff9fffffffffff8fff
        ffffffffff9ff33f98ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffbffff9fffffffffff8fff
        fffffffffff9fff3f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffbffffff9fffffffffff8ff
        fffffffffff9ff93f8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffbffffff9fffffffffff8ff
        fffffffffff9ff93f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fbfffffff9fffffffffff8ff
        fffffffffff9f9f3f8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bfffffff9fffffffffff8ff
        ffffffffffff993f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb9ffffffff9fffffffffff8f
        ffffffffffff9f3f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf9fffffff9fffffffffff8f
        fffffffffff99f3f8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff9ffffff9ffffffffff8ff
        fffffffffff993ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffff9ffffff9fffffffff8fff
        ffffffffff9f93ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff9ffffff9ffffffff8fff
        fffbbbbbff9ff3f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffff9ffffff9fffffff8ffff
        fffbfffbfff9f3f8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffff9fffff9ffffff8fffff
        fffbfffbffff938fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffff9fffff9ffffff8fffff
        fffbfffbffff938ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffff9fffff9ffff8ffffff
        fffbbbbbffff938ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffff9fffff9ffff8ffffff
        ffffffffffff989fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffff9ffff9fff8fffffff
        ffffffffffff989ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff9fffff9f8ffffffff
        ffffffffffff83f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff9fffff9f8ffffffff
        fffffffffff983f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff9ffffff98fffffffff
        fffffffffff983ff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff9ffffff8ffffffffff
        fffffffffff8f3ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff9ffffff89fffffffff
        ffffffffff98f3fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb9ffffff8f9fffffffff
        ffffffffff8ff3ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb9fffff8ff9fffffffff
        fffffffff98fff3fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bfffff8fff9ffffffff
        fffffffff98fff3ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fbfff8ffff9ffffffff
        fffffffff98ffff3fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fbfff8ffff9ffffffff
        ffffffff9f8fffff3f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffbf8fffff9ffffffff
        ffffffff9ff8fffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffb8ffffff9ffffffff
        ffffffff9ff8fffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffbfffff9fffffffff
        ffffffff9ff8ffff9f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff8fbffff9fffffffff
        ffffffff9ff8fff9fff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f8ffbffff9fffffffff
        ffffffff9fff8ff9fff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fffbfff9fffffffff
        fffffff9ffff8ff9fff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffbff9fffffffff
        fffffff9ffff8ff9fff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffbff9fffffffff
        fffffff9ffff8ff9ff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffff8fffffb9ffffffffff
        fffffff9ffff8ff9ff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbfffffff8fffffb9ffffffffff
        fffffff9fffff8f9ff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffffff8ffffb9ffffffffff
        ffffff9ffffff8f9f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffbffffffffff
        ffffff9ffffff8f9f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98ffffbffffffffff
        fffffff9fffff8ff93fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9fbfffffffff
        fffffff9fffff8ff39fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9fbfffffffff
        fffffff9ffff8fff39fbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9fbfffffffff
        ffffffff9fff8fff3f9bfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9ffbffffffff
        ffffffff9fff8ff3ff9bbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9ffbffffffff
        fffffffff9ff8ff3ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fff9ffffbfffffff
        fffffffff9ff8ff3f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff89ff9ffffbfffffff
        ffffffffff98ff3ff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fff9ffffbfffffff
        ffffffffff98ff3f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9ffffbfffffff
        fffffffffff8ff39ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98fff9ffffbfffffff
        fffffffffff8f39ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98ffff9ffffbfffffff
        fffffffffff8f39fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f8ffff9ffffbfffffff
        fffffffffff8939ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff8ffff9ffffbfffffff
        ffffffffff8f93fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff8ffff9ffffbfffffff
        ffffffffff8ff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff8fff9ffffbfffffff
        fffffffffff8f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff8fff9ffffbfffffff
        fffffffffff839fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff8ff9fffffbfffffff
        ffffffffffff89fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff8ff9ffffbffffffff
        ffffffffffff98ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99f8ff9fffffbfffffff
        ffffffffffff983fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f8f9ffffffbffffff
        fffffffffff9f98ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98f9fffffffbfffff
        fffffffffff9f983ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff89f9fffffffbffff
        fffffffffff9f983ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f99ffffffffbfff
        ffffffffff9ff9838ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f99fffffbbbbff
        ffffffffff9ff8ff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f9ffbbffffff
        ffffffffff9ff8ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fbffffffff
        ffffffffff9ff8ff83ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff
        ffffffffff9ff8ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff
        ffffffffff9ff8f8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff
        ffffffffff9ff88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff
        ffffffffff9ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff
        ffffffffff9ff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff
        ffffffffff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f9ffffffffff
        fffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffff
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
        ............................b...................................
        .............................b..................................
        ............................b...................................
        ............................b...................................
        ............................bb..................................
        .........................bbbbbbbb...............................
        ........................bbbbbbbbbbbb............................
        ........................bbbbbbbbbbbbb...........................
        ........................bbbbbbbbbbbbbb..........................
        ........................bbbbbbbbdbbbbb..........................
        ..9999999..............bbbbbbbdddbbbbb.b........................
        ..999999999............bbbbbdddddbbbbbbbb.......................
        ..99999999999..........bbbfffdddfffbbbbbb.......................
        ..9999999999999.......bbbbb19ddd19bbbbbb.b......................
        ..999999999999999.....bbbbf99ddd99fbbbbb.b......................
        ..9999777799999999.....bbbbfdddddfbbbbbb.b............9999999...
        ...9997997999999999....bbbb3ddddd3bbbbb.bb........99999999999...
        ...99979979999999999...bbbbdddddddbbbb..bbb.....9999999999999...
        ...999979999999999999..bbbbdd111ddbbbb..b.b...999999999999999...
        ....99979999999999999..bbbfdd333ddbbb...b...9999997777779999....
        ....99997799999999999..bbbbfdddddfbbb...b..99999979999979999....
        ....999997779999999999.bbbbbfdddf.bbb..b..99999999999997999.....
        ....9999999977799999999bb.bbfffff.bbb..b.999999999999777999.....
        .....999999999979999999.b.bbfaaaf..b.b.b.999999999777799999.....
        .....999999999997999999bb.bbfaaaff.bbbbb999999997779999999......
        ......99999999997999999bbfbbfaaafafbbbbbb99999777999999999......
        ......99999999997999fffbbbbbfaaafaabbbbfb9999979999999999.......
        .......999999999999faaaabbabaaaaaaaabbbbbf9997799999999.........
        ........9999999999faaaaabbbbaaaaaaaabbbbaaf999999999999.........
        ........999999999ffaaaaabbbaaaaaaaaabbbbaaf9999999999...........
        ..........9999999ffaaaaabbaaaaaaaaabbabbaaff99999999............
        ..........9999999ffaaaaabbbaaaaaaaabbbbbaaff999999..............
        ............99999ffaaaaabbbbaaaaaabbbaaaaaff99999...............
        ..............999ffaaaaaabbaaaaaaabbbaaaaaff999.................
        ................fafaaaaaabaaaaaaabbbaaaaaaff....................
        ................fafaaaaaaabaaaaabbbaaaaaaaf.f...................
        ................fafaaaaaaabbaaaabbaaaaaaaffff...................
        ................faafaaaaaaababaaaaaaaaaaafaaf...................
        ................faafaaaaaaabbbaaaaaaaaaaafaaf...................
        ...............faaafaaaaaaaabaaaaaaaaaaaafaaaf..................
        ...............faaafaaaaaaaaaaaaaaaaaaaaafaaaf..................
        ...............faaafaaaaaaaaaaaaaaaaaaaaafaaaf..................
        ..............9faaafaaaaaaaaaaaaaaaaaaaaafaaaf..................
        .............9faaaafaaaaaaaaaaaaaaaaaaaaafaaaf..................
        ............99faaaafaaaaaaaaaaaaaaaaaaaaafaaaaf9................
        ...........999faaaafaaaaaaaaaaaaaaaaaaaaafaaaaf999..............
        ..........9999faaaafaaaaaaaaaaaaaaaaaaaaafaaaaf99999............
        ..........9999faaaafaaaaaaaaaaaaaaaaaaaaafaaaaf999999...........
        .........9999faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf979999..........
        ........99979faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf9979999.........
        .......999779faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf99799999........
        .......999799faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf99979999........
        ......9997799faaaaafaaaaaaaaaaaaaaaaaaaaafaaaaaf99979999........
        ......999999faaaaaaafaaaaaaaaaaaaaaaaaaafaaaaaaaf99999999.......
        `, SpriteKind.Player)
    game.showLongText("Welcome to Fairy Quest.", DialogLayout.Bottom)
    game.showLongText("The tulips are tricks don't touch them, if you do ghosts will come for you.", DialogLayout.Bottom)
    game.showLongText("Get the crystal orb for a power-up to help you. ", DialogLayout.Bottom)
    game.showLongText("Good luck!!!", DialogLayout.Bottom)
    narrator.destroy()
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff199999ff1ffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19fff9ff1fffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19fff9ff1ffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19fff9ff1ffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff199999ff1ffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffff
        fffffffff111ffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffff
        fffffffff1999fffffffffffffffffffffff55555fffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffff
        fffffffff1919fffffffffffffffffffffff5fff5ffff999ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffff
        ffffffffff999fffffffffffffffffffffff5fff5ffff919ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffff5fff5ffff999111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff5fff51111fffffffffffffffffffffffffffffffff111111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff15ffff1ffffffffffffffffffffffffffffffff111111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff159fff1ffffffffffffffffffffffffffffffff111111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffff1ffffffffffffffffffffff1fffffff11111111111111ffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ffffffffffffffffffffff1111111111111111111111ffffffffffffff
        fffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffffffffffffffffffffff11111111111111111111fffffffffffffff
        ffffffffffffffffffffffff5fffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffff111111111111111111ffffffffffffffff
        ffffffffffffffffffffffff5fffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffff
        ffffffffffffffffffffffff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffff
        ffffffffffffffffffffffff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffff
        ffffffffffffffffffffffff5fffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff5fffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff5fffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f9f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f511fffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccffffffffffff
        fffffffffffffffccccccccfffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccffffffff
        ffffffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccffffff
        ffffffffffffccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffff
        ffffffffffffccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccfffff
        fffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccfffff
        fffffffffffccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccffff
        fffffffffffcccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccffff
        fffffffffffcccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccffff
        fffffffffffcccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffffcccccccccccccccccccccffff
        fffffffffffccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccffffffffffffffffffccccccccccccccccccffff
        fffffffffffccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccffffffffffffffffffffffccccccccccccccccffff
        fffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffcccccccccccccccfffff
        fffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccfffffffffffffffffffffffffcccccccccccccccfffff
        fffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffcccffccccccffffffff
        ffffffffffffccccccfffccccfccccccccccfffffffffffffffffffffcccccccffffffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffcccffffffffffffffff
        fffffffffffccccccffffccccfffccccccccffffffffffffffffffcccccccccccccfffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffcccffffffffffffffff
        fffffffffffccccfffffffcccffffcccccccfffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffcccffffffffffffffff
        fffffffffffcccffffffffcccfffffccccccffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffff
        ffffffffffffffffffffffcccfffffffccccfffffffffffffffcccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffff
        ffffffffffffffffffffffcccfffffffccccffffffffffffffcccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffff
        ffffffffffffffffffffffcccfffffffffffffffffffffffffcccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffff
        ffffffffffffffffffffffcccfffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffff
        fffffffffffffffffffffccccffffffffffffffffffffffffccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffff
        fffffffffffffffffffffccccffffffffffffffffffffffffccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffff
        fffffffffffffffffffffcccfffffffffffffffffffffffffcccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffff
        fffffffffffffffffffffcccfffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffff
        fffffffffffffffffffffccccfffffffffffffffffffffffffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffff
        fffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffff
        ffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffff
        fffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffff
        fffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffff
        fffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffff
        fffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffff
        fffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccfffffffffffffcccfffffffffffffffffffff
        ffffffffffffffffcccccccccccccfffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffccccccccccfffffffffccccccccccccccccccffffffffffcccfffffffffffffffffffff
        fffffffffffcccccccccccccccccccffffffffffffffffffffffffffffffcccffffffffffffffffffffffffccccccccccccccffffffcccccccccccccccccccccffffffffccccffffffffffffffffffff
        ffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffcccccccccccccccfffffcccccccccccccccccccccffffffffcccccfffffffffffffffffff
        fffffffffcccccccccccccccccccccccccffffffffffffffffffffffffcccccfffffffffffffffffffffffccccccccccccccccfffffcccccccccccccccccccccfffffffffcccccffffffffffffffffff
        fffffffffcccccccccccccccccccccccccccfffffffffffffffffffffcccccffffffffffffffffffffffffcccccccccccccccccffffcccccccccccccccccccccffffffffffcccccfffffffffffffffff
        ffffffffccccccccccccccccccccccccccccfffffffffffffffffffffccccffffffffffffffffffffffffccccccccccccccccccfffffccccccccccccccccccccfffffffffffccccfffffffffcccccccc
        fffffffccccccccccccccccccccccccccccccfffffffffffffffffffccccfffffffffffffffffffffffffccccccccccccccccccffffffccccccccccccccccccfffffffffffffccccffffcccccccccccc
        fffffffccccccccccccccccccccccccccccccccfffffffffffffffffccccfffffffffffffffffffffffffccccccccccccccccccffffffffcccccccccccccccffffffffffffffccccfffccccccccccccc
        ffffffccccccccccccccccccccccccccccccccccffffffffffffffffcccffffffffffffffffffffffffffccccccffffccccccccffffffffffccccccccccffffffffffffffffffccccccccccccccccccc
        fffffccccccccccccccccccccccccccccccccccccfffffffffffffffcccffffffffffffffffffffffffffcccccfffffcccccccffffffffffffccccfffffffffffffffffffffffccccccccccccccccccc
        ffffccccccccccccccccccccccccccccccccccccccffffffffffffffcccffffffffffffffffffffffffffffffffffffcccffffffffffffffffcccffffffffffffffffffffffffccccccccccccccccccc
        fffccccccccccccccccccccccccccccccccccccccccfffffffffffffcccffffffffffffffffffffffffffffffffffffcccfffffffffffffffccccfffffffffffffffffffffffcccccccccccccccccccc
        fffcccccccccccccccccccccccccccccccccccccccccfffffffffffccccffffffffffffffffffffffffffffffffffffccccffffffffffffffccccfffffffffffffffffffffcccccccccccccccccccccc
        ffcccccccccccccccccccccccccccccccccccccccccccfffffffffcccccffffffffffffffffffffffffffffffffffffccccfffffffffffffccccfffffffffffffffffffffccccccccccccccccccccccc
        ffccccccccccccccccccccccccccccccccccccccccccccffffffffccccffffffffffffffffffffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccc
        ffcccccccccccccccccccccccccccccccccccccccccccccffffffccccffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccccccc
        fccccccccccccccccccccccccccccccccccccccccccccccccfcccccccfffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccfffffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
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
    mySprite.destroy()
    tiles.setTileAt(tiles.getTileLocation(57, 12), img`
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
    ............88888.......
    ............88888.......
    ............88888.......
    ..........9988888.......
    ........999988888.......
    ......9999999bbb........
    ....999999999bbb........
    ..99999999999bbb........
    ..99999999999bbb........
    ..99999999999bbb........
    ..99999999999bbb........
    ..99999999999bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    .............bbb........
    ........................
    `, SpriteKind.finish)
tiles.placeOnTile(finline, tiles.getTileLocation(58, 12))
lavas()
game.onUpdate(function () {
    mySprite.vx = controller.dx(3000)
    scene.cameraFollowSprite(mySprite)
})
