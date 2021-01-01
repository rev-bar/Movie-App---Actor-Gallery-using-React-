class Actor {
    constructor(palinActorOrfname,lname,imageUrl,imdbUrl,age) {
        if (typeof palinActorOrfname === 'object' ){

            this.fname = palinActorOrfname.fname;
            this.lname = palinActorOrfname.lname;    
            this.imageUrl = palinActorOrfname.imageUrl;
            this.imdbUrl = palinActorOrfname.imdbUrl;
            this.age = palinActorOrfname.age;
        } else{
            this.fname = palinActorOrfname;
            this.lname = lname;    
            this.imageUrl = imageUrl;
            this.imdbUrl = imdbUrl;
            this.age = age;
        }
    }
  
}

export default Actor;