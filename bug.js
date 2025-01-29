```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([{
  $match: { ... } 
}, {
  $group: { 
    _id: "$fieldName",
    count: { $sum: 1 } 
  } 
}, {
  $sort: { count: -1 } 
}])
```