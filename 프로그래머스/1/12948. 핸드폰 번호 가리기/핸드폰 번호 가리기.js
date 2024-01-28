function solution(phone_number) {
 
    return phone_number.split('').map((item, i) => {
        if (i < phone_number.length - 4)
            return '*';
        else
            return item;
    }).join('');
}