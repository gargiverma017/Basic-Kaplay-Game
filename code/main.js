import kaplay from "kaplay";

const k = kaplay({
    width: 1280,
    height: 720,
});

k.loadBean();
k.setGravity(2000)

//define player property
const player = k.add([k.sprite("bean"), 
    k.pos(k.center()),
    k.area(),//create area around character
    k.body(), //susceptable to gravity
    k.offscreen() //to track when u r offscreen
]);

//player only jump when grounded
player.onKeyPress("space", ()=>{
    if(player.isGrounded()){
        player.jump();
    }
})

//if player exit the game
player.onExitScreen(()=>{
    k.go("gameover")
})

//call the scene
k.scene("gameover",()=>{
    k.add([k.text("Game Over!"),
        k.pos(k.center())
    ])
})

//another rectangle object
k.add([k.rect(k.width(),300),
    k.pos(0,500),
    k.area(), 
    k.outline(3),
    k.body({isStatic: true}) 
])


let counter=0;
const counterUI=k.add([k.text("0")])

k.loop(2,()=>{ //loop after every one sec
    //increase the counter on screen
    counter++;
    counterUI.text=counter;

    const speeds=[300,500,800,1000,1500];
    const currentSpeed= speeds[Math.floor(Math.random() * speeds.length)]
    

    k.add([k.rect(50,50), 
        k.pos(1000,500),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1,0),currentSpeed) //gave the direction to the boxes
    ])
})