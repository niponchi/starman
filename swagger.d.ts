import { StarmanRequestStep } from "./request";
export interface SwaggerMethodParameter {
    type: string;
    description: string;
    name: string;
    in: "query" | "body" | "path";
    required: boolean;
}
export interface SwaggerMethodResponse {
    description: string;
    schema: {
        type: "object";
        $ref: string;
    };
}
export declare type SwaggerStatusCode = "200" | "201" | "401" | "400" | "403" | "500";
export interface SwaggerMethodSpec {
    tags: string[];
    summary: string;
    parameters: SwaggerMethodParameter[];
    responses: {
        [key in SwaggerStatusCode]: SwaggerMethodResponse;
    };
}
export interface SwaggerRequestPaths {
    get: SwaggerMethodSpec;
    post: SwaggerMethodSpec;
    put: SwaggerMethodSpec;
    delete: SwaggerMethodSpec;
}
export declare function AddRequestToSwaggerCollection(request: StarmanRequestStep): void;
