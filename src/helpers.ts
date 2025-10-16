/* 
Returns a cliped version of a string with an ellipsis tacked on the end.

@param  string  text
*/
function truncateText(text: string) {
    if (text && text.length > 0) {
        return text.length >= 200
            ? `${text.slice(0, 200)}...`
            : `${text}...`;
    }
}

export { truncateText };
