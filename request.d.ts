import { StarmanStep, StarmanStepBody } from './runner';
export declare class StarmanRequestStep implements StarmanStep {
    name: string;
    test: any[];
    preRequest: any[];
    request: StarmanStep['request'];
    query: string;
    constructor(name: string);
    private reloadURL;
    AddQuery(query: {
        [key: string]: string | number | undefined;
    }): this;
    Get(url: string): this;
    Post(url: string): this;
    Put(url: string): this;
    Delete(url: string): this;
    AddHeader(key: string, value: string): this;
    AddBody(body: StarmanStepBody): this;
    AddTest(test: StarmanTestFunc): this;
    AddPreRequest(preRequest: StarmanPreRequestFunc): this;
}
export declare type StarmanTestFunc = (pm: any) => void;
export declare type StarmanPreRequestFunc = (pm: any) => void;
