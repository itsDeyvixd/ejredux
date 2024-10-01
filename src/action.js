export const setInc = (val) => {
    return {
        type: "INCREMENT",
        inc: val,
    };
};
export const setDec = (val) => {
    return {
        type: "DECREMENT",
        dec: val,
    };
};
