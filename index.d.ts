declare namespace parseYouTubeChapters {
  export type Chapter = { start: number, title: string }
  export type Options = { extended?: boolean }
}

declare function parseYouTubeChapters(description: string, options?: parseYouTubeChapters.Options): parseYouTubeChapters.Chapter[]

export = parseYouTubeChapters
