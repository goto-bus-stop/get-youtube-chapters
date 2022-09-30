declare namespace parseYouTubeChapters {
  export type Chapter = { start: number, title: string }
}

declare function parseYouTubeChapters(description: string): parseYouTubeChapters.Chapter[]

export = parseYouTubeChapters
