/*
    A Lychrel number is a natural number that cannot form a palindrome through the iterative process of repeatedly
    reversing its digits and adding the resulting numbers.

    196 is the very first natural number which is a Lychrel number.

*/



const reverse = (num) => parseInt(num.toString().split('').reverse().join(''));

const add = (a, b) => (a + b);

const isPalindrome = (num) => (reverse(num) == num) ? true : false;

const limit = 50; // setting the limit so that code won't go in infinite loop

const isReverseSumHavingPalindrome = (num) => {
    let flag = false;
    let i = 0;
    let temp = num;
    while (i <= limit) {
        temp = add(temp, reverse(temp));
        if (isPalindrome(temp)) {
            flag = true;
            break;
        }
        i++;
    }
    if (i <= limit) {
        if (flag) {
            return true;
        } else {
            return false;
        }
    } else {
        if (flag) {
            return true;
        } else {
            return false;
        }
    }
}

const getNonPalindrome = () => {
    let i = 0;
    while (true) {
        if (isReverseSumHavingPalindrome(i)) {
            i++;
        } else {
            break;
        }
    }
    return i;
}

console.log(getNonPalindrome());
