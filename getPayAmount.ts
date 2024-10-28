// const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
//     let result;
//     if ( !isDead ) {
//         result = 1500;
//     } else {
//         if ( isSeparated ) {
//             result = 2500;
//         } else {
//             if ( isRetired ) {
//                 result = 3000;
//             } else {
//                 result = 4000; 
//             }
//         }
//     }
    
//     return result;
// }

// ------------------Correct---------------------

const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

    return isDead ? 1500 : (isSeparated ? 2500 : (isRetired ? 3000 : 4000));

}