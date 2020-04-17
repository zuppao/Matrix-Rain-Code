//https://p5js.org/reference
//  ref of matrix characters: https://scifi.stackexchange.com/questions/137575/is-there-a-list-of-the-symbols-shown-in-the-matrixthe-symbols-rain-how-many
//  inspiration https://www.youtube.com/watch?v=S1TQCi9axzg
// -> Backlog <-
//  

var sushiCharacters = [];
var matrix = [];
var elapsedTime, pause;

function preload(){

}

function setup() {
    createCanvas(600,400);
    this.sushiCharacters.push('1','2','5','7','8','9','0','3','4','Z',
                              ':','.','"','=','*','+','|','_','--',
                              '\u30F2','\u30A1','\u30A5','\u30A7','\u30A9','\u30AB','\u30AD','\u30B1','\u30B3','\u30B5','\u30B7','\u30B9','\u30BB','\u30BD','\u30BF','\u30C3','\u30C6','\u30CA','\u30CB','\u30CC','\u30CD','\u30CF','\u30D2','\u30DB','\u30DE','\u30DF','\u30E0','\u30E1','\u30E2','\u30E4','\u30E5','\u30E9','\u30EA','\u30EE');
    for(var i=0 ; i<=96 ; i++){
        this.sushiCharacters.push(String.fromCharCode(0x30A0 + i));
    }



    for(var y=0 ; y<33 ; y++) {


        for(var x=0; x<50 ; x++){
            this.matrix.push(
                new LetterBox(x,y,
                              6+(x*12),12+(y*12),
                              this.sushiCharacters[Math.round(random(0, this.sushiCharacters.length))])
                              //String.fromCharCode(0x30A0 + round(random(0,96))))
            );
        }
    }

    this.elapsedTime=0;
    this.pause=false;

    
}

function draw() {
    this.Update();

    this.elapsedTime+=deltaTime;
    
    if(this.elapsedTime>=2000){
        this.elapsedTime=0;

        //setInterval(RunColumn, 1000,Math.round(random(0,this.matrix.length-1))); //continua chamando a funcao a cada x segundos
        //setTimeout(RunColumn, 0,round(random(0,33))); //chama uma vez a funcao apos  segundos
        
        setTimeout(RunColumn, round(random(2000,7000)),round(random(0,49)));
        setTimeout(RunColumn, round(random(2000,7000)),round(random(0,49)));
        setTimeout(RunColumn, round(random(3000,5000)),round(random(0,49)));
        setTimeout(RunColumn, round(random(2000,4000)),round(random(0,49)));
        setTimeout(RunColumn, round(random(3000,8000)),round(random(0,49)));
    }

    
    
    background(0);
    //fill(0,255,50);
    //text('\u30BD',200,200);
    for(var i=0 ; i<this.matrix.length ; i++) {
        this.matrix[i].Show();
    }
    //this.matrix[105].Show();
}


function Update() {
    //randomly change 1 symbol in each interaction
    for(var i=0 ; i<10 ; i++){
        this.matrix[Math.round(random(0,this.matrix.length-1))]
            .character = this.sushiCharacters[Math.round(random(0, this.sushiCharacters.length))];
    }
}

function keyPressed() {
	if (key === ' ') {
        if(this.pause){
            loop();
        } else {
            noLoop();
        }
        this.pause= !this.pause;
    }
}



function RunColumn(_x) {
    
        

    //this.matrix[105].DoLightingEffect=true;
    var interval=round(random(80,400));
    var amount=interval;
    for(var i=0 ; i<33 ; i++){
        this.matrix.forEach(element => {
            if(element.MatX===_x && element.MatY===i){
                //element.DoLightingEffect=true;

                
                setTimeout(function (){
                    element.DoLightingEffect=true;
                },amount );
                amount+=interval;
            }
        });

       
    }
}


class Column{
    constructor(x){
        //this.X = _x;
        this.line = [];
    }
}