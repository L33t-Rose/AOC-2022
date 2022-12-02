# Advent Of Code

Junior's First Advent of Code :)

# Thoughts:

**Day 1**:
* Day 1 went pretty well. Most of my time was spent trying to figure out how to split the the text properly. Using just `\r\n` would split every number but I wanted to split it so each item in the array was the group of numbers. I finally figured out that I needed to do `\r\n\r\n`. Moving forward from them was pretty easy

* Learned:
    * I watched Rank 1's vid and I didn't think to spread my array into `Math.max()` to get the answer for part 1.
    * You can provide a generic to `Array.reduce` for typesafety.

**Day 2**
* I'm very proud of myself for this solution especially for part 1. Making use of lookup tables to determine if the player wins or not made it very easy to complete it. And even in part 2 my lookup tables really helped with complexity because without it I might have needed to do a bunch of if statements just to determine what I should throw.
* I've added some comments just for some documentation in the future.