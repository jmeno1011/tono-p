export const sliceUrl = (parentUrl, url) => {
    return url.split(parentUrl)[1].slice(1);
}