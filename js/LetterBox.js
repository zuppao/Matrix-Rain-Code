class LetterBox {
    constructor(_matX,_matY,_posX,_posY,_character){
        /*this.Position = {
            X: _posX,
            Y: _posY
        }
        this.Matrix = {
            X: _matX,
            Y: _matY
        }*/
        this.MatX = _matX;
        this.MatY = _matY;
        this.PosX = _posX;
        this.PosY = _posY;
        this.character = _character;
        this.elapsedTime=0;
        this.colorIntervalTime=300;

        this.DoLightingEffect = false;

        this.color = [];
        this.colorIdx=0;
        //color(10,200,20)
        this.color.push(color(0),
                        color(199,199,199),
                        color(174,173,172),
                        color(156,157,154),
                        //color(115,112,118),
                        color(1,142,30),
                        color(50,126,69),
                        color(51,80,59),
                        color(19,67,24)
                        
                        //...reduz o alpha
                        );
        
                    
        
    }

    Show = function () {
        //fill(10,200,20);
        fill(this.color[this.colorIdx]);
        textFont('sans-serif');//Verdana
        textLeading(12);
        textAlign(CENTER);
        text(this.character, this.PosX, this.PosY);

        if(this.DoLightingEffect){
            this.elapsedTime+=deltaTime;
            if(this.elapsedTime>=this.colorIntervalTime){
                this.elapsedTime=0;
                this.Lighting();
            }
        }
    }

    /*DoLightingEffect = function (){
        //setTimeout(this.Lighting, 0);
        this.LightingEffectTimmer = setInterval(Lighting, 500);
    }*/

    Lighting = function (){
        this.colorIdx++;

        if(this.colorIdx === 4){
            this.colorIntervalTime=2000;
        } else if(this.colorIdx > 4){
            this.colorIntervalTime=300;
        } 
        if(this.colorIdx === this.color.length){
            this.colorIdx=0;
            this.elapsedTime=0;
            this.DoLightingEffect=false;
        }
        
    }    

}


