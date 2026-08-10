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
        case 'svideo':
            return '6000';
        case 'mv':
            return 'D';
        case 'vrbt':
            return 'M';
        default:
            return '';
    }
}