export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'success',
    });
  }
  return Promise.reject('The fake API is not working currently');
}
