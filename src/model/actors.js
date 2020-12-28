class Actors {
    constructor(fname,lname,birthday,imageUrl,imdbUrl) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imageUrl = imageUrl;
        this.imdbUrl = imdbUrl;
    }

    ageCalc() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return age;
    }
}