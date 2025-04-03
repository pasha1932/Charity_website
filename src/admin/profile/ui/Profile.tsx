import { useState } from "react";
import styles from './styles.module.scss';
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";
import { useUpdateUserContentMutation, useUpdateUserCoverImageMutation } from "../api/profile-api";

const Profile = () => {
  const [updateContent, {isLoading}] = useUpdateUserContentMutation();
  const [updateUserImage, {isLoading: imageLoad}] = useUpdateUserCoverImageMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [isChangeImage, setIsChangeImage] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  
  const updateImage = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!coverImage) {
      alert("Будь ласка виберіть фото");
      return;
    }

    const formData = new FormData();
    formData.append("coverImage", coverImage);

    try {
      await updateUserImage({ formData }).unwrap();
      alert('Аватар був успішно зміненний');
      setCoverImage(null);
    } catch (error) {
      console.error('Failed to update image:', error);
    }
  }

  const updateText = async (event: React.FormEvent) => {
      event.preventDefault();
  
      if (!firstName || !lastName ||  !middleName || !position || !email) {
        alert("Будь ласка заповніть поля коректно");
        return;
      }
  
    const userItem = {
      firstName,
      middleName,
      lastName,
      position,
      email,
    };
  
      try {
        await updateContent(userItem).unwrap();
        alert('Дані користувача було успішно змінено');
      } catch (error) {
        console.error('Failed to update news:', error);
      }
    }

  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <form onSubmit={updateText} className={styles.form}>
          <h4 style={{textAlign: 'center'}}>ЗаповнІть поля для зміни даних користувача</h4>

          <div className={styles.item}>
            <label>
              Ім'я:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Прізвище:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              По-батькові:
              <input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Пошта:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Ким працює:
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          
          {/* <div className={styles.item}>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
              Картинка:
              <img src={data.coverImageUrl} style={{width: '190px'}} />
            </label>
          </div> */}
          {/* <div className={styles.item}>
            <label>
              Картинка:
              <input type="file" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} accept="image/*" required />
            </label>
          </div> */}
          <div className={styles.buttons}>
            <button disabled={isLoading} className={styles.btn}>{isLoading ? 'Змінення...' : 'Змінити дані користувача'}</button>
            <button type="button" className={styles.btn} onClick={() => setIsChangeImage(true)}>Змінити картинку</button>
          </div>
        </form>
        {isChangeImage && <form className={styles.form} onSubmit={updateImage}>
          <h4>Виберіть файл щоб змінити аватар</h4>
          <div className={styles.item}>
            <label>
              Аватар:
              <input type="file" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} accept="image/*" required />
            </label>
          </div>
          <button disabled={imageLoad} className={styles.btn}>{imageLoad? 'Змінення...' : 'Змінити аватар'}</button>

        </form>}
      </div>
      </section>
  );
}
 
export default Profile;