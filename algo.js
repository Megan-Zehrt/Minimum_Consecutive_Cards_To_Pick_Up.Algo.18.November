// 2260. Mimimum Consecutive Cards To Pick Up



// You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.







/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    
    let min = Infinity
    let left = 0
    let right = 0
    let window = new Map()

    while(right < cards.length){

        let char = cards[right]

        while(window.has(char)){
            min = Math.min(min, right - left + 1)
            window.delete(cards[left]) // chat gpt helped here
            left++
        }

        window.set(char, (window.get(char) || 0) + 1)

        right++
    }

    return min === Infinity ? -1 : min
};