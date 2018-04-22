export class Team {
    id:number;
    name:string;
    location = {
        lat:"",
        lng:""
    };
    

    constructor(id:number,name:string,location:string){
        this.id = id;
        this.name = name;
        this.location.lat = location;
    }
}