import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let results = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    results = {photo, user};
  } catch (error) {
    res = { photo: null, user: null };
  }
  return results;
}
