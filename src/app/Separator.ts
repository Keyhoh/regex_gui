export interface Separator {
    readonly separator: string;

    separate(array: Array<string>): string;
}
