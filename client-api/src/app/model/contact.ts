export class Contact{
    public _id: string;
    public first_name: string;
    public last_name: string;
    public phone_number: string;
    
    constructor(_id, first_name, last_name, phone_number){
        if(_id!=null){
            this._id = _id;
        }
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
    };
}