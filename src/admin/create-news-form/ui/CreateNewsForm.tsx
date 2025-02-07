import { useCreateNewsMutation } from '@/widgets/news/api/api';
import styles from './styles.module.scss';
import { useState } from 'react';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';

const CreateNewsForm: React.FC = () => {
  // { isLoading, isError, isSuccess }
  const [createNews, {isLoading}] = useCreateNewsMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setCoverImage(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !content || !coverImage || title.length < 10 || content.length < 10) {
      alert("Будь ласка заповніть поля коректно");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("coverImage", coverImage);

    try {
      // .then(newNews => onSetNews(currentNews => [...currentNews, newNews])
      await createNews(formData).unwrap();
      alert('Новина була успішно додана');
      setTitle('');
      setContent('');
      setCoverImage(null);
    } catch (error) {
      alert
      alert(`Щось пішло не так: ${(error as any).data.error}`);
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <form onSubmit={handleSubmit} className={styles.form}>
          <h4 style={{textAlign: 'center'}}>Заповніть всі поля щоб добавити новину</h4>
        <div className={styles.item}>
          <label>
            Заголовок:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
                required
                placeholder='Введіть заголовок...(більше 10 символів)'
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
                placeholder='Введіть контент...(більше 10 символів)'
              
            ></textarea>
          </label>
        </div>
        <div className={styles.item}>
          <label>
            Картинка:
            <input type="file" onChange={handleFileChange} accept="image/*" required />
          </label>
        </div>
          <button type="submit" disabled={isLoading}  className={styles.btn}>{isLoading ? 'Створення...' : 'Створити новину'}</button>
      </form>
      </div>
    </section>
  );
};

export default CreateNewsForm;
