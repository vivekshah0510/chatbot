const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    HOME:  Symbol("home"),
    STAY: Symbol("stay"),
    INSIDE: Symbol("inside"),
    UPSTAIR: Symbol("upstair"),
    REALITY: Symbol("reality"),
    PASSAGE: Symbol("passage"),
    STAYHOME: Symbol("stayhome")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is summertime again, vacation time. What would you like to do? Uncle's house or Stay home?";
                this.stateCur = GameState.HOME;
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("home")){
                    sReply = "Uncle calls you to visit his city where he take you to some adventure place. Now what you want to do? Go to Uncle's house.";
                }else{
                    sReply ="He takes you to the tour around the city where there are many old buildings but the oldest one is define as a haunted by him. What you like to do? Go inside or Stay there?";
                    this.stateCur = GameState.INSIDE;
                }
                break;
                case GameState.STAY:
                    if(sInput.toLowerCase().match("stay")){
                        sReply="Uncle says it is really adventure lets go inside. Now, Go inside or Stay there?"
                        this.stateCur = GameState.INSIDE;
                    }
                    else{
                        sReply = "There is a large knocker at the door. What you want to do? Go inside or Go back?"
                        this.stateCur = GameState.STAY;
                    }
            case GameState.INSIDE:
                if(sInput.toLowerCase().match("inside")){
                    sReply = "You open the door and  step inside and suddenly a sharp arrow streaks across in front of you! Do you go Upstairs? Or Go to the Swinging door?"
                    this.stateCur = GameState.UPSTAIR;
                }
                break;
            case GameState.UPSTAIR:
                if(sInput.toLowerCase().match("upstair")){
                    sReply = "You go up the stairs. You lean against the railing and it breaks. you fall down. Do you think its reality or a dream?";
                    this.stateCur = GameState.REALITY;
                }else{
                    sReply = "You go through the swinging doors. You walk through the room. Do you go in to the passage? or Go to the Closet?";
                    this.stateCur = GameState.PASSAGE;
                }
                break;
            case GameState.REALITY:
                this.stateCur = GameState.PASSAGE;
                break;
            case GameState.PASSAGE:
                if(sInput.toLowerCase().match("passage")){
                    sReply = "You go into the passage it takes you to the trapdoor and the door opens in your uncle's house. Do you think its a dream or reality?";
                    this.stateCur = GameState.STAYHOME;
                }else{
                    sReply = "You go into the closet you fall through a trapdoor and breaks your legs. What do you think its a dream or realityt?";
                    this.stateCur = GameState.STAYHOME;
                }
                break;
            case GameState.STAYHOME:
                    sReply = "You are at home and eating IceCream."
                    break;
            case GameState.DREAM:
                    this.stateCur = GameState.STAYHOME;
                    break;
        }
        return([sReply]);
    }
}