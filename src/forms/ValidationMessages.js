const GetMessages = (elem) => {
    const messages = [];
    if(elem.validity.valueMissing){
        messages.push('Value Required');
    }
    if(elem.validity.typeMismatch){
        messages.push(`Invalid ${elem.type}`);
    }
    return messages;
}

export default GetMessages;
