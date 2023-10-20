// crud operations

// const mongodb=require('mongodb');
// const mongoclient=mongodb.MongoClient

// // const connectionurl='mongodb://localhost:27017';
// const connectionurl='mongodb://127.0.0.1:27017';
// const databasename='task-manager';

// mongoclient.connect(connectionurl,{useUnifiedTopology: true},(error,client)=>{
//     if(error){
//         return console.log('unable to connect to database !!');
//     }

//     console.log('connected correctly !!');
//     // const db = client.db(databasename);
//     // db.collection('users').insertOne({
//     //     name:'kushagra',
//     //     age : 22
//     // },(error,result)=>{
//     //     if(error) return console.log('unable to insert documents !!');

//     //     console.log(result.ops);
//     // });

// });





// // video -> 76
// const mongodb=require('mongodb');
// const mongoclient=mongodb.MongoClient
// const connectionurl='mongodb://127.0.0.1:27017';
// const databasename='task-manager';

// mongoclient.connect(connectionurl,{useUnifiedTopology: true},(error,client)=>{
//     if(error){
//         return console.log('unable to connect to database !!');
//     }

//     console.log('connected correctly !!');
//     // const db = client.db(databasename);
//     // db.collection('users').insertOne({
//     //     name:'kushagra',
//     //     age : 22
//     // },(error,result)=>{
//     //     if(error) return console.log('unable to insert documents !!');

//     //     console.log(result.ops);
//     // });

//     // db.collection('users').insertMany([
//     //     {
//     //         name:'kushagra',
//     //         age : 22
//     //     },{
//     //         name:'agrawal',
//     //         age : 23
//     //     }
//     // ],(error,result)=>{
//     //     if(error) return console.log('unable to insert documents !!');

//     //     console.log(result.ops);
//     // });

//     // -----------------------------------------------challenge------------
//     const db=client.db(databasename);
//     db.collections('tasks'),insertMany([
//         {
//             description:'this is the first file',
//             completed:true
//         },{
//             description:'this is the second file',
//             completed:false
//         },{
//             description:'this is the third file',
//             completed:true
//         }
//     ],(error,result)=>{
//         if(error) return console.log('unable to insert documents !!');

//         console.log(result.ops);
//     })

// });
 












// video -> 77
// const mongodb=require('mongodb');
// const mongoclient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectId          yh new line add hui hai ismien

// pichli teen lines ko ek line mein krna 
// const {MongoClient,ObjectID}=require('mongodb');

// const connectionurl='mongodb://127.0.0.1:27017';
// const databasename='task-manager';

// const id = new ObjectID();
// console.log(id);

// MongoClient.connect(connectionurl,{},(error,client) => {
//     if(error){
//         return console.log('unable to connect to database !!');
//     }
//     console.log('connected correctly');

// });
 




// video-> 78   ab yhn se fetching start hogi
// const {MongoClient,ObjectID}=require('mongodb');

// const connectionurl='mongodb://127.0.0.1:27017';
// const databasename='task-manager';

// MongoClient.connect(connectionurl,{},(error,client) => {
//     if(error){
//         return console.log('unable to connect to database !!');
//     }

//     const db=client.db(databasename);

//     db.collection('users').findOne({name:'kushagra'},(error,user)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(user);
//     });

//     db.collection('users').findOne({name:'kushagra',age:23},(error,user)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(user);
//     });

//     db.collection('users').findOne({_id:new ObjectID("")},(error,user)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(user);
//     });

//     //////////////////////////////////////////////////////////////////////

//     db.collection('users').find({age:23}).toArray((error,users)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(user);
//     });
//     db.collection('users').find({age:23}).count((error,count)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(count);
//     });

//     ///challenge
//     db.collection('tasks').findOne({_id:new ObjectID("")},(error,user)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(user);
//     });

//     db.collection('tasks').find({completed}).toArray((error,user)=>{
//         if(error){
//             return console.log('unable to fetch');
//         } 

//         console.log(user);
//     })


// });






// video -> 80   updateOne and updateMany
// const {MongoClient,ObjectID}=require('mongodb');

// const connectionurl='mongodb://127.0.0.1:27017';
// const databasename='task-manager';

// MongoClient.connect(connectionurl,{},(error,client) => {
//     if(error){
//         return console.log('unable to connect to database !!');
//     }

//     const db=client.db(databasename);

//     // db.collections('users').updateOne({_id:new ObjectID("")},{
//     //     $set:{
//     //         name:'mike'
//     //     }
//     // }).then((resolve)=>{
//     //     console.log(resolve);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // });

//     // db.collections('users').updateOne({_id:new ObjectID("")},{
//     //     $inc:{
//     //         age:1
//     //     }
//     // }).then((resolve)=>{
//     //     console.log(resolve);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // });



//     // challenge
//     db.collections('tasks').updateMany({completed:false},{
//         $set:{
//             completed:true
//         }
//     }).then((result)=>{
//         console.log(result.modifiendCount);    // yh yh batayega ki kitne update hue
//     }).catch((error)=>{
//         console.log(error);
//     });

// });






// vidoe -> 81   deleteOne and deleteMany
const {MongoClient,ObjectID}=require('mongodb');

const connectionurl='mongodb://127.0.0.1:27017';
const databasename='task-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionurl,{},(error,client) => {
    if(error){
        return console.log('unable to connect to database !!');
    }

    const db=client.db(databasename);
    // db.collections('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    // challenge  
    db.collections('users').deleteOne({
        desciption:'clean the house'
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });



});

