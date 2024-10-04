import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`Body: ${photoResponse.body}, First Name: ${userResponse.firstName}, Last Name: ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
