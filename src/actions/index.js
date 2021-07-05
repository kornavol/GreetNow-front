export const sendText = (text) => {
    return {
        type: "SEND_TEXT",
        text: text
    };
};