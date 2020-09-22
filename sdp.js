/**
 * There are 'n' friends on a road and there are 'm' restaurants on the road. All the friends decide to meet at a restaurant. You have to write an algorithm that will choose the restaurant for them so that the average amount walked by the n customers is the least.
You can first describe the algorithm and then write an implementation in the language of your choice.
3
2
1 2 7
2 7
N -> Number of people
M -> Number of restaurants
<N numbers denoting the x co.ordinates of the N people>
<M numbers denoting the x co.ordinates of the M restaurants>
Hence in the above example there are three people at 1, 2 and 7
There are two restaurants at 2 and 7.
The algorithm will choose 2 because on average units walked for the 3 people is 2 units (1, 0 and 5 is the distance of the three people from restaurant 2)

 */

 /**
  * 
  * @param {Array} peoplePosition Position of people in a linier set
  * @param {Array} restaurantPosition Position of restaurants in same linier set
  * 
  * Algorithm: in case of nearest restaurant, sum of distance to every person from the restaurant will be minimal  
  */
 function findShortestDistance(peoplePosition, restaurantPosition){
    let nearestRestaurantPosition;
    let totalStepForRestaurant = restaurantPosition.map((pos,i) => {
        let distance = 0;
        for(let j=0; j<peoplePosition.length; j++){
            distance += Math.abs(pos-peoplePosition[j]);
        }

        return {
            res:pos,
            totalSteps: distance
        }
    });
   
     console.log(totalStepForRestaurant);

    while(totalStepForRestaurant.length > 0){
        let restaurant = totalStepForRestaurant.pop();
        if(typeof(nearestRestaurantPosition) === 'undefined' || nearestRestaurantPosition.totalSteps > restaurant.totalSteps) 
        nearestRestaurantPosition = restaurant;
    }
    return nearestRestaurantPosition.res;
 }





 function findShortestDistanceO_n(peoplePosition, restaurantPosition){
     let sortedPpl = peoplePosition.sort();
     let sortedDist = restaurantPosition.sort();

     while(sortedDist.length > 0){
        let r = sortedDist.pop()
        let searched = searchElement(r,sortedPpl, {rightSum:0,leftSum:0});
        console.log(r, searched.leftSum+searched.rightSum);
     }
     

     

 }

 const searchElement = (e, sortedArr,initial) => {
     if(sortedArr.length <= 1){
         arrE = sortedArr.pop()
         return {
            rightSum: e > arrE ? initial.rightSum : initial.rightSum + Math.abs(arrE - e),
            leftSum: e > arrE ? initial.leftSum + Math.abs(e - arrE) : initial.leftSum
         }
     }
    let mid = Math.floor(sortedArr.length/2);
    let left = sortedArr.slice(0,mid);
    let right = sortedArr.slice(mid, sortedArr.length);
    let calculated = {
        rightSum: initial.rightSum,
        leftSum: initial.leftSum
    };

    if(right[0] > e){
        calculated.rightSum += (right.reduce((reduced,val,i) => reduced + val ) - (e * right.length));
        calculated = searchElement(e, left, calculated);
    } else {
        calculated.leftSum += ((e * left.length)-(left.reduce((reduced,val,i) => reduced + val)));
        calculated = searchElement(e, right, calculated);
    }
    return calculated;
 }

 const searchElement = (e, sortedArr,initial) => {
    if(sortedArr.length <= 1){
        arrE = sortedArr.pop()
        return {
           rightSum: e > arrE ? initial.rightSum : initial.rightSum + Math.abs(arrE - e),
           leftSum: e > arrE ? initial.leftSum + Math.abs(e - arrE) : initial.leftSum
        }
    }
   let mid = Math.floor(sortedArr.length/2);
   let left = sortedArr.slice(0,mid);
   let right = sortedArr.slice(mid, sortedArr.length);
   let calculated = {
       rightSum: initial.rightSum,
       leftSum: initial.leftSum
   };

   if(right[0] > e){
       calculated.rightSum += (right.reduce((reduced,val,i) => reduced + val ) - (e * right.length));
       calculated = searchElement(e, left, calculated);
   } else {
       calculated.leftSum += ((e * left.length)-(left.reduce((reduced,val,i) => reduced + val)));
       calculated = searchElement(e, right, calculated);
   }
   return calculated;
}

 //console.log(searchElement(8,[1,2,4,6,7,9,11,13,14], {rightSum:0,leftSum:0}));

//  console.log(findShortestDistance([1, 2, 7], [2, 7]));
//  console.log(findShortestDistanceO_n([1, 2, 7], [2, 7]));
//  console.log(findShortestDistance([1, 2, 7, 3, 4], [2, 7]));
//  console.log(findShortestDistanceO_n([1, 2, 7, 3, 4], [2, 7]));
//  console.log(findShortestDistance([1, 2, 7], [2, 7, 3]));
//  console.log(findShortestDistanceO_n([1, 2, 7], [2, 7, 3]));
//  console.log(findShortestDistance([1, 2, 7, 3, 4], [2, 7, 3]));
  console.log(findShortestDistanceO_n([1, 2, 7, 3, 4], [2, 7, 3]));

//         1, 2, 7, 3, 4
//  2 ->   1, 0, 5, 1, 2 -> 9
//  7 ->   6, 5, 0, 4, 3 -> 18