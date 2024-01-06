import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.allSettled([
      uploadPhoto(),
      createUser(),
    ]);

    return { photo: photo.value, user: user.value };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}
