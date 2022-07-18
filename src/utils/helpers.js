function parsePath(uri = '') {
    return `${process.env.PUBLIC_URL}${uri}`;
}

const mantainancePath = '/mantainance';

export { mantainancePath, parsePath };
