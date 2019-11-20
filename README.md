# Rocket!



## What is Rocket?
> Rocket is simple search engine.<br>
 It's depends on many APIs like (Unsplash, New York Times, And more..).<br>
 It's have *(Until now)* two kind of searches **(Images, Article)**<br><br>
![Rocket!](https://3.top4top.net/p_1418av3x51.png)<br>
---

## Structure
*You can see updates by moving between commits*
##### `Rocket V1.0.10` 
1. Use jQuery.ajax().
##### `Rocket V1.0.00` 
1. Let user type what to search.
2. Let user choose type of search
3. Send AJAX request to (Unsplash, NYT).
4. Receive data from APIs then parsed it.
5. Determine which important from parsed data.
6. Fill the document by data that user need.


## changelog
- **V1.0.10** _Use jQuery $.ajax() instead of [new XMLHttpRequest()]_
- **V1.0.00** _Create the first version of the search engine._

## NextStep!
- **V1.1.00**  _Add another stunning API._
# `Snip!`
```js
unsplashRequest.open(
    'GET',
    `https://api.unsplash.com/search/photos?page=1&query=${Text}&per_page=30`
);
```

>**`Thanks`** **&copy;Mahmoud Hamdy**
