import { StarmanRunner, StarmanEnvironmentVariables } from './runner';
interface StarmanRunnerOptions {
    outputDir?: string;
    collectionName?: string;
    environmentName?: string;
}
export default function Starman(steps: ((runner: StarmanRunner) => void)[], environment: StarmanEnvironmentVariables, options?: StarmanRunnerOptions): Promise<{}>;
export declare function StringVar(name: string): string;
export declare function NumberVar(name: string): number;
export * from './request';
export * from './runner';
