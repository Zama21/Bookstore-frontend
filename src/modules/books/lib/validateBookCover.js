export const BookCoverConfig = {
    width: 400,
    height: 500,
};

export const validateBookCover = async imgFile => {
    if (imgFile.type.indexOf('image') === -1) return false;
    return new Promise(res => {
        const img = new Image();
        const objectUrl = URL.createObjectURL(imgFile);
        img.src = objectUrl;
        img.onload = function () {
            URL.revokeObjectURL(objectUrl);
            if (this.width !== BookCoverConfig.width || this.height !== BookCoverConfig.height) {
                res(false);
            }
            res(true);
        };
    });
};
