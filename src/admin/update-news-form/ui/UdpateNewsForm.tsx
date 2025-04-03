import { useGetNewsItemQuery, useUpdateNewsCoverImageMutation, useUpdateNewsTextMutation } from "@/widgets/news/api/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";

const UpdateNewsForm = () => {
  const { id } = useParams();
  const [updateNewsText, {isLoading}] = useUpdateNewsTextMutation();
  const [updateNewsImage, {isLoading: imageLoad}] = useUpdateNewsCoverImageMutation();
  const { data, refetch } = useGetNewsItemQuery({ id: id?.toString() })
  const [title, setTitle] = useState(data?.title);
  const [content, setContent] = useState(data?.content);
  const [isChangeImage, setIsChangeImage] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  
  const updateImage = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!coverImage) {
      alert("Будь ласка виберіть картинку");
      return;
    }

    const formData = new FormData();
    formData.append("coverImage", coverImage);

    try {
      await updateNewsImage({ id: id as string, formData }).unwrap();
      alert('Картинка була успішно змінена');
      setCoverImage(null);
      refetch();
    } catch (error) {
      console.error('Failed to update image:', error);
    }
  }

  const updateText = async (event: React.FormEvent) => {
      event.preventDefault();
  
      if (!title || !content ||  title.length < 10 || content.length < 10) {
        alert("Будь ласка заповніть поля коректно(Заголовок й контент більше 10 символів)");
        return;
      }
  
    const newsItem = {
      id: id as string,
      title,
      content,
    };
  
      try {
        await updateNewsText(newsItem).unwrap();
        alert('Текст новини було успішно змінено');
      } catch (error) {
        alert(`Щось пішло не так: ${(error as any).data.error}`);
      }
    }

  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        {data ? (<form onSubmit={updateText} className={styles.form}>
          <h4 style={{textAlign: 'center'}}>Змініть поля щоб які ви хочете адаптувати</h4>

          <div className={styles.item}>
            <label>
              Заголовок:
              <input
                type="text"
                defaultValue={data.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={styles.title}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Контент:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                defaultValue={data.content}
              ></textarea>
            </label>
          </div>
          <div className={styles.item}>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
              Картинка:
              <img src={data.coverImageUrl} style={{width: '190px'}} />
            </label>
          </div>
          {/* <div className={styles.item}>
            <label>
              Картинка:
              <input type="file" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} accept="image/*" required />
            </label>
          </div> */}
          <div className={styles.buttons}>
            <button disabled={isLoading} className={styles.btn}>{isLoading ? 'Змінення...' : 'Змінити новину'}</button>
            <button type="button" className={styles.btn} onClick={() => setIsChangeImage(true)}>Змінити картинку</button>
          </div>
        </form>) : <h2>Невдалось знайти новину...</h2>}
        {isChangeImage && <form className={styles.form} onSubmit={updateImage}>
          <h4>Виберіть файл щоб змінити картинку</h4>
          <div className={styles.item}>
            <label>
              Картинка:
              <input type="file" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} accept="image/*" required />
            </label>
          </div>
          <button disabled={imageLoad} className={styles.btn}>{imageLoad? 'Змінення...' : 'Змінити картинку'}</button>

        </form>}
      </div>
      </section>
   );
}
 
export default UpdateNewsForm;