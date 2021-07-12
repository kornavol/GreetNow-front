export const sendText = (text) => {
    return {
        type: "SEND_TEXT",
        text: text
    };
};

export const sendImg = (imgUrl) => {
    return {
        type: "SEND_IMAGE",
        text: imgUrl
    };
};