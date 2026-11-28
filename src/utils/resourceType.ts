export const getResourceId = (name: string) => {
    name = name.toLowerCase().trim();
    switch (name) {
        case 'song':
            return '2';
        case 'album':
            return '2003';
        case 'singer':
        case 'artist':
            return '2002';
        case 'playlist':
            return '2021';
        case 'radio':
            return '2016';
        case 'comment':
            return '3002';
        case 'mv':
            return 'D';
        case 'column':
        case 'commoncolumn':
            return '2011';
        case 'dalbum':
            return '5';
        case 'svideo':
        case 'shortvideo':
            return '6000';
        case 'subjectcolumn':
            return '2010';
        case 'rbt':
        case 'crbt':
            return '0';
        case 'vrbt':
            return 'M';
        case 'link':
            return '4006';
        case 'marketcolumn':
            return '2014';
        case 'migucolumn':
            return '2023';
        case 'ring':
            return '1';
        default:
            return '';
    }
}
const resourceTypeMap: Record<string, string> = {
    '2': 'song',
    '2003': 'album',
    '2002': 'singer',
    '2021': 'playlist',
    '2016': 'radio',
    '3002': 'comment',
    'D': 'mv',
    '2011': 'column',
    '5': 'dalbum',
    '6000': 'svideo',
    '2010': 'subjectcolumn',
    '0': 'crbt',
    'M': 'vrbt',
    '4006': 'link',
    '2014': 'marketcolumn',
    '2023': 'migucolumn',
    '1': 'ring',
}
export function getResourceType(id: string) {
    id = id.trim();
    if (id in resourceTypeMap) {
        return resourceTypeMap[id] || '';
    }
    return '';
}