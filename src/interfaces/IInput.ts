export interface IInput{
    // LabelName:string;
    // LabelHtmlFor:string;
    // Type:string;
    // Value:string;
    // Id:string;
    Label?:{htmlFor: string, labelName?:string, className?:string}
    Input:{type:string, Value?:string|number, id:string, className?:string};
    InputValueHandler:(e:any)=>void;
    className?:string
}