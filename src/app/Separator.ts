export interface Separator {
    readonly separator: string;

    combine(array: Array<string>): string;
}
