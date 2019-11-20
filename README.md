# Rocket!



## What is Rocket?
> Rocket is simple search engine.
 It's depends on many APIs like (Unsplash, New York Times, And more..).
 It's have *(Until now)* two kind of searches **(Images, Article)**
![Rocket!](https://3.top4top.net/p_1418t5yy41.gif)
---

## Structure
##### `Rocket V1.0.00` 
*You can see updates by moving between commits*
1. Let user type what to search.
2. Let user choose type of search
3. Send AJAX request to (Unsplash, NYT).
4. Recieve data from APIs then parsed it.
5. Determine which important from parsed data.
6. Fill the document by data that user need.


## changelog
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
