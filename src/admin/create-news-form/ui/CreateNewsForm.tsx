import { useCreateNewsMutation } from '@/widgets/news/api/api';
import styles from './styles.module.scss';
import { useState } from 'react';

const CreateNewsForm: React.FC = () => {
  // { isLoading, isError, isSuccess }
  const [createNews] = useCreateNewsMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setCoverImage(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !content || !coverImage || title.length < 10) {
      alert("Please fill in all fields correctly(title length > 10) and upload a cover image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("coverImage", coverImage);

    try {
      // .then(newNews => onSetNews(currentNews => [...currentNews, newNews])
      await createNews(formData).unwrap();
      alert('News was succesfully added');
      setTitle('');
      setContent('');
      setCoverImage(null);
    } catch (error) {
      console.error('Failed to create news:', error);
    }
  }

  return (
    <section className={styles.section}>
    <div className="container">
        <form onSubmit={handleSubmit} className={styles.form}>
          <h4>Fill in for create news</h4>
        <div className={styles.item}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
                required
                placeholder='Enter a title'
              className={styles.title}
            />
          </label>
        </div>
        <div className={styles.item}>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              
            ></textarea>
          </label>
        </div>
        <div className={styles.item}>
          <label>
            Cover Image:
            <input type="file" onChange={handleFileChange} accept="image/*" required />
          </label>
        </div>
        <button type="submit" className={styles.btn}>Create News Article</button>
      </form>
      </div>
    </section>
  );
};

export default CreateNewsForm;
