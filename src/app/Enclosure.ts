export interface Enclosure {
    readonly opener: string;
    readonly closure: string;

    enclose(text: string): string;
}
