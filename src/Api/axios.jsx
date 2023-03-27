import axios from 'axios';

export default axios.create({
    baseURL: 'https://127.0.0.1:8000/api/login_check'
});

// import axios from 'axios';

// const token = localStorage.getItem('token');
// const headers = {
//   Authorization: `Bearer ${token}`,
// };

// async function getProtectedData() {
//   try {
//     const response = await axios.get('https://127.0.0.1:8000/api/login_check', { headers });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default getProtectedData;
