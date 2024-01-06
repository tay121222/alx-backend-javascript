import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResult, userResult] = await Promise.allSettled([
      uploadPhoto(),
      createUser(),
    ]);

    const photo = photoResult.status === 'fulfilled' ? photoResult.value : null;
    const user = userResult.status === 'fulfilled' ? userResult.value : null;

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
