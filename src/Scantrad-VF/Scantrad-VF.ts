import {
    BadgeColor,
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    MangaBox
} from '../MangaBox'

const SITE_DOMAIN = 'https://scantrad-vf.co'

export const ScatradInfo: SourceInfo = {
    version: getExportVersion('0.0.3'),
    name: 'Scantrad-VF',
    icon: 'icon.png',
    author: 'Ectalite',
    authorWebsite: 'https://github.com/Ectalite',
    description: `Extension that pulls manga from ${SITE_DOMAIN}.`,
    contentRating: ContentRating.MATURE,
    websiteBaseURL: SITE_DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: BadgeColor.GREEN
        }
    ],
    intents: SourceIntents.SETTINGS_UI | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.MANGA_CHAPTERS
}

export class Scantrad extends MangaBox {
    // Website base URL.
    baseURL = SITE_DOMAIN
    

    // Language code supported by the source.
    languageCode = 'fr'

    // Path for manga list.
    mangaListPath = 'manga'

    // Selector for manga in manga list.
    mangaListSelector = 'div.panel-list-story div.list-story-item'

    // Selector for subtitle in manga list.
    mangaSubtitleSelector = 'div.item-right > a.item-chapter'
}
