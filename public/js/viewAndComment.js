// const findPost = async (e) => {
//     console.log("you made it here at least")
//     e.preventDefault()
//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];
//     console.log(id)
//     const response = await fetch (`/api/post/${id}`, {
//         method: 'GET'
//     })
//     if (response.ok) {
//         document.location.replace(`/post/${id}`)
//     } else {
//         alert('Failed to find with given id.')
//     }
// }
// document.querySelector('#goToPost').addEventListener('click', findPost)