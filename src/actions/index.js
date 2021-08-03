export const sendText = (text) => {
    return {
        type: "SEND_TEXT",
        text: text
    };
};

export const sendPict = (picture) => {
    return {
        type: "SEND_PICT",
        picture: picture
    };
};