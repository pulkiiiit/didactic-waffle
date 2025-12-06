// This is meathod will user promises
const asyncHandler = (requestHandler) => {
        (req, res, next) => {
            Promise.resolve(requestHandler(req , res , next)).catch((err) => next(err))
        }
}
export {asyncHandler}


// This is wrapper which will help us : this meathod is try catch
// const asyncHandler = (fn) => async (req, res , next) => {
//     try {
//         await fn(req, res , next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
//  }