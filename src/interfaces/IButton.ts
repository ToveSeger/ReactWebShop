export interface IButton{
    children:any;
    type:"button" | "submit" | "reset" | undefined;
    onClick?:any;
    className?:string;
    disabled?:boolean;
}