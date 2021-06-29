export declare type StarmanRunner = (name: string, steps: StarmanStep[]) => void;
export interface StarmanEnvironmentVariables {
    [key: string]: string;
}
export declare type StarmanStepObjectBody = {
    [key: string]: any;
};
export declare type StarmanStepRawBody = string;
export declare type StarmanStepBody = StarmanStepObjectBody | StarmanStepRawBody;
export declare type StarmanRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface StarmanStep {
    name: string;
    test: Function | Function[];
    preRequest: Function | Function[];
    request: {
        url: string;
        query?: {
            key: string;
            value: string;
        }[];
        method: StarmanRequestMethod;
        header: {
            key: string;
            value: string;
        }[];
        body?: StarmanStepBody;
    };
}
export declare function CreatePostmanEnvFromStarmanEnv(envs: StarmanEnvironmentVariables): {
    name: string;
    values: {
        key: string;
        value: string;
        "description": {
            "content": string;
            "type": string;
        };
        enabled: boolean;
    }[];
    id: string;
};
export declare function CreatePostmanCollectionItemFromStarmanRequest(step: StarmanStep): {
    name: string;
    event: {
        listen: string;
        script: {
            type: string;
            exec: string | string[];
        };
    }[];
    request: {
        url: string;
        query?: {
            key: string;
            value: string;
        }[];
        method: StarmanRequestMethod;
        header: {
            key: string;
            value: string;
        }[];
        body?: StarmanStepBody;
    };
};
