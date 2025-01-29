```javascript
// Corrected aggregation pipeline
aggregate([{
  $match: { ... } 
}, {
  $group: { 
    _id: { fieldName: "$fieldName" }, // Correctly grouping by fieldName
    count: { $sum: 1 } 
  } 
}, {
  $sort: { count: -1 } 
}])
```