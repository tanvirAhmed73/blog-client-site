import { db, storage } from "@/lib/fireBase";
import { Timestamp, doc, setDoc,  } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const createNewCategory = async({data, image}) => {
    if (!data?.name) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }
    if (!image) {
        throw new Error("Image is not selected");
    }
    const imageRef = ref(storage, `categories/${data?.slug}.png`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `categories/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id: data?.slug,
        iconURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

export default createNewCategory;