export default analyzerConfig;
declare namespace analyzerConfig {
    const queue: string[];
    const stopWords: string[];
    const wordsToRemove: string[];
    const maxSlugLength: number;
    const maxUrlLength: number;
    const maxMeta: number;
}
