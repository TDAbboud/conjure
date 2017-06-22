import { IStringExample } from "./stringExample";

export interface IUnionTypeExample_StringExample {
    "stringExample": IStringExample;
    type: "stringExample";
}
export interface IUnionTypeExample_Set {
    "set": string[];
    type: "set";
}
export interface IUnionTypeExample_Number {
    "number": number;
    type: "number";
}
export interface IUnionTypeExample_Map {
    "map": { [key: string]: string };
    type: "map";
}
export type IUnionTypeExample = (IUnionTypeExample_StringExample | IUnionTypeExample_Set | IUnionTypeExample_Number | IUnionTypeExample_Map);
function isStringExample(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_StringExample {
    return (obj.type === "stringExample");
}
function isSet(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_Set {
    return (obj.type === "set");
}
function isNumber(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_Number {
    return (obj.type === "number");
}
function isMap(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_Map {
    return (obj.type === "map");
}
export const IUnionTypeExample = {
    isMap: isMap,
    isNumber: isNumber,
    isSet: isSet,
    isStringExample: isStringExample,
};
