const apiurl = process.env.REACT_APP_APIURL;

const NoPage = () => {

  fetch(`${apiurl}/checkbackend`)
    .then(res => res)
    .then((result) => {
      if (result.status === 200) { console.log("BackEnd Connected") }
    }).catch((e) => {
      console.log(`Error connecting BackEnd ${e}`)
    }).finally(() => {
      console.log('BackEnd chech ended');
    });

  return (
    <>
      <p>No Such Page</p>
    </>
  )
}

export default NoPage;